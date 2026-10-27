const e=`// @name Random Color Swatches\r
// @description Builds a strip of harmonious color swatches with their hex codes as a group of layers.\r
const v = await studio.ui.form('Random Color Swatches', [\r
  { name: 'count', label: 'Swatches', type: 'number', min: 2, max: 12, step: 1, value: 5 },\r
  { name: 'scheme', label: 'Scheme', type: 'select', value: 'analogous', options: [['analogous', 'Neighboring hues'], ['complementary', 'Opposite hues'], ['triad', 'Three-way'], ['shades', 'Shades of one hue'], ['random', 'Anything goes']] },\r
  { name: 'labels', label: 'Hex codes under the swatches', type: 'checkbox', value: true },\r
  { name: 'seed', label: 'Seed (0 picks a new one)', type: 'number', min: 0, max: 999999, step: 1, value: 0 },\r
], { submit: 'Create' });\r
if (!v) return;\r
\r
// A small seeded generator, so a seed reproduces its palette.\r
let state = v.seed || Math.floor(Math.random() * 999999) + 1;\r
const random = () => ((state = (state * 48271) % 2147483647) / 2147483647);\r
const hsl = (h, s, l) => {\r
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);\r
  const f = (n) => Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))));\r
  return [f(0), f(8), f(4)];\r
};\r
const base = random() * 360;\r
const colors = [];\r
for (let i = 0; i < v.count; i++) {\r
  const t = i / Math.max(1, v.count - 1);\r
  let h = base, s = 0.45 + random() * 0.4, l = 0.35 + random() * 0.35;\r
  if (v.scheme === 'analogous') h = base + (t - 0.5) * 70;\r
  else if (v.scheme === 'complementary') h = base + (i % 2) * 180 + (random() - 0.5) * 16;\r
  else if (v.scheme === 'triad') h = base + (i % 3) * 120 + (random() - 0.5) * 12;\r
  else if (v.scheme === 'shades') l = 0.18 + t * 0.66;\r
  else h = random() * 360;\r
  colors.push(hsl(((h % 360) + 360) % 360, s, l));\r
}\r
const hex = (c) => '#' + c.map((x) => x.toString(16).padStart(2, '0')).join('');\r
\r
const swatch = 160, gap = 16, label = v.labels ? 40 : 0;\r
let doc = await studio.documents.active();\r
if (!doc) doc = await studio.documents.create({ name: 'Swatches', width: v.count * (swatch + gap) + gap, height: swatch + label + 2 * gap, background: 'white' });\r
const group = await doc.addLayer({ kind: 'group', name: \`Swatches \${state}\` });\r
const x0 = Math.max(0, Math.round((doc.width - (v.count * (swatch + gap) - gap)) / 2));\r
const y0 = Math.max(0, Math.round((doc.height - swatch - label) / 2));\r
for (const [i, c] of colors.entries()) {\r
  const x = x0 + i * (swatch + gap);\r
  await doc.addLayer({ name: hex(c), fill: hex(c), rect: { x, y: y0, width: swatch, height: swatch }, inside: group });\r
  if (v.labels) {\r
    const t = await doc.addLayer({ kind: 'text', name: \`\${hex(c)} label\`, text: hex(c).toUpperCase(), size: 22, color: '#333333', x, y: y0 + swatch + 10, inside: group });\r
    await t.move(Math.round((swatch - t.bounds.width) / 2), 0);\r
  }\r
}\r
console.log(colors.map(hex).join(' '));\r
`;export{e as default};
