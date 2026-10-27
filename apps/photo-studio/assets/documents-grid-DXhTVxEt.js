const t=`// @name Grid from Open Documents\r
// @description Lays out a thumbnail of every open document in a grid on a new document, with optional names underneath.\r
const docs = await studio.documents.list();\r
if (!docs.length) return studio.ui.alert('Open the documents to collect first.');\r
\r
const v = await studio.ui.form('Grid from Open Documents', [\r
  { name: 'columns', label: 'Columns', type: 'number', min: 1, max: 12, step: 1, value: Math.min(4, Math.ceil(Math.sqrt(docs.length))) },\r
  { name: 'cell', label: 'Cell size (px)', type: 'number', min: 32, max: 2048, step: 1, value: 320 },\r
  { name: 'gap', label: 'Gap (px)', type: 'number', min: 0, max: 400, step: 1, value: 24 },\r
  { name: 'background', label: 'Background', type: 'color', value: '#f2f2f2' },\r
  { name: 'captions', label: 'Names under the images', type: 'checkbox', value: true },\r
], { submit: 'Create' });\r
if (!v) return;\r
\r
const cols = Math.min(v.columns, docs.length);\r
const rows = Math.ceil(docs.length / cols);\r
const captionHeight = v.captions ? Math.round(v.cell * 0.12) : 0;\r
const width = cols * v.cell + (cols + 1) * v.gap;\r
const height = rows * (v.cell + captionHeight) + (rows + 1) * v.gap;\r
if (width > 8192 || height > 8192) return studio.ui.alert('That grid would be larger than 8192 pixels. Use fewer columns or smaller cells.');\r
\r
// Area-average downscale (or nearest-neighbor upscale) of RGBA pixels.\r
function resize(src, w, h) {\r
  const out = studio.image.create(w, h);\r
  for (let y = 0; y < h; y++) {\r
    const y0 = Math.floor((y * src.height) / h), y1 = Math.max(y0 + 1, Math.floor(((y + 1) * src.height) / h));\r
    for (let x = 0; x < w; x++) {\r
      const x0 = Math.floor((x * src.width) / w), x1 = Math.max(x0 + 1, Math.floor(((x + 1) * src.width) / w));\r
      let r = 0, g = 0, b = 0, a = 0, n = 0;\r
      for (let sy = y0; sy < y1; sy++)\r
        for (let sx = x0; sx < x1; sx++) {\r
          const i = (sy * src.width + sx) * 4, alpha = src.data[i + 3];\r
          r += src.data[i] * alpha; g += src.data[i + 1] * alpha; b += src.data[i + 2] * alpha; a += alpha; n++;\r
        }\r
      const o = (y * w + x) * 4;\r
      if (a) { out.data[o] = r / a; out.data[o + 1] = g / a; out.data[o + 2] = b / a; }\r
      out.data[o + 3] = a / n;\r
    }\r
  }\r
  return out;\r
}\r
\r
// Read every composite before the new document becomes the active one.\r
const thumbs = [];\r
for (const [i, d] of docs.entries()) {\r
  studio.checkCancelled();\r
  await studio.ui.progress(i / docs.length, \`Reading \${d.name}\`);\r
  const s = Math.min(v.cell / d.width, v.cell / d.height);\r
  const w = Math.max(1, Math.round(d.width * s)), h = Math.max(1, Math.round(d.height * s));\r
  thumbs.push({ name: d.name, image: resize(await d.composite(), w, h) });\r
}\r
const sheet = await studio.documents.create({ name: 'Document Grid', width, height, background: v.background });\r
for (const [i, t] of thumbs.entries()) {\r
  studio.checkCancelled();\r
  await studio.ui.progress(i / thumbs.length, \`Placing \${t.name}\`);\r
  const col = i % cols, row = Math.floor(i / cols);\r
  const cx = v.gap + col * (v.cell + v.gap), cy = v.gap + row * (v.cell + captionHeight + v.gap);\r
  const x = cx + Math.round((v.cell - t.image.width) / 2), y = cy + Math.round((v.cell - t.image.height) / 2);\r
  const layer = await sheet.addLayer({ name: t.name });\r
  await layer.setPixels(t.image, x, y);\r
  if (v.captions) {\r
    const caption = await sheet.addLayer({ kind: 'text', name: \`\${t.name} caption\`, text: t.name, size: Math.max(8, Math.round(captionHeight * 0.55)), color: '#333333', x: cx, y: cy + v.cell + Math.round(captionHeight * 0.2) });\r
    // Center the caption under its cell.\r
    await caption.move(Math.round((v.cell - caption.bounds.width) / 2), 0);\r
  }\r
}\r
`;export{t as default};
