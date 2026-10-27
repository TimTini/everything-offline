import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import path from 'node:path';
import { createServer, request } from 'node:http';
import { connect } from 'node:net';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { offlinePlugin, offlineCsp, transformHtml } from '../offline-plugin.mjs';
import { installOfflineGuard } from '../offline-guard.mjs';
import { parseArgs, removeBrowserProfile, resolveApp, startDenyProxy } from '../offline.mjs';

test('HTML transform strips remote scripts and hints before injecting local bootstrap', () => {
  const html = '<html><head><link rel="preconnect" href="https://cdn.example"><script src="https://js.puter.com/v2/"></script><script type="module" src="/src/main.js"></script></head></html>';
  const output = transformHtml(html, 'notes');
  assert.doesNotMatch(output, /https:\/\/(cdn\.example|js\.puter\.com)/);
  assert.ok(output.indexOf('installOfflineGuard') < output.indexOf('installOfflineSDK'));
  assert.ok(output.indexOf('installOfflineSDK') < output.indexOf('/src/main.js'));
  assert.match(output, /Content-Security-Policy/);
});

test('Email becomes an explicit offline capability gate without its cloud app scripts', () => {
  const source = '<html><head><title>Puter Mail</title><script src="https://js.puter.com/v2/"></script><script type="module" src="/src/main.js"></script></head><body><div id="app">cloud inbox</div></body></html>';
  const output = transformHtml(source, 'email');
  assert.match(output, /<title>Email<\/title>/);
  assert.match(output, /id="offline-unavailable"/);
  assert.match(output, /<h1[^>]*>Email is disabled in offline mode<\/h1>/);
  assert.match(output, /Sending and receiving email require cloud services/);
  assert.match(output, /installOfflineGuard/);
  assert.match(output, /installOfflineSDK/);
  assert.doesNotMatch(output, /Puter Mail|cloud inbox|js\.puter\.com|src\/main\.js/);
});

test('browser guard blocks cross-origin network APIs while allowing same-origin and local assets', async () => {
  const blocked = [];
  class FakeXHR { open(_method, url) { this.url = url; } send() { blocked.push(this.url); } }
  const location = new URL('http://127.0.0.1:4173/');
  const context = {
    URL, location, console, Promise, setTimeout,
    fetch: async (url) => ({ url }), XMLHttpRequest: FakeXHR,
    WebSocket: class { constructor(url) { this.url = url; } },
    EventSource: class { constructor(url) { this.url = url; } },
    navigator: { sendBeacon: (url) => (blocked.push(url), true), serviceWorker: { register() {} } },
    window: { open: (...args) => args },
    RTCPeerConnection: class {}, WebTransport: class {},
    document: { addEventListener() {}, createElement() { return {}; } },
  };
  vm.runInNewContext(`(${installOfflineGuard.toString()})()`, context);
  assert.equal((await context.fetch('/api/local')).url, '/api/local');
  assert.equal((await context.fetch('blob:http://127.0.0.1:4173/id')).url, 'blob:http://127.0.0.1:4173/id');
  await assert.rejects(context.fetch('https://outside.invalid/data'), /offline/);
  const xhr = new context.XMLHttpRequest();
  assert.throws(() => xhr.open('GET', 'https://outside.invalid/x'), /offline/);
  assert.doesNotThrow(() => xhr.open('GET', '/same-origin'));
  assert.throws(() => new context.WebSocket('wss://outside.invalid'), /offline/);
  assert.equal(new context.WebSocket('ws://127.0.0.1:4173/socket').url, 'ws://127.0.0.1:4173/socket');
  assert.throws(() => new context.EventSource('https://outside.invalid/events'), /offline/);
  assert.equal(context.navigator.sendBeacon('https://outside.invalid/p', ''), false);
  assert.equal(context.window.open('https://outside.invalid'), null);
  assert.deepEqual(context.window.open('/local'), ['/local']);
  assert.throws(() => new context.RTCPeerConnection(), /offline/);
  assert.throws(() => new context.WebTransport('https://outside.invalid'), /offline/);
  await assert.rejects(context.navigator.serviceWorker.register('/worker.js'), /offline/);
  assert.deepEqual(blocked, []);
});

test('launcher parses supported modes and resolves only real non-Meetings app entries', async () => {
  assert.deepEqual(parseArgs(['notes', '--port', '4310', '--no-browser']), {
    app: 'notes', port: 4310, browser: false, mode: 'dev',
  });
  assert.equal((await resolveApp('notes')).name, 'notes');
  await assert.rejects(resolveApp('../meetings'), /Invalid app/);
  await assert.rejects(resolveApp('meetings'), /excluded/);
  await assert.rejects(resolveApp('tmp'), /Invalid app/);
  await assert.rejects(resolveApp('assets'), /src\/main\.js entrypoint/);
  assert.throws(() => parseArgs(['notes', '--port', '0']), /port/);
  assert.throws(() => parseArgs(['notes', '--wat']), /Unknown option/);
});

