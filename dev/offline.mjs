import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdtemp, realpath, rm, stat } from 'node:fs/promises';
import { once } from 'node:events';
import { createServer } from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { offlinePlugin } from './offline-plugin.mjs';

const repoRoot = path.resolve(import.meta.dirname, '..');
const appsRoot = path.join(repoRoot, 'src');

export function parseArgs(argv) {
  let app;
  let port = 5173;
  let browser = true;
  let mode = 'dev';
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--port')) {
      const value = arg === '--port' ? argv[++i] : arg.slice('--port='.length);
      port = Number(value);
      if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid port; expected 1-65535');
    } else if (arg === '--no-browser') browser = false;
    else if (arg === '--build' || arg === '--preview') {
      if (mode !== 'dev') throw new Error('Choose only one of --build or --preview');
      mode = arg.slice(2);
    } else if (arg.startsWith('-')) throw new Error(`Unknown option: ${arg}`);
    else if (app) throw new Error('Only one app may be selected');
    else app = arg;
  }
  if (!app) throw new Error('Usage: node dev/offline.mjs <app> [--port N] [--no-browser] [--build|--preview]');
  return { app, port, browser, mode };
}

export async function resolveApp(name) {
  if (!/^[a-z0-9-]+$/.test(name) || name === 'meetings') {
    throw new Error(name === 'meetings' ? 'Meetings is excluded from offline runtime' : `Invalid app: ${name}`);
  }
  const src = await realpath(appsRoot);
  const folder = await realpath(path.join(src, name)).catch(() => null);
  if (!folder || !folder.startsWith(`${src}${path.sep}`)) throw new Error(`Invalid app: ${name}`);
  for (const file of ['index.html', 'package.json']) {
    try { await stat(path.join(folder, file)); } catch { throw new Error(`No ${file} for app: ${name}`); }
  }
  if (name === 'assets') {
    try { await stat(path.join(folder, 'src', 'main.js')); }
    catch { throw new Error('App assets is missing its src/main.js entrypoint; restore that source entry before launching it offline.'); }
  }
  return { name, root: folder };
}

export async function removeBrowserProfile(profile) {
  const tempRoot = await realpath(os.tmpdir());
  const target = await realpath(profile);
  const relative = path.relative(tempRoot, target);
  if (!relative || relative.includes(path.sep) || relative.startsWith('..') || !path.basename(relative).startsWith('everything-offline-')) {
    throw new Error('Refusing to remove a path outside the dedicated offline browser profiles');
  }
  await rm(target, { recursive: true, force: true });
}

export async function startDenyProxy() {
  const sockets = new Set();
  const server = createServer((socket) => {
    socket.on('error', error => {
      if (error.code === 'ECONNRESET') { socket.destroy(); return; }
      server.emit('error', error);
    });
    socket.once('data', (data) => {
      const line = data.toString('latin1').split('\r\n', 1)[0];
      if (line.startsWith('CONNECT ')) socket.destroy();
      else socket.end('HTTP/1.1 403 Offline\r\nConnection: close\r\nContent-Length: 0\r\n\r\n');
    });
  });
  server.on('connection', socket => {
    sockets.add(socket);
    socket.once('close', () => sockets.delete(socket));
  });
  await new Promise((resolve, reject) => {
    const onError = error => { server.off('listening', onListening); reject(error); };
    const onListening = () => { server.off('error', onError); resolve(); };
    server.once('error', onError);
    server.once('listening', onListening);
    server.listen(0, '127.0.0.1');
  });
  return {
    port: server.address().port,
    close() {
      for (const socket of sockets) socket.destroy();
      server.close();
    },
  };
}

function findBrowser() {
  if (process.platform !== 'win32') return null;
  for (const executable of ['msedge.exe', 'chrome.exe', 'chromium.exe']) {
    const result = spawnSync('where.exe', [executable], { encoding: 'utf8', windowsHide: true });
    if (!result.error && result.status === 0) return result.stdout.split(/\r?\n/).find(Boolean);
  }
  for (const folder of [process.env['ProgramFiles(x86)'], process.env.ProgramFiles, process.env.LOCALAPPDATA].filter(Boolean)) {
    for (const relative of ['Microsoft/Edge/Application/msedge.exe', 'Google/Chrome/Application/chrome.exe', 'Chromium/Application/chrome.exe']) {
      const candidate = path.join(folder, relative);
      if (existsSync(candidate)) return candidate;
    }
  }
  return null;
}

async function openDedicatedBrowser(url, proxy) {
  const executable = findBrowser();
  if (!executable) throw new Error('No Edge/Chromium executable found on PATH; use --no-browser for an arbitrary browser (app policy only).');
  const profile = await mkdtemp(path.join(os.tmpdir(), 'everything-offline-'));
  const appUrl = new URL(url);
  const child = spawn(executable, [
    `--user-data-dir=${profile}`,
    `--proxy-server=http://127.0.0.1:${proxy.port}`,
    `--proxy-bypass-list=<-loopback>;${appUrl.hostname}:${appUrl.port};localhost:${appUrl.port}`,
    '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1, EXCLUDE localhost',
    '--disable-background-networking', '--disable-component-update', '--disable-sync', '--disable-quic',
    '--disable-domain-reliability', '--force-webrtc-ip-handling-policy=disable_non_proxied_udp',
    '--no-first-run', url,
  ], { detached: true, stdio: 'ignore', windowsHide: true });
  try { await once(child, 'spawn'); }
  catch (error) { await removeBrowserProfile(profile); throw error; }
  return { child, profile };
}

export async function launch({ app, port, browser, mode }) {
  const selected = await resolveApp(app);
  process.chdir(selected.root);
  const viteUrl = pathToFileURL(path.join(selected.root, 'node_modules/vite/dist/node/index.js'));
  const vite = await import(viteUrl.href);
  const config = {
    root: selected.root,
    plugins: [offlinePlugin(selected.name)],
    server: { host: '127.0.0.1', port, strictPort: true },
    preview: { host: '127.0.0.1', port, strictPort: true },
  };
  if (mode === 'build') return vite.build(config);
  const server = mode === 'preview' ? await vite.preview(config) : await vite.createServer(config);
  if (mode !== 'preview') await server.listen();
  const address = server.httpServer?.address() ?? server.httpServer?.address?.();
  const actualPort = typeof address === 'object' && address ? address.port : port;
  const url = `http://127.0.0.1:${actualPort}/`;
  console.log(`Offline ${mode}: ${url}`);
  if (browser) {
    if (process.platform !== 'win32') console.warn('Dedicated deny-all browser proxy is Windows-only; app CSP/guard still apply.');
    else {
      const proxy = await startDenyProxy();
      let session;
      try { session = await openDedicatedBrowser(url, proxy); }
      catch (error) { proxy.close(); await server.close?.(); throw error; }
      let closing;
      const close = () => closing ??= (async () => {
        proxy.close();
        if (session.child.exitCode === null && !session.child.killed) {
          session.child.kill();
          await once(session.child, 'exit').catch(() => {});
        }
        await server.close?.();
        await removeBrowserProfile(session.profile);
      })();
      session.child.once('exit', () => { void close(); });
      process.once('SIGINT', () => { void close(); });
      process.once('SIGTERM', () => { void close(); });
    }
  } else console.warn('No browser isolation: app CSP/guard cannot block every top-level navigation; zero-outbound runtime requires the dedicated browser.');
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { await launch(parseArgs(process.argv.slice(2))); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
