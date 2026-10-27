import { installOfflineSDK } from './offline-sdk.mjs';
import { installOfflineGuard } from './offline-guard.mjs';

export const offlineCsp = "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data: blob:; media-src 'self' data: blob:; connect-src 'self'; worker-src 'self' blob:; object-src 'none'; frame-src 'none'; form-action 'self'; base-uri 'self'";

const headers = {
  'Content-Security-Policy': `${offlineCsp}; sandbox allow-scripts allow-same-origin allow-forms allow-downloads`,
  'X-DNS-Prefetch-Control': 'off',
  'Referrer-Policy': 'no-referrer',
};

function injectHead(html, appName) {
  const guard = `(${installOfflineGuard.toString()})();`;
  const sdk = `(${installOfflineSDK.toString()})(${JSON.stringify(appName)});`;
  const scripts = `<meta http-equiv="Content-Security-Policy" content="${offlineCsp}"><script>${guard}</script><script>${sdk}</script>`;
  return /<head\b[^>]*>/i.test(html)
    ? html.replace(/<head\b[^>]*>/i, match => `${match}${scripts}`)
    : `${scripts}${html}`;
}

function offlineEmailGate() {
  return '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Email</title></head><body><main id="offline-unavailable" aria-labelledby="offline-unavailable-title"><h1 id="offline-unavailable-title">Email is disabled in offline mode</h1><p>Sending and receiving email require cloud services, which are unavailable in offline mode.</p></main></body></html>';
}

export function transformHtml(html, appName) {
  const source = appName === 'email' ? offlineEmailGate() : html
    .replace(/<script\b(?=[^>]*\bsrc\s*=\s*(['"])(?:https?:)?\/\/)[^>]*>[\s\S]*?<\/script\s*>/gi, '')
    .replace(/<link\b(?=[^>]*\brel\s*=\s*(['"])[^'"]*(?:preconnect|dns-prefetch|prefetch|modulepreload)[^'"]*\1)(?=[^>]*\bhref\s*=\s*(['"])(?:https?:)?\/\/)[^>]*\/?>/gi, '');
  return injectHead(source, appName);
}

export function offlinePlugin(appName) {
  const applyHeaders = (_req, res, next) => {
    for (const [name, value] of Object.entries(headers)) res.setHeader(name, value);
    const writeHead = res.writeHead;
    res.writeHead = function (...args) {
      for (const [name, value] of Object.entries(headers)) this.setHeader(name, value);
      return writeHead.apply(this, args);
    };
    next();
  };
  return {
    name: 'everything-offline-runtime',
    transformIndexHtml: { order: 'pre', handler(html) { return transformHtml(html, appName); } },
    config() { return { server: { headers }, preview: { headers } }; },
    configureServer(server) { server.middlewares.use(applyHeaders); },
    configurePreviewServer(server) { server.middlewares.use(applyHeaders); },
  };
}