test('HTTP policy includes worker responses and restrictive privacy headers', async () => {
  assert.match(offlineCsp, /worker-src 'self' blob:/);
  assert.match(offlineCsp, /connect-src 'self'/);
  assert.doesNotMatch(offlineCsp, /(?:ws|wss):\/\//);
  assert.match(offlineCsp, /frame-src 'none'/);
  assert.doesNotMatch(offlineCsp, /sandbox/);
  let middleware;
  const plugin = offlinePlugin('notes');
  const server = { middlewares: { use(handler) { middleware = handler; } } };
  plugin.configureServer(server);
  const values = {};
  const response = {
    setHeader(name, value) { values[name] = value; },
    writeHead() { this.sentHeaders = { ...values }; },
  };
  middleware({}, response, () => {});
  values['Content-Security-Policy'] = 'default-src *';
  response.writeHead(200);
  Object.assign(values, response.sentHeaders);
  assert.match(values['Content-Security-Policy'], /sandbox allow-scripts allow-same-origin allow-forms allow-downloads/);
  assert.match(values['Content-Security-Policy'], /worker-src 'self' blob:/);
  assert.equal(values['X-DNS-Prefetch-Control'], 'off');
  assert.equal(values['Referrer-Policy'], 'no-referrer');
});

test('browser profile cleanup refuses paths outside its temp prefix', async () => {
  const repo = path.resolve(import.meta.dirname, '../..');
  await assert.rejects(removeBrowserProfile(repo), /Refusing to remove/);
});

test('cross-origin fetch never reaches a local canary server', async (t) => {
  let hits = 0;
  const server = createServer((_req, res) => { hits++; res.end('unexpected'); });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());
  const target = `http://127.0.0.1:${server.address().port}`;
  const context = { URL, location: new URL('http://127.0.0.1:4173/'), fetch: globalThis.fetch, XMLHttpRequest: class { open() {} }, navigator: {}, document: { addEventListener() {} } };
  vm.runInNewContext(`(${installOfflineGuard.toString()})()`, context);
  await assert.rejects(context.fetch(target), /offline/);
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(hits, 0);
});

test('deny proxy rejects loopback HTTP and CONNECT without forwarding', async (t) => {
  let hits = 0;
  const canary = createServer((_req, res) => { hits++; res.end('escaped'); });
  await new Promise(resolve => canary.listen(0, '127.0.0.1', resolve));
  t.after(() => canary.close());
  const proxy = await startDenyProxy();
  t.after(() => proxy.close());

  const status = await new Promise((resolve, reject) => {
    const req = request({ hostname: '127.0.0.1', port: proxy.port, path: `http://127.0.0.1:${canary.address().port}/probe` }, res => {
      res.resume(); res.on('end', () => resolve(res.statusCode));
    });
    req.once('error', reject);
    req.end();
  });
  assert.equal(status, 403);

  const connected = await new Promise(resolve => {
    const socket = connect(proxy.port, '127.0.0.1', () => socket.write(`CONNECT 127.0.0.1:${canary.address().port} HTTP/1.1\r\nHost: 127.0.0.1:${canary.address().port}\r\n\r\n`));
    socket.once('close', () => resolve('closed'));
    socket.once('error', () => resolve('error'));
  });
  assert.ok(['closed', 'error'].includes(connected));
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(hits, 0);
});

test('deny proxy handles a client TCP reset without crashing its launcher', async () => {
  const moduleUrl = new URL('../offline.mjs', import.meta.url).href;
  const code = `
    import { connect } from 'node:net';
    import { once } from 'node:events';
    const { startDenyProxy } = await import(${JSON.stringify(moduleUrl)});
    const proxy = await startDenyProxy();
    const socket = connect(proxy.port, '127.0.0.1');
    await once(socket, 'connect');
    await new Promise(resolve => setTimeout(resolve, 20));
    socket.resetAndDestroy();
    await once(socket, 'close');
    await new Promise(resolve => setTimeout(resolve, 40));
    proxy.close();
  `;
  const child = spawn(process.execPath, ['--input-type=module', '-e', code], { windowsHide: true });
  let stderr = '';
  child.stderr.setEncoding('utf8').on('data', chunk => { stderr += chunk; });
  const [codeValue, signal] = await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', (status, exitSignal) => resolve([status, exitSignal]));
  });
  assert.equal(codeValue, 0, `proxy child exited ${codeValue ?? signal}: ${stderr}`);
});
