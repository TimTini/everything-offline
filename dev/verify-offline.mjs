/** Browser checks use only loopback canaries. No Internet probe is sent. */
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { offlinePlugin } from './offline-plugin.mjs';
import { resolveApp, startDenyProxy } from './offline.mjs';

const root = path.resolve(import.meta.dirname, '..');
const selectedNames = process.argv.slice(2);
if (selectedNames.length > 1) {
  // App lockfiles use different Vite generations. Separate processes keep
  // optimizer/native-module caches and process listeners owned by one app.
  let failed = false;
  for (const name of selectedNames) {
    const code = await new Promise((resolve, reject) => {
      const child = spawn(process.execPath, [fileURLToPath(import.meta.url), name], { stdio: 'inherit', windowsHide: true });
      child.once('error', reject); child.once('exit', resolve);
    });
    if (code !== 0) failed = true;
  }
  process.exit(failed ? 1 : 0);
}
const { chromium } = await import(pathToFileURL(path.join(root, 'src/documents/node_modules/playwright/index.mjs')));
const vite = await import(pathToFileURL(path.join(root, 'src/notes/node_modules/vite/dist/node/index.js')));
const reports = [];
const reportFile = path.join(root, 'work', `offline-browser-${process.pid}.json`);
let hits = 0;
const canary = createServer((_req, res) => { hits++; res.end('network escaped'); });
canary.on('upgrade', (_req, socket) => { hits++; socket.destroy(); });
await new Promise(resolve => canary.listen(0, '127.0.0.1', resolve));
const forbidden = `http://127.0.0.1:${canary.address().port}`;
const browser = await chromium.launch({ headless: true });
const proxy = await startDenyProxy();

async function context(origin, permitCanary = false) {
  const ctx = await browser.newContext({
    proxy: { server: `http://127.0.0.1:${proxy.port}`, bypass: `<-loopback>,${new URL(origin).host}${permitCanary ? ',' + new URL(forbidden).host : ''}` },
  });
  // A safety net for upstream code; the loopback canary remains reachable so
  // suppression assertions would fail if our own policy stopped working.
  await ctx.route('**/*', route => {
    const url = new URL(route.request().url());
    return ['127.0.0.1', 'localhost'].includes(url.hostname) || ['data:', 'blob:'].includes(url.protocol)
      ? route.continue() : route.abort('blockedbyclient');
  });
  return ctx;
}

