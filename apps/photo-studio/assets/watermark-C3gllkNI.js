const t=`// @name Add Watermark\r
// @description Adds a text layer with a line such as a copyright notice in a corner of the image.\r
const doc = await studio.documents.active();\r
if (!doc) return studio.ui.alert('Open a document first.');\r
\r
const year = new Date().getFullYear();\r
const v = await studio.ui.form('Add Watermark', [\r
  { name: 'text', label: 'Text', value: \`© \${year}\` },\r
  { name: 'corner', label: 'Corner', type: 'select', value: 'bottom-right', options: [['bottom-right', 'Bottom right'], ['bottom-left', 'Bottom left'], ['top-right', 'Top right'], ['top-left', 'Top left'], ['center', 'Center']] },\r
  { name: 'size', label: 'Size (% of the shorter side)', type: 'range', min: 1, max: 20, step: 1, value: 4 },\r
  { name: 'color', label: 'Color', type: 'color', value: '#ffffff' },\r
  { name: 'opacity', label: 'Opacity (%)', type: 'number', min: 1, max: 100, value: 70 },\r
  { name: 'shadow', label: 'Soft shadow', type: 'checkbox', value: true },\r
], { submit: 'Add' });\r
if (!v || !v.text.trim()) return;\r
\r
const size = Math.max(6, Math.round((Math.min(doc.width, doc.height) * v.size) / 100));\r
const margin = Math.round(size * 0.8);\r
let layer = await doc.addLayer({ kind: 'text', name: 'Watermark', text: v.text, size, color: v.color, x: 0, y: 0 });\r
const b = layer.bounds;\r
const x = v.corner.endsWith('left') ? margin : v.corner === 'center' ? Math.round((doc.width - b.width) / 2) : doc.width - margin - b.width;\r
const y = v.corner.startsWith('top') ? margin : v.corner === 'center' ? Math.round((doc.height - b.height) / 2) : doc.height - margin - b.height;\r
layer = await layer.moveTo(x, y);\r
await layer.set({ opacity: v.opacity });\r
if (v.shadow) await layer.setStyle({ dropShadow: { opacity: 45, distance: Math.max(1, Math.round(size / 12)), size: Math.max(2, Math.round(size / 6)) } });\r
`;export{t as default};
