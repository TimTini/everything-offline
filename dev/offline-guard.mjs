export function installOfflineGuard(options = {}) {
  const origin = options.origin || location.origin;
  const baseUrl = new URL(options.baseUrl || (typeof document !== 'undefined' ? document.baseURI : new URL('./', location.href)), origin);
  const sharedScripts = new Map();
  const resolve = (value) => {
    const raw = typeof value === 'string' || value instanceof URL ? value : value?.url;
    if (raw == null) throw new TypeError('A URL is required');
    let url = new URL(raw, baseUrl);
    if (url.origin === origin && baseUrl.pathname !== '/' && !url.pathname.startsWith(baseUrl.pathname)
      && /\/[^/]+\.[a-z0-9]+$/i.test(url.pathname)) {
      url = new URL(`${url.pathname.slice(1)}${url.search}${url.hash}`, baseUrl);
    }
    return url;
  };
  const allowed = (value, websocket = false) => {
    let url;
    try { url = resolve(value); } catch { return false; }
    if (url.protocol === 'data:' || url.protocol === 'blob:') return true;
    if (!websocket) return url.origin === origin;
    return url.host === location.host && (url.protocol === 'ws:' || url.protocol === 'wss:');
  };
  const reject = (value) => { throw new TypeError(`Blocked by offline runtime: ${value}`); };
  const wrap = (Original, check) => new Proxy(Original, {
    construct(target, args, receiver) {
      if (!check(args[0])) reject(args[0]);
      return Reflect.construct(target, args, receiver);
    },
  });

  const originalFetch = globalThis.fetch?.bind(globalThis);
  if (originalFetch) globalThis.fetch = (input, init) => {
    let url;
    try { url = resolve(input); } catch { return Promise.reject(new TypeError(`Blocked by offline runtime: ${input}`)); }
    if (!allowed(url)) return Promise.reject(new TypeError(`Blocked by offline runtime: ${url.href}`));
    const request = typeof Request !== 'undefined' && input instanceof Request
      ? url.href === input.url ? input : new Request(url.href, input)
      : url.href;
    return originalFetch(request, init);
  };
  if (globalThis.XMLHttpRequest?.prototype) {
    const xhrOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, value, ...args) {
      const url = resolve(value);
      if (!allowed(url)) reject(url.href);
      return xhrOpen.call(this, method, url.href, ...args);
    };
  }
  if (globalThis.WebSocket) globalThis.WebSocket = wrap(WebSocket, url => allowed(resolve(url), true));
  if (globalThis.EventSource) globalThis.EventSource = wrap(EventSource, url => allowed(resolve(url)));
  if (globalThis.Worker || globalThis.SharedWorker) {
    const workerOptions = JSON.stringify({ origin, baseUrl: baseUrl.href });
    for (const name of ['Worker', 'SharedWorker']) {
      const Original = globalThis[name];
      if (!Original) continue;
      globalThis[name] = new Proxy(Original, {
        construct(target, args, receiver) {
          let source;
          try { source = resolve(args[0]); } catch { return reject(args[0]); }
          if (!allowed(source)) return reject(source.href);
          const shared = name === 'SharedWorker';
          const type = args[1]?.type === 'module' ? 'module' : 'classic';
          const key = `${type}:${source.href}`;
          let bootstrapUrl = shared ? sharedScripts.get(key) : null;
          if (!bootstrapUrl) {
            const guard = `(${installOfflineGuard.toString()})(${workerOptions});`;
            const bootstrap = type === 'module'
              ? `URL.revokeObjectURL(import.meta.url);${guard}await import(${JSON.stringify(source.href)});`
              : `URL.revokeObjectURL(location.href);${guard}importScripts(${JSON.stringify(source.href)});`;
            bootstrapUrl = URL.createObjectURL(new Blob([bootstrap], { type: 'text/javascript' }));
            if (shared) sharedScripts.set(key, bootstrapUrl);
          }
          const options = typeof args[1] === 'object' && args[1] !== null ? { ...args[1] } : args[1];
          if (typeof options === 'object') options.type = type;
          return Reflect.construct(target, [bootstrapUrl, options], receiver);
        },
      });
    }
  }
  if (navigator.sendBeacon) {
    const sendBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = (url, data) => allowed(resolve(url)) ? sendBeacon(resolve(url).href, data) : false;
  }
  if (globalThis.window) {
    const open = window.open.bind(window);
    window.open = (url, ...args) => !url || allowed(resolve(url)) ? open(url, ...args) : null;
  }
  for (const name of ['RTCPeerConnection', 'webkitRTCPeerConnection', 'WebTransport']) {
    if (globalThis[name]) globalThis[name] = new Proxy(globalThis[name], { construct() { reject(name); } });
  }
  if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
    navigator.serviceWorker.register = () => Promise.reject(new TypeError('Service workers are disabled by offline runtime'));
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (event) => {
      const link = event.target?.closest?.('a[href]');
      if (link && !allowed(resolve(link.href))) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, true);
    document.addEventListener('submit', (event) => {
      if (!allowed(resolve(event.target.action))) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, true);
  }
}