try {
  const fixture = path.join(root, 'work', `offline-probe-${process.pid}`);
  await mkdir(fixture, { recursive: true });
  await writeFile(path.join(fixture, 'index.html'), `<html><head><script src="${forbidden}/sdk.js"></script><link rel="preconnect" href="${forbidden}"></head><body>Offline probe<a href="${forbidden}/link">Outside</a></body></html>`);
  await writeFile(path.join(fixture, 'worker.js'), `fetch(${JSON.stringify(forbidden + '/worker')}).catch(() => {}); try { new WebSocket(${JSON.stringify(forbidden.replace('http:', 'ws:') + '/worker-ws')}); } catch {} setTimeout(() => postMessage('worker started'), 100);`);
  const server = await vite.createServer({ configFile: false, root: fixture,
    plugins: [offlinePlugin('probe')], server: { host: '127.0.0.1', port: 0 } });
  await server.listen();
  const origin = `http://127.0.0.1:${server.httpServer.address().port}`;
  const control = await context(origin, true);
  const controlPage = await control.newPage();
  await controlPage.goto(forbidden + '/positive-control');
  assert.equal(hits, 1, 'Canary is reachable when protections do not apply');
  await control.close();
  hits = 0;
  // Bypass the proxy for the canary here: resources and workers must be
  // blocked by CSP/guard themselves, not accidentally pass behind the proxy.
  const ctx = await context(origin, true);
  const page = await ctx.newPage();
  let hmrConnected = false;
  page.on('websocket', socket => socket.on('framereceived', frame => {
    if (typeof frame.payload === 'string' && frame.payload.includes('"type":"connected"')) hmrConnected = true;
  }));
  try {
    await page.goto(origin);
    await page.waitForFunction(() => !!window.puter);
    const results = await page.evaluate(async outside => {
      const output = {};
      output.local = (await fetch('/worker.js')).ok;
      for (const kind of ['fetch', 'xhr', 'socket', 'events', 'rtc', 'transport']) {
        try {
          if (kind === 'fetch') await fetch(`${outside}/fetch`);
          if (kind === 'xhr') { const request = new XMLHttpRequest(); request.open('GET', `${outside}/xhr`); request.send(); }
          if (kind === 'socket') new WebSocket(outside.replace('http:', 'ws:'));
          if (kind === 'events') new EventSource(`${outside}/events`);
          if (kind === 'rtc') new RTCPeerConnection({ iceServers: [{ urls: 'stun:127.0.0.1:9' }] });
          if (kind === 'transport' && typeof WebTransport !== 'undefined') new WebTransport('https://127.0.0.1:9');
          output[kind] = kind === 'transport' && typeof WebTransport === 'undefined' ? 'unavailable' : 'escaped';
        } catch { output[kind] = 'blocked'; }
      }
      output.beacon = navigator.sendBeacon(`${outside}/beacon`, 'private');
      output.popup = window.open(`${outside}/popup`) === null;
      const image = document.createElement('img'); image.src = `${outside}/image`; document.body.append(image);
      const style = document.createElement('link'); style.rel = 'stylesheet'; style.href = `${outside}/style`; document.head.append(style);
      const script = document.createElement('script'); script.src = `${outside}/script`; document.head.append(script);
      await new Promise((resolve, reject) => {
        const worker = new Worker('/worker.js');
        const timer = setTimeout(() => reject(new Error('Local worker did not start')), 5000);
        worker.onmessage = () => { clearTimeout(timer); worker.terminate(); resolve(); };
        worker.onerror = event => { clearTimeout(timer); reject(new Error(event.message)); };
      });
      return output;
    }, forbidden);
    assert.equal(results.local, true);
    for (const key of ['fetch', 'xhr', 'socket', 'events', 'rtc']) assert.equal(results[key], 'blocked', key);
    assert.ok(['blocked', 'unavailable'].includes(results.transport));
    assert.equal(results.beacon, false);
    assert.equal(results.popup, true);
    await page.getByText('Outside', { exact: true }).click();
    await page.waitForTimeout(250);
    assert.equal(hits, 0, 'Cross-origin resource reached canary');
    assert.equal(page.url(), origin + '/');
    assert.equal(hmrConnected, true, 'Same-origin Vite HMR WebSocket did not connect');
    // A navigation bypasses fetch wrappers; the HTTP policy/browser isolation
    // must cover it independently. This probes a loopback target only.
    const isolated = await context(origin);
    try {
      const navigation = await isolated.newPage();
      await navigation.goto(origin);
      await navigation.evaluate(outside => { try { location.assign(`${outside}/navigate`); } catch {} }, forbidden).catch(() => {});
      await navigation.waitForTimeout(250);
      assert.equal(hits, 0, 'Programmatic navigation reached canary');
    } finally { await isolated.close(); }
    reports.push({ name: 'network-canary', pass: true, results, hits, hmrConnected,
      layers: ['guard/CSP with reachable second-origin canary', 'deny proxy for programmatic navigation'] });
    console.log('PASS network-canary: resources, APIs, worker, links and navigation');
  } finally { await ctx.close(); await server.close(); }

  const names = selectedNames;
  for (const name of names) {
    const selected = await resolveApp(name);
    const api = await import(pathToFileURL(path.join(selected.root, 'node_modules/vite/dist/node/index.js')));
    const previous = process.cwd();
    process.chdir(selected.root);
    let appServer;
    let appContext;
    try {
      appServer = await api.createServer({ root: selected.root, plugins: [offlinePlugin(name)],
        server: { host: '127.0.0.1', port: 0, strictPort: false } });
      await appServer.listen();
      const url = `http://127.0.0.1:${appServer.httpServer.address().port}/`;
      appContext = await context(url);
      const appPage = await appContext.newPage();
      const errors = [], outbound = [], injectedSoftware = [];
      appPage.on('pageerror', error => errors.push(error.message));
      appContext.on('request', request => {
        const address = new URL(request.url());
        if (['http:', 'https:', 'ws:', 'wss:'].includes(address.protocol) && address.host !== new URL(url).host) {
          const record = { origin: address.origin, failure: null };
          // AdGuard modifies local HTTP outside this repository. Record its
          // requests separately and require failure; do not hide successful IO.
          (address.hostname === 'local.adguard.org' ? injectedSoftware : outbound).push(record);
          appContext.on('requestfailed', failed => { if (failed === request) record.failure = failed.failure()?.errorText; });
        }
      });
      await appPage.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await appPage.waitForFunction(() => {
        const notice = document.getElementById('offline-session-notice')?.innerText || '';
        return document.body.innerText.replace(notice, '').trim().length > 40
          && !!document.querySelector('button, input, canvas, [role="button"], [contenteditable="true"], #offline-unavailable');
      }, null, { timeout: 60000 });
      await appPage.waitForTimeout(300);
      const state = await appPage.evaluate(() => ({ title: document.title,
        text: document.body.innerText.replace(document.getElementById('offline-session-notice')?.innerText || '', '').replace(/\s+/g, ' ').trim().slice(0, 350),
        sdk: window.puter?.appID, notice: !!document.getElementById('offline-session-notice'),
        disabled: document.getElementById('offline-unavailable')?.innerText || null }));
      assert.ok(state.text.length > 40, 'App did not render content apart from offline notice');
      assert.equal(state.sdk, `offline-${name}`);
      assert.equal(state.notice, true);
      assert.deepEqual(errors, [], 'Unhandled application errors');
      assert.deepEqual(outbound, [], 'Application attempted outbound traffic');
      assert.ok(injectedSoftware.every(request => request.failure), 'Injected system script request was not blocked');
      assert.ok(!/couldn't reach puter|puter\.js is not loaded|could not load your inventory|something went wrong|could not look up your account|could not read.*saved|could not load.*saved|couldn.t read.*saved|safe concurrent saves/i.test(state.text), `Application error screen: ${state.text}`);
      reports.push({ name, pass: true, status: state.disabled ? 'disabled' : 'startup-verified', ...state, errors, outbound, injectedSoftware });
      console.log(`${state.disabled ? 'DISABLED' : 'PASS'} ${name}: ${state.text.slice(0, 140)}`);
    } catch (error) {
      reports.push({ name, pass: false, error: error.message });
      console.error(`FAIL ${name}: ${error.message}`);
      process.exitCode = 1;
    } finally {
      await appContext?.close();
      await appServer?.close();
      process.chdir(previous);
      await writeFile(reportFile, JSON.stringify(reports, null, 2));
    }
  }
} catch (error) {
  reports.push({ name: 'network-canary', pass: false, error: error.message, hits });
  console.error(error.stack);
  process.exitCode = 1;
} finally {
  await browser.close();
  proxy.close();
  await new Promise(resolve => canary.close(resolve));
  await mkdir(path.join(root, 'work'), { recursive: true });
  await writeFile(reportFile, JSON.stringify(reports, null, 2));
  console.log(`REPORT ${reportFile}`);
}
