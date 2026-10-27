const e=`// @name Export Layers at Several Sizes\r
// @description Saves every layer as its own image at each of the scales you list, collected in one ZIP file.\r
const doc = await studio.documents.active();\r
if (!doc) return studio.ui.alert('Open a document first.');\r
\r
const v = await studio.ui.form('Export Layers at Several Sizes', [\r
  { name: 'scales', label: 'Scales (percent, separated by commas)', value: '100, 50, 25' },\r
  { name: 'format', label: 'Format', type: 'select', value: 'png', options: [['png', 'PNG'], ['jpeg', 'JPEG'], ['webp', 'WebP']] },\r
  { name: 'quality', label: 'Quality (JPEG and WebP)', type: 'range', min: 10, max: 100, step: 5, value: 85 },\r
  { name: 'visibleOnly', label: 'Visible layers only', type: 'checkbox', value: true },\r
  { name: 'trim', label: 'Trim to each layer’s content', type: 'checkbox', value: true },\r
], { submit: 'Export' });\r
if (!v) return;\r
\r
const scales = v.scales.split(/[,;\\s]+/).map(Number).filter((n) => n > 0 && n <= 1000);\r
if (!scales.length) return studio.ui.alert('List at least one scale, such as 100, 50.');\r
// Groups export their children; adjustment layers have no pixels of their own.\r
const layers = (await doc.layers()).filter((l) => !['group', 'artboard', 'adjustment'].includes(l.kind) && (!v.visibleOnly || l.visible));\r
if (!layers.length) return studio.ui.alert('There are no layers to export.');\r
\r
const safe = (s) => s.replace(/[^\\w\\- ]+/g, '_').trim() || 'layer';\r
const files = [];\r
let done = 0;\r
for (const layer of layers) {\r
  for (const scale of scales) {\r
    studio.checkCancelled();\r
    await studio.ui.progress(done / (layers.length * scales.length), \`\${layer.name} at \${scale}%\`);\r
    const out = await layer.export({ format: v.format, quality: v.quality, scale: scale / 100, trim: v.trim });\r
    files.push({ name: \`\${safe(layer.name)}@\${scale}.\${out.extension}\`, data: out.data });\r
    done++;\r
  }\r
}\r
await studio.ui.progress(1, 'Saving…');\r
await studio.files.saveAll(files, \`\${safe(doc.name)}-layers.zip\`);\r
console.log(\`Exported \${layers.length} layers at \${scales.length} sizes.\`);\r
`;export{e as default};
