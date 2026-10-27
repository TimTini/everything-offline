const e=`// @name Add Border\r
// @description Draws a solid border around the canvas, or around the selection, on a new layer.\r
const doc = await studio.documents.active();\r
if (!doc) return studio.ui.alert('Open a document first.');\r
const selection = await doc.selection();\r
\r
const v = await studio.ui.form('Add Border', [\r
  { name: 'width', label: 'Width (px)', type: 'number', min: 1, max: 1000, step: 1, value: Math.max(2, Math.round(Math.min(doc.width, doc.height) / 50)) },\r
  { name: 'color', label: 'Color', type: 'color', value: '#ffffff' },\r
  { name: 'where', label: 'Around', type: 'select', value: selection ? 'selection' : 'canvas', options: selection ? [['selection', 'The selection bounds'], ['canvas', 'The canvas']] : [['canvas', 'The canvas']] },\r
  { name: 'inside', label: 'Draw inside the edge', type: 'checkbox', value: true },\r
], { submit: 'Add' });\r
if (!v) return;\r
\r
const box = v.where === 'selection' && selection ? selection : { x: 0, y: 0, width: doc.width, height: doc.height };\r
const w = Math.round(v.width);\r
// The outer rectangle of the frame; outside the edge it grows by the width.\r
const outer = v.inside ? box : { x: box.x - w, y: box.y - w, width: box.width + 2 * w, height: box.height + 2 * w };\r
const frame = studio.image.create(outer.width, outer.height);\r
const [r, g, b] = [1, 3, 5].map((i) => parseInt(v.color.slice(i, i + 2), 16));\r
for (let y = 0; y < outer.height; y++)\r
  for (let x = 0; x < outer.width; x++) {\r
    if (x >= w && y >= w && x < outer.width - w && y < outer.height - w) continue;\r
    const o = (y * outer.width + x) * 4;\r
    frame.data[o] = r;\r
    frame.data[o + 1] = g;\r
    frame.data[o + 2] = b;\r
    frame.data[o + 3] = 255;\r
  }\r
const layer = await doc.addLayer({ name: 'Border' });\r
await layer.setPixels(frame, outer.x, outer.y);\r
`;export{e as default};
