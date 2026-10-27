const e=`// @name Rename Layers by Pattern\r
// @description Renames the selected layers (or all layers) from a pattern with numbers, or by finding and replacing text.\r
const doc = await studio.documents.active();\r
if (!doc) return studio.ui.alert('Open a document first.');\r
\r
const v = await studio.ui.form('Rename Layers by Pattern', [\r
  { name: 'scope', label: 'Layers', type: 'select', value: 'selected', options: [['selected', 'Selected layers'], ['all', 'All layers']] },\r
  { name: 'mode', label: 'Rename by', type: 'select', value: 'pattern', options: [['pattern', 'Pattern'], ['replace', 'Find and replace']] },\r
  { name: 'pattern', label: 'Pattern (# is the number, * the old name)', value: 'Layer ##' },\r
  { name: 'start', label: 'First number', type: 'number', min: 0, max: 100000, step: 1, value: 1 },\r
  { name: 'find', label: 'Find (find and replace)', value: '' },\r
  { name: 'replace', label: 'Replace with', value: '' },\r
  { name: 'regex', label: 'Find is a regular expression', type: 'checkbox', value: false },\r
], { submit: 'Rename' });\r
if (!v) return;\r
\r
let layers = v.scope === 'selected' ? await doc.selectedLayers() : await doc.layers();\r
// Bottom-most first, so numbers grow upward as the stack is built.\r
layers = layers.filter((l) => !l.background).reverse();\r
if (!layers.length) return studio.ui.alert('There are no layers to rename.');\r
\r
let find = null;\r
if (v.mode === 'replace') {\r
  if (!v.find) return studio.ui.alert('Enter the text to find.');\r
  try {\r
    find = v.regex ? new RegExp(v.find, 'g') : new RegExp(v.find.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g');\r
  } catch (error) {\r
    return studio.ui.alert(\`That regular expression is not valid: \${error.message}\`);\r
  }\r
}\r
let renamed = 0;\r
for (const [i, layer] of layers.entries()) {\r
  const name = find\r
    ? layer.name.replace(find, v.replace)\r
    // A run of # becomes the number padded to that many digits.\r
    : v.pattern.replace(/#+/g, (h) => String(v.start + i).padStart(h.length, '0')).replace(/\\*/g, layer.name);\r
  if (name && name !== layer.name) {\r
    await layer.rename(name);\r
    renamed++;\r
  }\r
}\r
await studio.app.message(\`Renamed \${renamed} layer\${renamed === 1 ? '' : 's'}.\`);\r
`;export{e as default};
