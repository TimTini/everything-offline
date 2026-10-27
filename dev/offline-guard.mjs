export function installOfflineGuard() {
  const origin = location.origin;
  const allowed = (value, websocket = false) => {
    let url;
    try { url = new URL(value, origin); } catch { return false; }
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
    const value = typeof input === 'string' || input instanceof URL ? input : input.url;
    if (!allowed(value)) return Promise.reject(new TypeError(`Blocked by offline runtime: ${value}`));
    return originalFetch(input, init);
  };
  const xhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...args) {
    if (!allowed(url)) reject(url);
    return xhrOpen.call(this, method, url, ...args);
  };
  if (globalThis.WebSocket) globalThis.WebSocket = wrap(WebSocket, (url) => allowed(url, true), 'WebSocket');
  if (globalThis.EventSource) globalThis.EventSource = wrap(EventSource, (url) => allowed(url), 'EventSource');
  if (navigator.sendBeacon) {
    const sendBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = (url, data) => allowed(url) ? sendBeacon(url, data) : false;
  }
  if (globalThis.window) {
    const open = window.open.bind(window);
    window.open = (url, ...args) => !url || allowed(url) ? open(url, ...args) : null;
  }
  for (const name of ['RTCPeerConnection', 'webkitRTCPeerConnection', 'WebTransport']) {
    if (globalThis[name]) globalThis[name] = new Proxy(globalThis[name], { construct() { reject(name); } });
  }
  if (navigator.serviceWorker) navigator.serviceWorker.register = () => Promise.reject(new TypeError('Service workers are disabled by offline runtime'));
  document.addEventListener('click', (event) => {
    const link = event.target?.closest?.('a[href]');
    if (link && !allowed(link.href)) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  document.addEventListener('submit', (event) => {
    if (!allowed(event.target.action)) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
}
