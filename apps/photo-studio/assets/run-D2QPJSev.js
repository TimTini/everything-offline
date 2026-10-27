const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cloud-Bnv5SkXn.js","./index-CXTg_FTa.js","./index-C8mbEF3v.css","./zip-BegHlIFd.js","./bytes--DnyINbG.js"])))=>i.map(i=>d[i]);
import{J as k,_ as v,c as O,h as C,bW as j,fD as I,fG as L,fI as M,fJ as _,fH as A}from"./index-CXTg_FTa.js";import{S as T}from"./host-r9WCSQgz.js";/* empty css                  */const P=`// Script runtime: the \`studio\` API as a script sees it. This file runs inside\r
// the script sandbox (a dedicated worker started by an iframe with an opaque\r
// origin and a content security policy without network access), followed by\r
// the user's script wrapped in an async function. Every call becomes a\r
// structured-clone message to Photo Studio, which checks it and answers.\r
// Plain JavaScript: it is inserted as text, not bundled.\r
const __studioRegister = (() => {\r
  'use strict';\r
  let port = null;\r
  let main = null;\r
  let info = { lineOffset: 0, script: { id: '', name: '' }, event: null };\r
  let next = 0;\r
  let cancelled = false;\r
  const pending = new Map();\r
\r
  class ScriptCancelled extends Error {\r
    constructor() {\r
      super('The script was stopped.');\r
      this.name = 'ScriptCancelled';\r
    }\r
  }\r
  const send = (message) => port.postMessage(message);\r
  function call(method, ...args) {\r
    if (cancelled) return Promise.reject(new ScriptCancelled());\r
    const id = ++next;\r
    // The call site, so an error reports the script's line rather than the runtime's.\r
    const site = new Error();\r
    return new Promise((resolve, reject) => {\r
      pending.set(id, { resolve, reject, site });\r
      send({ type: 'call', id, method, args });\r
    });\r
  }\r
  function receive(ev) {\r
    const m = ev.data;\r
    if (!m || typeof m !== 'object') return;\r
    if (m.type === 'ping') return send({ type: 'pong' });\r
    if (m.type === 'cancel') {\r
      cancelled = true;\r
      for (const p of pending.values()) p.reject(new ScriptCancelled());\r
      pending.clear();\r
      return;\r
    }\r
    const p = pending.get(m.id);\r
    if (!p) return;\r
    pending.delete(m.id);\r
    if (m.type === 'result') p.resolve(m.value);\r
    else if (m.name === 'ScriptCancelled') p.reject(new ScriptCancelled());\r
    else {\r
      const error = new Error(m.message);\r
      error.name = m.name || 'Error';\r
      error.stack = \`\${error.name}: \${error.message}\\n\${String(p.site.stack || '').split('\\n').slice(1).join('\\n')}\`;\r
      p.reject(error);\r
    }\r
  }\r
\r
  // console.* goes to the Scripts panel output.\r
  const show = (v) => {\r
    if (typeof v === 'string') return v;\r
    if (v instanceof Error) return \`\${v.name}: \${v.message}\`;\r
    try {\r
      return JSON.stringify(v, (_k, x) => (ArrayBuffer.isView(x) ? \`[\${x.constructor.name} \${x.length}]\` : x));\r
    } catch {\r
      return String(v);\r
    }\r
  };\r
  const log = (level) => (...args) => send({ type: 'log', level, text: args.map(show).join(' ').slice(0, 4000) });\r
  const scriptConsole = Object.freeze({ log: log('log'), info: log('info'), debug: log('log'), warn: log('warn'), error: log('error') });\r
\r
  const idOf = (layer) => (layer && typeof layer === 'object' ? layer.id : layer);\r
  const layer = (info) => (info ? new Layer(info) : null);\r
\r
  class Layer {\r
    constructor(data) {\r
      Object.assign(this, data);\r
    }\r
    refresh() { return call('layers.get', this.documentId, this.id).then(layer); }\r
    set(props) { return call('layers.set', this.documentId, this.id, props).then(layer); }\r
    rename(name) { return this.set({ name }); }\r
    show() { return this.set({ visible: true }); }\r
    hide() { return this.set({ visible: false }); }\r
    move(dx, dy) { return call('layers.translate', this.documentId, this.id, dx, dy).then(layer); }\r
    moveTo(x, y) {\r
      const b = this.bounds || { x: 0, y: 0 };\r
      return this.move(x - b.x, y - b.y);\r
    }\r
    arrange(where) {\r
      const w = where && typeof where === 'object' ? Object.fromEntries(Object.entries(where).map(([k, v]) => [k, idOf(v)])) : where;\r
      return call('layers.arrange', this.documentId, this.id, w).then(layer);\r
    }\r
    duplicate() { return call('layers.duplicate', this.documentId, this.id).then(layer); }\r
    remove() { return call('layers.remove', this.documentId, this.id); }\r
    select() { return call('layers.select', this.documentId, [this.id]); }\r
    pixels(rect) { return call('layers.getPixels', this.documentId, this.id, rect); }\r
    setPixels(image, x, y) {\r
      const img = x === undefined ? image : { ...image, x, y };\r
      return call('layers.setPixels', this.documentId, this.id, img).then(layer);\r
    }\r
    getText() { return call('layers.getText', this.documentId, this.id); }\r
    setText(textOrOptions) { return call('layers.setText', this.documentId, this.id, textOrOptions).then(layer); }\r
    setStyle(style) { return call('layers.setStyle', this.documentId, this.id, style).then(layer); }\r
    async children() {\r
      const all = await call('layers.list', this.documentId);\r
      return all.filter((l) => l.parentId === this.id).map(layer);\r
    }\r
    export(options = {}) { return call('documents.export', this.documentId, { ...options, layer: this.id }); }\r
  }\r
\r
  const doc = (info) => (info ? new Document(info) : null);\r
  class Document {\r
    constructor(data) {\r
      Object.assign(this, data);\r
    }\r
    refresh() { return call('documents.get', this.id).then(doc); }\r
    activate() { return call('documents.activate', this.id).then(doc); }\r
    async layers() { return (await call('layers.list', this.id)).map(layer); }\r
    async layer(idOrName) {\r
      const all = await call('layers.list', this.id);\r
      return layer(all.find((l) => l.id === idOrName) || all.find((l) => l.name === idOrName));\r
    }\r
    async selectedLayers() { return (await call('layers.selected', this.id)).map(layer); }\r
    selectLayers(layers) { return call('layers.select', this.id, [].concat(layers).map(idOf)); }\r
    addLayer(options = {}) {\r
      const o = { ...options };\r
      for (const k of ['above', 'inside']) if (o[k] !== undefined) o[k] = idOf(o[k]);\r
      return call('layers.create', this.id, o).then(layer);\r
    }\r
    composite(rect) { return call('documents.composite', this.id, rect); }\r
    selection() { return call('selection.get', this.id); }\r
    select(shape, operation) { return call('selection.set', this.id, shape, operation); }\r
    selectAll() { return call('selection.all', this.id); }\r
    deselect() { return call('selection.clear', this.id); }\r
    invertSelection() { return call('selection.invert', this.id); }\r
    selectionMask() { return call('selection.getMask', this.id); }\r
    setSelectionMask(mask, operation) { return call('selection.setMask', this.id, mask, operation); }\r
    run(command, arg) { return call('commands.run', command, arg, this.id); }\r
    export(options = {}) { return call('documents.export', this.id, options); }\r
    save() { return call('documents.save', this.id); }\r
    close(options = {}) { return call('documents.close', this.id, options); }\r
    undo() { return call('documents.undo', this.id); }\r
    redo() { return call('documents.redo', this.id); }\r
  }\r
\r
  const studio = Object.freeze({\r
    apiVersion: 1,\r
    get script() { return { ...info.script }; },\r
    // Set when the script runs for a Script Events Manager event.\r
    get event() { return info.event ? { ...info.event } : null; },\r
    get cancelled() { return cancelled; },\r
    checkCancelled() {\r
      if (cancelled) throw new ScriptCancelled();\r
    },\r
    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, Math.max(0, Math.min(60000, Number(ms) || 0)))),\r
    app: Object.freeze({\r
      info: () => call('app.info'),\r
      message: (text) => call('app.message', String(text)),\r
    }),\r
    documents: Object.freeze({\r
      list: async () => (await call('documents.list')).map(doc),\r
      active: () => call('documents.active').then(doc),\r
      get: (id) => call('documents.get', id).then(doc),\r
      create: (options = {}) => call('documents.create', options).then(doc),\r
      open: async (options = {}) => (await call('documents.open', options)).map(doc),\r
    }),\r
    commands: Object.freeze({\r
      run: (id, arg) => call('commands.run', id, arg),\r
      list: () => call('commands.list'),\r
    }),\r
    history: Object.freeze({\r
      checkpoint: (label) => call('history.checkpoint', label),\r
      setGrouping: (on) => call('history.grouping', !!on),\r
    }),\r
    ui: Object.freeze({\r
      alert: (message, title) => call('ui.alert', String(message), title),\r
      confirm: (message, title) => call('ui.confirm', String(message), title),\r
      prompt: (message, value, title) => call('ui.prompt', String(message), value === undefined ? '' : String(value), title),\r
      form: (title, fields, options) => call('ui.form', String(title), fields, options),\r
      progress: (fraction, message) => call('ui.progress', fraction === undefined ? null : fraction, message),\r
    }),\r
    files: Object.freeze({\r
      open: (options = {}) => call('files.open', options),\r
      save: (name, data, type) => call('files.save', name, data, type),\r
      saveAll: (files, zipName) => call('files.saveAll', files, zipName),\r
    }),\r
    image: Object.freeze({\r
      create(width, height, fill) {\r
        const data = new Uint8ClampedArray(width * height * 4);\r
        if (fill) {\r
          const [r, g, b, a = 255] = typeof fill === 'string' ? [1, 3, 5].map((i) => parseInt(fill.slice(i, i + 2), 16)) : fill;\r
          for (let i = 0; i < data.length; i += 4) {\r
            data[i] = r;\r
            data[i + 1] = g;\r
            data[i + 2] = b;\r
            data[i + 3] = a;\r
          }\r
        }\r
        return { width, height, data };\r
      },\r
      encode: (image, options) => call('image.encode', image, options),\r
    }),\r
  });\r
\r
  // The script's own line number of an error, from the worker's stack.\r
  function lineOf(error) {\r
    const stack = String((error && error.stack) || '');\r
    for (const m of stack.matchAll(/blob:[^\\s)]*?:(\\d+):\\d+/g)) {\r
      const line = Number(m[1]) - info.lineOffset;\r
      if (line > 0) return line;\r
    }\r
    return 0;\r
  }\r
  async function run() {\r
    try {\r
      if (!main) throw new Error('The script did not load.');\r
      await main(studio, scriptConsole);\r
      send({ type: 'done' });\r
    } catch (error) {\r
      if (cancelled || (error && error.name === 'ScriptCancelled')) return send({ type: 'done', cancelled: true });\r
      send({ type: 'failed', name: (error && error.name) || 'Error', message: String((error && error.message) || error), line: lineOf(error) });\r
    }\r
  }\r
  self.addEventListener('unhandledrejection', (ev) => {\r
    ev.preventDefault();\r
    if (port && !(ev.reason && ev.reason.name === 'ScriptCancelled')) scriptConsole.error('Unhandled rejection:', ev.reason);\r
  });\r
  self.onmessage = (ev) => {\r
    if (port || !ev.data || ev.data.type !== 'start' || !ev.ports[0]) return;\r
    port = ev.ports[0];\r
    info = ev.data.info;\r
    port.onmessage = receive;\r
    void run();\r
  };\r
  return (fn) => {\r
    main = fn;\r
  };\r
})();\r
`,q="default-src 'none'; script-src 'unsafe-inline' blob:; worker-src blob:",D=`let started = false;
addEventListener('message', (ev) => {
  if (started || ev.source !== parent || !ev.data || ev.data.type !== 'start' || !ev.ports[0]) return;
  started = true;
  const url = URL.createObjectURL(new Blob([ev.data.code], { type: 'text/javascript' }));
  const worker = new Worker(url, { name: 'script' });
  worker.onerror = (e) => {
    e.preventDefault();
    parent.postMessage({ type: 'worker-error', message: String(e.message || 'The script could not run.'), line: e.lineno || 0 }, '*');
  };
  worker.postMessage({ type: 'start', info: ev.data.info }, [ev.ports[0]]);
});`;function z(){return`<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${q}"><script>${D}<\/script></head><body></body></html>`}function N(n){const e=`${P}
__studioRegister(async function (studio, console) {
`;return{code:`${e}${n}
});
`,lineOffset:e.split(`
`).length-1}}const R=1e3;class F{constructor(e,a,t,s=30){this.source=e,this.info=a,this.handlers=t,this.timeoutSeconds=s}source;info;handlers;timeoutSeconds;frame;port;finish;watchdog=0;heard=0;queue=Promise.resolve();stopping=0;inCall=0;onWindowMessage=e=>{if(!this.frame||e.source!==this.frame.contentWindow)return;const a=e.data;a?.type==="worker-error"&&this.end({status:"failed",message:String(a.message??"The script could not run.").replace(/^Uncaught /,""),line:Math.max(0,Number(a.line)-this.lineOffset)})};lineOffset=0;run(){return new Promise(e=>{this.finish=e;const{code:a,lineOffset:t}=N(this.source);this.lineOffset=t;const s=document.createElement("iframe");s.setAttribute("sandbox","allow-scripts"),s.setAttribute("aria-hidden","true"),s.tabIndex=-1,s.className="script-sandbox",s.title="Script sandbox",s.srcdoc=z(),this.frame=s,window.addEventListener("message",this.onWindowMessage),s.addEventListener("load",()=>{const r=new MessageChannel;this.port=r.port1,this.port.onmessage=o=>this.receive(o.data),this.heard=performance.now(),s.contentWindow.postMessage({type:"start",code:a,info:{...this.info,lineOffset:t}},"*",[r.port2]),this.watchdog=window.setInterval(()=>this.tick(),R)},{once:!0}),document.body.append(s)})}cancel(){!this.finish||this.stopping||(this.port?.postMessage({type:"cancel"}),this.stopping=window.setTimeout(()=>this.end({status:"cancelled"}),2e3))}tick(){this.port?.postMessage({type:"ping"}),this.inCall&&(this.heard=performance.now()),(performance.now()-this.heard)/1e3>this.timeoutSeconds&&this.end({status:"timeout",seconds:this.timeoutSeconds})}receive(e){if(this.heard=performance.now(),!(!e||typeof e!="object"))if(e.type==="call"&&typeof e.id=="number"&&typeof e.method=="string"){const{id:a,method:t}=e,s=Array.isArray(e.args)?e.args:[];this.queue=this.queue.then(async()=>{if(this.finish){this.inCall++;try{const r=await this.handlers.call(t,s);this.port?.postMessage({type:"result",id:a,value:r},B(r))}catch(r){const o=r instanceof Error?r:new Error(String(r));this.port?.postMessage({type:"error",id:a,name:o.name==="ScriptError"?"Error":o.name,message:o.message})}finally{this.inCall--,this.heard=performance.now()}}})}else e.type==="log"?this.handlers.log(String(e.level??"log"),String(e.text??"")):e.type==="done"?this.end({status:e.cancelled?"cancelled":"done"}):e.type==="failed"&&this.end({status:"failed",message:String(e.message??"The script failed."),line:Number(e.line)||0})}end(e){const a=this.finish;a&&(this.finish=void 0,this.queue.then(()=>{this.dispose(),a(this.stopping&&e.status==="done"?{status:"cancelled"}:e)}))}dispose(){clearInterval(this.watchdog),clearTimeout(this.stopping),window.removeEventListener("message",this.onWindowMessage),this.port?.close(),this.port=void 0,this.frame?.remove(),this.frame=void 0}}function B(n){const e=new Set,a=t=>{ArrayBuffer.isView(t)&&t.buffer instanceof ArrayBuffer&&t.byteLength===t.buffer.byteLength&&e.add(t.buffer)};if(n&&typeof n=="object"){a(n);for(const t of Object.values(n))a(t)}return[...e]}const p=n=>O(String(n));function g(n,e,a,t,s){const r=document.createElement("dialog");r.className="files-dialog script-dialog",r.setAttribute("aria-label",e);const o=t.at(-1);r.innerHTML=`<form method="dialog"><p class="script-origin" title="This window comes from a script you installed">${k("square-code",13)}<span>Script: ${p(n)}</span></p><h2>${p(e)}</h2>${a}<div class="dialog-actions">${t.slice(0,-1).map(([u,l])=>`<button type="button" data-act="${u}">${p(l)}</button>`).join("")}<button type="submit" class="primary" data-act="${o[0]}">${p(o[1])}</button></div></form>`,document.body.append(r);const d=r.querySelector("form");return new Promise(u=>{const l=c=>{r.close(),r.remove(),u(c===null?null:{action:c,form:d})};r.addEventListener("cancel",c=>{c.preventDefault(),l(null)}),d.addEventListener("submit",c=>{c.preventDefault(),d.reportValidity()&&l(o[0])});for(const[c,,m]of t.slice(0,-1))m||r.querySelector(`button[data-act="${c}"]`).addEventListener("click",()=>l(c==="cancel"?null:c));s?.(r),r.showModal()})}const w=n=>n.split(/\n{2,}/).map(e=>`<p class="script-message">${p(e).replace(/\n/g,"<br>")}</p>`).join("");function U(n,e){const a=`script-field-${e}`,t=o=>n[o]!==void 0?`${o}="${n[o]}"`:"",s=`name="${p(n.name)}" id="${a}"`;let r;return n.type==="checkbox"?`<label class="dialog-field checkbox-field" for="${a}">${p(n.label)}<input type="checkbox" ${s} ${n.value===!0||n.value==="yes"?"checked":""}></label>`:(n.type==="select"?r=`<select ${s}>${(n.options??[]).map(([o,d])=>`<option value="${p(o)}" ${String(n.value)===o?"selected":""}>${p(d)}</option>`).join("")}</select>`:n.type==="textarea"?r=`<textarea ${s} rows="4">${p(n.value)}</textarea>`:n.type==="range"?r=`<span class="script-range"><input type="range" ${s} ${t("min")} ${t("max")} ${t("step")} value="${p(n.value)}"><output for="${a}">${p(n.value)}</output></span>`:n.type==="number"?r=`<input type="number" ${s} ${t("min")} ${t("max")} ${n.step!==void 0?t("step"):'step="any"'} value="${p(n.value)}" required>`:n.type==="color"?r=`<input type="color" ${s} value="${/^#[0-9a-f]{6}$/i.test(String(n.value))?p(n.value):"#000000"}">`:r=`<input type="text" ${s} value="${p(n.value)}" autocomplete="off">`,`<label class="dialog-field" for="${a}">${p(n.label)}${r}</label>`)}function V(n,e,a){return{async alert(t,s){await g(e,s,w(t),[["ok","OK"]])},async confirm(t,s){return(await g(e,s,w(t),[["cancel","Cancel"],["ok","OK"]]))?.action==="ok"},async prompt(t,s,r){const o=await g(e,r,`${w(t)}<label class="dialog-field"><input type="text" name="answer" value="${p(s)}" autocomplete="off" aria-label="Answer"></label>`,[["cancel","Cancel"],["ok","OK"]]);return o?o.form.elements.namedItem("answer").value:null},async form(t,s,r,o){const d=await g(e,t,`${o?w(o):""}<div class="script-form">${s.map(U).join("")}</div>`,[["cancel","Cancel"],["ok",r]],l=>{for(const c of l.querySelectorAll('input[type="range"]'))c.addEventListener("input",()=>c.nextElementSibling.textContent=c.value)});if(!d)return null;const u={};return s.forEach((l,c)=>{const m=d.form.querySelector(`#script-field-${c}`);u[l.name]=l.type==="checkbox"?m.checked:l.type==="number"||l.type==="range"?Number(m.value):m.value}),u},progress:a,async openFiles(t){const s=t.accept==="image"||!t.accept?document.querySelector("#file-input")?.accept??"image/*":t.accept;let r=null;return await g(e,t.multiple?"Choose Files":"Choose a File",`<p class="script-message">The script asks to read ${t.multiple?"files":"a file"}. It receives only what you choose.</p><p class="script-picked muted" aria-live="polite">Nothing chosen yet.</p>`,[["cancel","Cancel"],["device","From this device…","stay"],["puter","From Puter…","stay"],["ok","Use"]],d=>{const u=d.querySelector('button[type="submit"]');u.disabled=!0;const l=d.querySelector(".script-picked"),c=i=>{r=i,u.disabled=!i.length,l.textContent=i.length?i.map(h=>h.name).join(", "):"Nothing chosen yet."},m=async i=>c(await Promise.all(i.map(async h=>{const f=await h.read();return{name:h.name,type:f.type||h.type||"",data:new Uint8Array(await f.arrayBuffer())}})));d.querySelector('[data-act="device"]').addEventListener("click",()=>{const i=document.createElement("input");i.type="file",i.accept=s,i.multiple=t.multiple,i.onchange=()=>{m(Array.from(i.files??[]).map(h=>({name:h.name,type:h.type,read:async()=>h})))},i.click()}),d.querySelector('[data-act="puter"]').addEventListener("click",()=>{v(async()=>{const{pickCloudFiles:i}=await import("./cloud-Bnv5SkXn.js");return{pickCloudFiles:i}},__vite__mapDeps([0,1,2]),import.meta.url).then(({pickCloudFiles:i})=>i(t.multiple,s)).then(i=>m(i.map(h=>({name:h.name,read:()=>h.read()})))).catch(i=>l.textContent=String(i instanceof Error?i.message:i))})})?r??[]:[]},async saveFiles(t,s){const r=t.reduce((m,i)=>m+i.data.length,0),o=r<1024*1024?`${Math.max(1,Math.round(r/1024))} KB`:`${(r/1048576).toFixed(1)} MB`,d=t.length===1?`“${t[0].name}”`:`${t.length} files as “${s}”`,u=await g(e,"Save Files",`<p class="script-message">The script wants to save ${p(d)} (${o}).</p>`,[["cancel","Cancel"],["puter","Save to Puter…"],["download","Download"]]);if(!u)return!1;let l,c;if(t.length===1)l=new Blob([t[0].data],{type:t[0].type}),c=t[0].name;else{const{uniqueName:m,zipStore:i}=await v(async()=>{const{uniqueName:f,zipStore:E}=await import("./zip-BegHlIFd.js");return{uniqueName:f,zipStore:E}},__vite__mapDeps([3,4]),import.meta.url),h=new Set;l=new Blob([i(t.map(f=>({name:m(f.name,h),data:f.data})))],{type:"application/zip"}),c=s??"files.zip"}if(u.action==="puter"){const{cloudSaveAs:m}=await v(async()=>{const{cloudSaveAs:i}=await import("./cloud-Bnv5SkXn.js");return{cloudSaveAs:i}},__vite__mapDeps([0,1,2]),import.meta.url);m(l,c).then(i=>n.message(`Saved ${i.name} to Puter`)).catch(i=>n.message(String(i instanceof Error?i.message:i)))}else{const{download:m}=await v(async()=>{const{download:i}=await import("./index-CXTg_FTa.js").then(h=>h.o4);return{download:i}},__vite__mapDeps([1,2]),import.meta.url);m(l,c)}return!0}}}function W(n,e,a){const t=document.createElement("div");t.className="script-run",t.setAttribute("role","status"),t.hidden=!0,t.innerHTML=`${k("square-code",14)}<span class="script-run-name">${p(e)}</span><span class="script-run-message"></span><progress max="1" aria-label="Script progress"></progress><button type="button" class="script-run-stop" title="Stop the script (its changes so far stay as one undo step)">Stop</button>`,t.querySelector("button").addEventListener("click",a),n.root.append(t);const s=window.setTimeout(()=>t.hidden=!1,400),r=t.querySelector("progress");return r.removeAttribute("value"),{progress(o,d){o===null?r.removeAttribute("value"):r.value=o,t.querySelector(".script-run-message").textContent=d,(d||o!==null)&&(t.hidden=!1)},stopping(){t.querySelector("button").disabled=!0,t.querySelector(".script-run-message").textContent="Stopping…"},remove(){clearTimeout(s),t.remove()}}}const x=500,y=[],S=new Set;function Q(n){return S.add(n),()=>S.delete(n)}function $(n,e,a){y.push({time:Date.now(),script:n,level:e,text:a}),y.length>x&&y.splice(0,y.length-x),S.forEach(t=>t())}function Y(){y.length=0,S.forEach(n=>n())}let b;const Z=()=>!!b;async function H(n,e){const a=await C({title:"Run Script?",className:"script-confirm",body:`<p>“${O(n)}” is a script: a small program that can change your open documents, create and close documents, and ask you to open or save files.</p><p class="muted">It runs separately from Photo Studio, without network access and without access to your Puter account or this site's storage. Run it only if you trust where it came from.</p>${e.offerInstall?'<label class="dialog-field checkbox-field">Add it to File → Scripts<input type="checkbox" name="install"></label>':""}`,submit:"Run Script"});if(!a)return null;const t=e.offerInstall&&j(a.form,"install");return a.close(),{install:t}}async function ee(n,e){if(b)return n.message("Another script is running. Stop it first."),!1;let a=e.trusted??(e.id?!!I(e.id)?.trusted:!1);if(!a){if(e.event)return n.message(`“${e.name}” was not run for ${e.event.name}: run it once from File → Scripts first.`),!1;const u=await H(e.name,{offerInstall:!e.id});if(!u)return!1;if(a=!0,e.id)await L(e.id,{trusted:!0});else if(u.install){const l=M(e.source,e.name,{trusted:!0});await _(l),e={...e,id:l.id}}}const t=`${e.name} (script)`;let s;const r=new F(e.source,{script:{id:e.id??"",name:e.name},event:e.event??null},{call:(u,l)=>o.call(u,l),log:(u,l)=>$(e.name,u,l)},A(e.source).timeout??30);s=W(n,e.name,()=>{s?.stopping(),r.cancel()});const o=new T(n,V(n,e.name,(u,l)=>s?.progress(u,l)),t);b=r;let d;try{d=await r.run()}finally{b=void 0,s.remove(),o.finish()}return G(n,e.name,d),!0}function G(n,e,a){if(a.status==="done"){$(e,"info","Finished.");return}const t=a.status==="cancelled"?`Stopped “${e}”. Changes it made so far can be undone in one step.`:a.status==="timeout"?`Stopped “${e}”: it did not respond for ${a.seconds} seconds.`:`“${e}” failed${a.line?` at line ${a.line}`:""}: ${a.message}`;$(e,a.status==="cancelled"?"info":"error",t),n.message(t)}export{Y as clearScriptLog,H as confirmScript,Q as onScriptLog,ee as runScript,y as scriptLog,Z as scriptRunning};
