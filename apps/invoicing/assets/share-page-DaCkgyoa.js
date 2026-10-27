const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-spec-DjSk9VwG.js","./index-BjJk1ptq.js","./index-CSSRh8Jj.css"])))=>i.map(i=>d[i]);
import{C as e,l as t,n,t as r,u as i,w as a}from"./index-BjJk1ptq.js";var o=`/* The document paper. Self-contained (no app tokens) because it is also\r
   embedded verbatim into public share pages and print output. Paper stays\r
   light in every app theme, like paper. */\r
\r
.paper {\r
  background: #ffffff;\r
  color: #17181c;\r
  border: 1px solid rgba(23, 24, 28, 0.12);\r
  border-radius: 12px;\r
  padding: clamp(20px, 5vw, 44px);\r
  font-size: 14px;\r
  line-height: 1.5;\r
  overflow-wrap: break-word;\r
}\r
\r
.paper .num {\r
  text-align: right;\r
  font-variant-numeric: tabular-nums;\r
  white-space: nowrap;\r
}\r
\r
.paper-head {\r
  display: flex;\r
  justify-content: space-between;\r
  gap: 20px;\r
  flex-wrap: wrap;\r
}\r
\r
/* Every column of the two header rows has to be allowed to shrink. A flex\r
   item will not go below its longest word, and .paper's overflow-wrap can\r
   only break one inside a box that is already narrow enough — so a client's\r
   email at a single-word domain, an address line typed without spaces, or a\r
   reference number run together sized the column to that word and the paper\r
   bled out of its page. The same three surfaces draw this stylesheet: the\r
   app's preview, the printed sheet, and the public share page. */\r
.paper-head > *,\r
.paper-parties > * {\r
  min-width: 0;\r
}\r
\r
/* Capped so a tall or very wide logo can never dwarf the paper, and always\r
   printed with its real colors rather than a browser's ink-saving pass. */\r
.paper-logo {\r
  display: block;\r
  max-width: min(220px, 100%);\r
  max-height: 62px;\r
  width: auto;\r
  height: auto;\r
  margin-bottom: 10px;\r
  object-fit: contain;\r
  print-color-adjust: exact;\r
  -webkit-print-color-adjust: exact;\r
}\r
\r
.paper-biz-name {\r
  font-size: 18px;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
}\r
\r
.paper-sub {\r
  color: #5b5e66;\r
  font-size: 12.5px;\r
}\r
\r
.paper-id {\r
  text-align: right;\r
}\r
\r
.paper-kind {\r
  font-size: 12px;\r
  font-weight: 700;\r
  letter-spacing: 0.14em;\r
  text-transform: uppercase;\r
  color: #5b5e66;\r
}\r
\r
.paper-number {\r
  font-size: 19px;\r
  font-weight: 700;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.paper-stamp {\r
  display: inline-block;\r
  margin-top: 8px;\r
  padding: 3px 10px;\r
  border-radius: 6px;\r
  border: 1.5px solid currentColor;\r
  font-size: 11.5px;\r
  font-weight: 800;\r
  letter-spacing: 0.1em;\r
  text-transform: uppercase;\r
}\r
\r
.paper-stamp.tone-ok { color: #0d7a3f; }\r
.paper-stamp.tone-bad { color: #c22f2f; }\r
.paper-stamp.tone-warn { color: #955f00; }\r
.paper-stamp.tone-neutral { color: #5b5e66; }\r
\r
.paper-parties {\r
  display: flex;\r
  justify-content: space-between;\r
  gap: 20px;\r
  flex-wrap: wrap;\r
  margin-top: 28px;\r
}\r
\r
/* The quiet gray these small caps used to take, #82858d, held only 3.69:1 on\r
   the paper — under the 4.5:1 that 11px text needs, and this is the one thing\r
   in the app a client reads: the block labels of an invoice and the column\r
   headings of its table, on screen, on a share page, on paper, and in the\r
   PDF. #6d7078 is 4.92:1 and still sits a clear step behind .paper-sub. */\r
.paper-label {\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 0.09em;\r
  text-transform: uppercase;\r
  color: #6d7078;\r
  margin-bottom: 2px;\r
}\r
\r
.paper-label:not(:first-child) {\r
  margin-top: 10px;\r
}\r
\r
.paper-client-name {\r
  font-weight: 650;\r
}\r
\r
.paper-dates {\r
  text-align: right;\r
}\r
\r
/* The numeric columns never wrap, so on a narrow phone a table can be\r
   intrinsically wider than the paper; it then scrolls inside its own rail\r
   rather than bleeding through the card's edge. Full-width papers (print,\r
   desktop) never overflow, so nothing changes there. */\r
/* tabindex="0" in the markup, because a scroll container is only scrollable\r
   by keyboard while it holds focus, and nothing inside this one is focusable:\r
   at a phone's width — or a desktop zoomed to 400% — the Amount column of an\r
   invoice and the Balance column of a statement were off the rail's edge with\r
   no way to reach them but a pointer. Focus is a real state here, so it says\r
   so rather than borrowing the app's ring on a block of paper. */\r
.paper-table-scroll {\r
  margin-top: 26px;\r
  overflow-x: auto;\r
}\r
\r
.paper-table-scroll:focus-visible {\r
  outline: 2px solid #2b49c4;\r
  outline-offset: 3px;\r
  border-radius: 4px;\r
}\r
\r
.paper-table {\r
  width: 100%;\r
  border-collapse: collapse;\r
}\r
\r
.paper-table th {\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 0.09em;\r
  text-transform: uppercase;\r
  color: #6d7078;   /* 4.92:1, like .paper-label above */\r
  text-align: left;\r
  padding: 0 8px 8px;\r
  border-bottom: 1.5px solid #17181c;\r
}\r
\r
.paper-table td {\r
  padding: 9px 8px;\r
  border-bottom: 1px solid rgba(23, 24, 28, 0.1);\r
  vertical-align: top;\r
}\r
\r
.paper-table td:first-child {\r
  width: 55%;\r
}\r
\r
/* The line's own work description, under the name it belongs to. */\r
.paper-item-details {\r
  color: #5b5e66;\r
  font-size: 11.5px;\r
  margin-top: 3px;\r
}\r
\r
/* A statement lists five narrow columns, none of which is a description. */\r
.paper-table-statement td:first-child {\r
  width: auto;\r
  font-weight: 650;\r
  white-space: nowrap;\r
}\r
\r
.paper-late {\r
  color: #c22f2f;\r
  font-size: 11.5px;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
}\r
\r
.paper-foot {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: flex-start;\r
  gap: 24px;\r
  flex-wrap: wrap;\r
  margin-top: 18px;\r
}\r
\r
.paper-notes {\r
  flex: 1 1 220px;\r
  min-width: 0;\r
}\r
\r
.paper-paylink {\r
  color: #2b49c4;\r
  text-decoration: underline;\r
  word-break: break-all;\r
  font-size: 13px;\r
}\r
\r
.paper-totals {\r
  flex: 0 1 260px;\r
  min-width: 220px;\r
}\r
\r
.paper-trow {\r
  display: flex;\r
  justify-content: space-between;\r
  gap: 16px;\r
  padding: 5px 8px;\r
  color: #3c3f45;\r
}\r
\r
.paper-trow.strong {\r
  color: #17181c;\r
  font-weight: 700;\r
  border-top: 1.5px solid #17181c;\r
  margin-top: 4px;\r
  padding-top: 9px;\r
  font-size: 15px;\r
}\r
\r
.receipt-amount {\r
  margin-top: 28px;\r
  padding: 18px;\r
  border: 1px solid rgba(23, 24, 28, 0.12);\r
  border-radius: 10px;\r
}\r
\r
.receipt-big {\r
  font-size: 30px;\r
  font-weight: 750;\r
  letter-spacing: -0.01em;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
@media (max-width: 480px) {\r
  .paper-id { text-align: left; }\r
  .paper-dates { text-align: left; }\r
}\r
\r
/* The statement's aging summary, under the totals it breaks down. Set in the\r
   same column so its figures line up with the total above them. */\r
.paper-aging {\r
  margin-top: 12px;\r
  padding-top: 10px;\r
  border-top: 1px solid #d9dbe0;\r
}\r
\r
/* The payment plan under the totals it splits: same column, same figures,\r
   the state of each part in quieter ink. */\r
.paper-schedule {\r
  margin-top: 12px;\r
  padding-top: 10px;\r
  border-top: 1px solid #d9dbe0;\r
}\r
\r
.paper-inst-state {\r
  color: #6d7078;   /* 4.95:1, like .paper-label */\r
}\r
`,s=`/**\r
 * A small PDF writer for the paper, with no dependencies.\r
 *\r
 * Clients and accounts-payable departments ask for "the PDF", and print-to-PDF\r
 * is clumsy on desktop and often missing on mobile. This renders the same\r
 * paper into a real PDF file with selectable text, using the base-14\r
 * Helvetica every viewer already has, so nothing has to be embedded and the\r
 * whole generator stays a few kilobytes.\r
 *\r
 * It takes a \`spec\` (see lib/pdf-spec.js) rather than a document, which keeps\r
 * this file free of app imports: it can be lazy-loaded on first use, and\r
 * inlined verbatim into a self-contained public share page.\r
 *\r
 * Text is encoded as WinAnsi, the encoding those built-in fonts speak. Text\r
 * outside it (CJK, for instance) would need a font embedded and megabytes of\r
 * download, so those characters fall back to '?' and such users keep the\r
 * browser's own print-to-PDF.\r
 */\r
\r
/* ---------- Page geometry, in points ---------- */\r
\r
/**\r
 * The two paper sizes the world actually prints on. The spec names one\r
 * (\`spec.paper\`); everything else about the layout is proportional, so both\r
 * sizes share the single template. Unknown or missing names mean A4.\r
 */\r
const PAGE_SIZES = {\r
  a4: { w: 595.28, h: 841.89 },\r
  letter: { w: 612, h: 792 },\r
};\r
const pageSize = (name) => PAGE_SIZES[name] || PAGE_SIZES.a4;\r
\r
const MARGIN = 46;\r
const FOOT_H = 26;\r
\r
const INK = '#17181c';\r
const INK_2 = '#3c3f45';\r
const MUTED = '#6d7078';   /* 4.92:1 on the page; see .paper-label */\r
const SUB = '#5b5e66';\r
const HAIR = '#e2e3e6';\r
\r
/* ---------- Font metrics: Helvetica and Helvetica-Bold, codes 32..126 ---------- */\r
\r
const W_REG = [\r
  278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278,\r
  556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556,\r
  1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778,\r
  667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556,\r
  333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556,\r
  556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584,\r
];\r
\r
const W_BOLD = [\r
  278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278,\r
  556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611,\r
  975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778,\r
  667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556,\r
  333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611,\r
  611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584,\r
];\r
\r
/** Characters outside ASCII borrow the width of a look-alike. */\r
const WIDTH_PROXY = {\r
  0x80: '0', 0x85: 'm', 0x91: "'", 0x92: "'", 0x93: '"', 0x94: '"', 0x95: 'o',\r
  0x96: '0', 0x97: 'm', 0x99: 'm', 0xa0: ' ', 0xa3: '0', 0xa5: '0', 0xa9: 'C',\r
  0xae: 'C', 0xb0: 'o', 0xb7: '.', 0xdf: 'b',\r
};\r
\r
/**\r
 * Unicode punctuation and symbols that WinAnsi does carry, at its own codes —\r
 * plus lookalike folds for what number formatting emits in many locales: the\r
 * narrow/thin/figure spaces some locales group digits with become a\r
 * no-break space, and the true minus sign becomes a hyphen. Without these,\r
 * every amount on a French or Finnish PDF would carry a '?'.\r
 */\r
const WINANSI = {\r
  0x20ac: 0x80, 0x2026: 0x85, 0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93,\r
  0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x2122: 0x99,\r
  0x02c6: 0x88, 0x2039: 0x8b, 0x203a: 0x9b, 0x201a: 0x82, 0x201e: 0x84,\r
  0x2020: 0x86, 0x2021: 0x87, 0x2030: 0x89,\r
  0x2007: 0xa0, 0x2009: 0xa0, 0x202f: 0xa0, 0x2212: 0x2d,\r
};\r
\r
/** Fold a JS string into the single-byte encoding the built-in fonts use. */\r
export function winAnsi(value) {\r
  let out = '';\r
  for (const ch of String(value ?? '')) {\r
    const code = ch.codePointAt(0);\r
    if (code === 9) { out += ' '; continue; }\r
    if (code < 32) continue;\r
    // Zero-width and bidi formatting marks — Intl wraps numbers in them in\r
    // RTL locales — have no glyph of their own: dropped, not folded to '?'.\r
    if (code === 0x061c || (code >= 0x200b && code <= 0x200f) || code === 0xfeff) continue;\r
    if (code <= 0xff) { out += ch; continue; }\r
    const mapped = WINANSI[code];\r
    out += mapped ? String.fromCharCode(mapped) : '?';\r
  }\r
  return out;\r
}\r
\r
function charWidth(code, bold) {\r
  const table = bold ? W_BOLD : W_REG;\r
  if (code >= 32 && code <= 126) return table[code - 32];\r
  const proxy = WIDTH_PROXY[code];\r
  if (proxy) return table[proxy.charCodeAt(0) - 32];\r
  if (code >= 0xc0) return table['A'.charCodeAt(0) - 32];  // accented capitals and letters\r
  return 556;\r
}\r
\r
/** Width of already-encoded text at a size, in points. */\r
export function textWidth(text, size, bold = false, tracking = 0) {\r
  let units = 0;\r
  for (let i = 0; i < text.length; i++) units += charWidth(text.charCodeAt(i), bold);\r
  return (units / 1000) * size + Math.max(0, text.length - 1) * tracking;\r
}\r
\r
/** Greedy word wrap to a maximum width; always returns at least one line. */\r
export function wrapText(text, size, bold, maxWidth) {\r
  const words = winAnsi(text).split(/\\s+/).filter(Boolean);\r
  if (!words.length) return [''];\r
  const lines = [];\r
  let line = '';\r
  for (const word of words) {\r
    const candidate = line ? \`\${line} \${word}\` : word;\r
    if (textWidth(candidate, size, bold) <= maxWidth || !line) {\r
      line = candidate;\r
    } else {\r
      lines.push(line);\r
      line = word;\r
    }\r
    // A single word longer than the column has to be broken somewhere. One\r
    // forward pass accumulates glyph widths to place each cut — re-measuring\r
    // ever-shorter slices went superlinear and froze the tab when a\r
    // multi-kilobyte unbroken paste (a URL, a base64 blob) hit an item name\r
    // or the notes.\r
    let units = 0;\r
    for (let i = 0; i < line.length; i++) units += charWidth(line.charCodeAt(i), bold);\r
    while ((units / 1000) * size > maxWidth && line.length > 1) {\r
      let cut = 1;\r
      let cutUnits = charWidth(line.charCodeAt(0), bold);\r
      while (cut < line.length - 1) {\r
        const w = charWidth(line.charCodeAt(cut), bold);\r
        if (((cutUnits + w) / 1000) * size > maxWidth) break;\r
        cutUnits += w;\r
        cut++;\r
      }\r
      lines.push(line.slice(0, cut));\r
      line = line.slice(cut);\r
      units -= cutUnits;\r
    }\r
  }\r
  if (line) lines.push(line);\r
  return lines;\r
}\r
\r
/* ---------- Low-level PDF plumbing ---------- */\r
\r
const num = (v) => {\r
  const r = Math.round(Number(v) * 100) / 100;\r
  return Number.isFinite(r) ? String(r) : '0';\r
};\r
\r
const escapeText = (text) => text.replace(/([\\\\()])/g, '\\\\$1');\r
\r
function rgb(hex, stroke = false) {\r
  const value = /^#?[0-9a-f]{6}$/i.test(String(hex || '')) ? String(hex).replace('#', '') : '17181c';\r
  const parts = [0, 2, 4].map((i) => (parseInt(value.slice(i, i + 2), 16) / 255).toFixed(3));\r
  return \`\${parts.join(' ')} \${stroke ? 'RG' : 'rg'}\`;\r
}\r
\r
const latin1Bytes = (str) => {\r
  const out = new Uint8Array(str.length);\r
  for (let i = 0; i < str.length; i++) out[i] = str.charCodeAt(i) & 0xff;\r
  return out;\r
};\r
\r
const base64Bytes = (b64) => {\r
  const raw = atob(b64);\r
  return latin1Bytes(raw);\r
};\r
\r
/**\r
 * Assemble numbered objects into a PDF file. Offsets are counted in bytes,\r
 * not characters, because an embedded image is binary.\r
 */\r
function assemble(objects) {\r
  const chunks = [];\r
  const offsets = [];\r
  let length = 0;\r
  const push = (part) => {\r
    const bytes = typeof part === 'string' ? latin1Bytes(part) : part;\r
    chunks.push(bytes);\r
    length += bytes.length;\r
  };\r
\r
  push('%PDF-1.4\\n%\\xe2\\xe3\\xcf\\xd3\\n');\r
  objects.forEach((obj, i) => {\r
    offsets[i] = length;\r
    push(\`\${i + 1} 0 obj\\n\`);\r
    if (typeof obj === 'string') {\r
      push(\`\${obj}\\n\`);\r
    } else {\r
      const body = typeof obj.stream === 'string' ? latin1Bytes(obj.stream) : obj.stream;\r
      push(\`<< \${obj.dict} /Length \${body.length} >>\\nstream\\n\`);\r
      push(body);\r
      push('\\nendstream\\n');\r
    }\r
    push('endobj\\n');\r
  });\r
\r
  const xref = length;\r
  let table = \`xref\\n0 \${objects.length + 1}\\n0000000000 65535 f \\n\`;\r
  for (const offset of offsets) table += \`\${String(offset).padStart(10, '0')} 00000 n \\n\`;\r
  push(table);\r
  push(\`trailer\\n<< /Size \${objects.length + 1} /Root 1 0 R >>\\nstartxref\\n\${xref}\\n%%EOF\\n\`);\r
\r
  const file = new Uint8Array(length);\r
  let at = 0;\r
  for (const chunk of chunks) { file.set(chunk, at); at += chunk.length; }\r
  return file;\r
}\r
\r
/* ---------- Drawing surface ---------- */\r
\r
function surface(pageH) {\r
  const pages = [];\r
  let ops = [];\r
\r
  const api = {\r
    ops: () => ops,\r
    pages,\r
    page() {\r
      pages.push(ops);\r
      ops = [];\r
    },\r
    finish() {\r
      pages.push(ops);\r
      ops = [];\r
      return pages;\r
    },\r
    /** Text with its top edge at \`top\`; returns the width drawn. */\r
    text(value, x, top, {\r
      size = 9, bold = false, color = INK, align = 'left', tracking = 0,\r
    } = {}) {\r
      const str = winAnsi(value);\r
      if (!str) return 0;\r
      const w = textWidth(str, size, bold, tracking);\r
      const px = align === 'right' ? x - w : align === 'center' ? x - w / 2 : x;\r
      const baseline = pageH - (top + size * 0.8);\r
      // Tc is graphics state, not per-op state: it survives BT/ET, so a\r
      // tracked label would spread its letter-spacing to every later op on\r
      // the page (which all measured themselves at tracking 0). Emit it\r
      // unconditionally so each op carries exactly the spacing it was\r
      // measured with.\r
      ops.push(\`BT \${rgb(color)} /\${bold ? 'F2' : 'F1'} \${num(size)} Tf\`\r
        + \` \${num(tracking)} Tc 1 0 0 1 \${num(px)} \${num(baseline)} Tm\`\r
        + \` (\${escapeText(str)}) Tj ET\`);\r
      return w;\r
    },\r
    line(x1, top1, x2, top2, { width = 0.6, color = HAIR } = {}) {\r
      ops.push(\`\${rgb(color, true)} \${num(width)} w \${num(x1)} \${num(pageH - top1)} m \`\r
        + \`\${num(x2)} \${num(pageH - top2)} l S\`);\r
    },\r
    roundRect(x, top, w, h, { radius = 4, stroke = null, fill = null, width = 1 } = {}) {\r
      const r = Math.min(radius, h / 2, w / 2);\r
      const y = pageH - top - h;\r
      const k = 0.5523 * r;\r
      const path = [\r
        \`\${num(x + r)} \${num(y)} m\`,\r
        \`\${num(x + w - r)} \${num(y)} l\`,\r
        \`\${num(x + w - r + k)} \${num(y)} \${num(x + w)} \${num(y + r - k)} \${num(x + w)} \${num(y + r)} c\`,\r
        \`\${num(x + w)} \${num(y + h - r)} l\`,\r
        \`\${num(x + w)} \${num(y + h - r + k)} \${num(x + w - r + k)} \${num(y + h)} \${num(x + w - r)} \${num(y + h)} c\`,\r
        \`\${num(x + r)} \${num(y + h)} l\`,\r
        \`\${num(x + r - k)} \${num(y + h)} \${num(x)} \${num(y + h - r + k)} \${num(x)} \${num(y + h - r)} c\`,\r
        \`\${num(x)} \${num(y + r)} l\`,\r
        \`\${num(x)} \${num(y + r - k)} \${num(x + r - k)} \${num(y)} \${num(x + r)} \${num(y)} c\`,\r
      ].join(' ');\r
      const paint = fill && stroke ? 'B' : fill ? 'f' : 'S';\r
      ops.push(\`\${fill ? \`\${rgb(fill)} \` : ''}\${stroke ? \`\${rgb(stroke, true)} \${num(width)} w \` : ''}\${path} h \${paint}\`);\r
    },\r
    image(name, x, top, w, h) {\r
      ops.push(\`q \${num(w)} 0 0 \${num(h)} \${num(x)} \${num(pageH - top - h)} cm /\${name} Do Q\`);\r
    },\r
  };\r
  return api;\r
}\r
\r
/* ---------- Logo: re-encoded to JPEG so it needs no filter of our own ---------- */\r
\r
async function loadLogo(dataUri) {\r
  if (!/^data:image\\/(png|jpeg|webp|gif|svg\\+xml);base64,/.test(String(dataUri || ''))) return null;\r
  try {\r
    const img = new Image();\r
    img.src = dataUri;\r
    await (img.decode ? img.decode() : new Promise((res, rej) => {\r
      img.onload = res;\r
      img.onerror = rej;\r
    }));\r
    const w0 = img.naturalWidth || 300;\r
    const h0 = img.naturalHeight || 150;\r
    const scale = Math.min(1, 640 / Math.max(w0, h0));\r
    const canvas = document.createElement('canvas');\r
    canvas.width = Math.max(1, Math.round(w0 * scale));\r
    canvas.height = Math.max(1, Math.round(h0 * scale));\r
    const ctx = canvas.getContext('2d');\r
    // JPEG carries no alpha, and the paper is white anyway.\r
    ctx.fillStyle = '#ffffff';\r
    ctx.fillRect(0, 0, canvas.width, canvas.height);\r
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\r
    const jpeg = canvas.toDataURL('image/jpeg', 0.92);\r
    if (!jpeg.startsWith('data:image/jpeg;base64,')) return null;\r
    return {\r
      bytes: base64Bytes(jpeg.split(',')[1]),\r
      width: canvas.width,\r
      height: canvas.height,\r
      ratio: canvas.width / canvas.height,\r
    };\r
  } catch {\r
    return null;      // a logo that cannot be read is not worth failing over\r
  }\r
}\r
\r
/* ---------- The paper, laid out ---------- */\r
\r
function drawPaper(spec, logo) {\r
  const { w: PAGE_W, h: PAGE_H } = pageSize(spec.paper);\r
  const s = surface(PAGE_H);\r
  const contentW = PAGE_W - MARGIN * 2;\r
  const bottom = PAGE_H - MARGIN - FOOT_H;\r
  const brand = /^#[0-9a-f]{6}$/i.test(String(spec.brand || '')) ? spec.brand : '';\r
  let y = MARGIN;\r
\r
  const room = (height) => {\r
    if (y + height <= bottom) return;\r
    s.page();\r
    y = MARGIN;\r
  };\r
\r
  /* Header: business on the left, document identity on the right. The\r
     identity column is bounded (a kind, a number, a subtitle, a stamp) and\r
     drawn first; the business column carries user data of any length, so it\r
     alone may break onto further pages — after which the identity column's\r
     end no longer bounds anything. */\r
  const rightX = PAGE_W - MARGIN;\r
  let rightY = y;\r
\r
  s.text(String(spec.kind || '').toUpperCase(), rightX, rightY, {\r
    size: 8, bold: true, align: 'right', tracking: 1.1, color: brand || SUB,\r
  });\r
  rightY += 13;\r
  if (spec.number) {\r
    s.text(spec.number, rightX, rightY, { size: 15, bold: true, align: 'right' });\r
    rightY += 20;\r
  }\r
  if (spec.subtitle) {\r
    s.text(spec.subtitle, rightX, rightY, { size: 8.5, align: 'right', color: SUB });\r
    rightY += 13;\r
  }\r
  if (spec.stamp) {\r
    const label = String(spec.stamp.label || '').toUpperCase();\r
    const w = textWidth(winAnsi(label), 8, true, 1) + 16;\r
    s.roundRect(rightX - w, rightY, w, 16, { radius: 4, stroke: spec.stamp.color || INK, width: 1.2 });\r
    s.text(label, rightX - w / 2, rightY + 4.2, {\r
      size: 8, bold: true, align: 'center', tracking: 1, color: spec.stamp.color || INK,\r
    });\r
    rightY += 22;\r
  }\r
\r
  let leftY = y;\r
  let leftBroke = false;\r
  const leftRoom = (height) => {\r
    if (leftY + height <= bottom) return;\r
    s.page();\r
    leftBroke = true;\r
    leftY = MARGIN;\r
  };\r
  if (logo) {\r
    const h = Math.min(38, 150 / logo.ratio);\r
    const w = h * logo.ratio;\r
    s.image('Im1', MARGIN, leftY, Math.min(w, 170), h);\r
    leftY += h + 9;\r
  }\r
  // The name shares the header with the identity column on the right, so\r
  // it wraps to its own side; unwrapped, a long or separator-free name ran\r
  // under the number and off the page (the HTML paper wraps both).\r
  for (const line of wrapText(spec.biz?.name || 'Your business', 14, true, contentW * 0.58)) {\r
    leftRoom(19);\r
    s.text(line, MARGIN, leftY, { size: 14, bold: true });\r
    leftY += 19;\r
  }\r
  for (const line of spec.biz?.lines || []) {\r
    leftRoom(12);\r
    s.text(line, MARGIN, leftY, { size: 8.5, color: SUB });\r
    leftY += 12;\r
  }\r
\r
  y = (leftBroke ? leftY : Math.max(leftY, rightY)) + 16;\r
\r
  /* Parties and dates. The dates column is bounded and drawn first; the\r
     party block's lines are user data, so they break like the business\r
     column above. A heading asks for its first line too. */\r
  const partyW = contentW * 0.55;\r
  // The values are user data too (a PO reference is typed in): wrapped to\r
  // the column's own width, or a long one ran leftwards through the party\r
  // block and, past the margin, off the page at a negative x.\r
  const datesW = contentW - partyW - 16;\r
  const dateRows = (spec.dates || []).map(([label, value]) => ({\r
    label: String(label).toUpperCase(),\r
    lines: wrapText(String(value ?? ''), 9.5, false, datesW),\r
  }));\r
  const datesH = dateRows.reduce((h, row) => h + 11 + 15 + (row.lines.length - 1) * 12, 0);\r
  room(Math.max(datesH, spec.party ? 37.5 : 0));\r
  let datesY = y;\r
  for (const row of dateRows) {\r
    s.text(row.label, rightX, datesY, {\r
      size: 7.5, bold: true, color: MUTED, align: 'right', tracking: 0.7,\r
    });\r
    datesY += 11;\r
    for (const [i, line] of row.lines.entries()) {\r
      if (i) datesY += 12;\r
      s.text(line, rightX, datesY, { size: 9.5, align: 'right' });\r
    }\r
    datesY += 15;\r
  }\r
  let partyY = y;\r
  let partyBroke = false;\r
  const partyRoom = (height) => {\r
    if (partyY + height <= bottom) return;\r
    s.page();\r
    partyBroke = true;\r
    partyY = MARGIN;\r
  };\r
  if (spec.party) {\r
    s.text(spec.party.label, MARGIN, partyY, { size: 7.5, bold: true, color: MUTED, tracking: 0.7 });\r
    partyY += 12;\r
    for (const line of wrapText(spec.party.name, 10.5, true, partyW)) {\r
      partyRoom(14);\r
      s.text(line, MARGIN, partyY, { size: 10.5, bold: true });\r
      partyY += 14;\r
    }\r
    for (const line of spec.party.lines || []) {\r
      for (const wrapped of wrapText(line, 8.5, false, partyW)) {\r
        partyRoom(11.5);\r
        s.text(wrapped, MARGIN, partyY, { size: 8.5, color: SUB });\r
        partyY += 11.5;\r
      }\r
    }\r
  }\r
  y = (partyBroke ? partyY : Math.max(partyY, datesY)) + 12;\r
\r
  /* An amount panel (receipts). The sub-lines (method, note) sit right of\r
     the big amount, wrapped to the space actually there; a long note grows\r
     the panel with them and, past a full page, continues them in a fresh\r
     panel rather than drawing into invisible coordinates. */\r
  if (spec.amount) {\r
    const pad = 14;\r
    const amountW = textWidth(winAnsi(String(spec.amount.value ?? '')), 22, true);\r
    const subW = Math.max(80, contentW - pad * 2 - amountW - 18);\r
    const subLines = (spec.amount.sub || [])\r
      .flatMap((line) => wrapText(line, 8.5, false, subW));\r
    room(Math.min(Math.max(60, 36 + subLines.length * 12) + 6, bottom - MARGIN));\r
    let start = 0;\r
    let first = true;\r
    do {\r
      const headH = first ? 26 : 10;\r
      const count = Math.min(subLines.length - start,\r
        Math.max(first ? 0 : 1, Math.floor((bottom - y - headH - 10) / 12)));\r
      const h = Math.max(first ? 60 : 0, headH + count * 12 + 10);\r
      s.roundRect(MARGIN, y, contentW, h, { radius: 6, stroke: HAIR, width: 0.8 });\r
      if (first) {\r
        s.text(String(spec.amount.label).toUpperCase(), MARGIN + pad, y + 12, {\r
          size: 7.5, bold: true, color: MUTED, tracking: 0.7,\r
        });\r
        s.text(spec.amount.value, MARGIN + pad, y + 26, { size: 22, bold: true });\r
      }\r
      let subY = y + headH;\r
      for (let i = 0; i < count; i++) {\r
        s.text(subLines[start + i], PAGE_W - MARGIN - pad, subY, { size: 8.5, color: SUB, align: 'right' });\r
        subY += 12;\r
      }\r
      start += count;\r
      y += h + 14;\r
      first = false;\r
      if (start < subLines.length) {\r
        s.page();\r
        y = MARGIN;\r
      }\r
    } while (start < subLines.length);\r
  }\r
\r
  /* The line-item table, repeating its header on every page it spills onto. */\r
  if (spec.table) {\r
    const { head = [], rows = [], widths = [], align = [] } = spec.table;\r
    const cols = widths.map((fraction) => fraction * contentW);\r
    const xs = [];\r
    let at = MARGIN;\r
    for (const w of cols) { xs.push(at); at += w; }\r
    const cellPad = 6;\r
\r
    const drawHead = () => {\r
      head.forEach((label, i) => {\r
        const right = align[i] === 'right';\r
        s.text(String(label).toUpperCase(), right ? xs[i] + cols[i] - cellPad : xs[i] + cellPad, y, {\r
          size: 7.5, bold: true, color: MUTED, tracking: 0.7, align: right ? 'right' : 'left',\r
        });\r
      });\r
      y += 13;\r
      s.line(MARGIN, y, PAGE_W - MARGIN, y, { width: 1.2, color: brand || INK });\r
      y += 7;\r
    };\r
\r
    room(60);\r
    drawHead();\r
\r
    if (!rows.length && spec.table.empty) {\r
      s.text(spec.table.empty, MARGIN + cellPad, y, { size: 9, color: SUB });\r
      y += 20;\r
    }\r
\r
    for (const row of rows) {\r
      // Measure the row first: a wrapped description must not straddle a\r
      // page. Right-aligned cells wrap too — a quantity is free text on an\r
      // imported document, and an unbounded line would be drawn leftward\r
      // across its neighbor columns. Bold cells measure as bold, or their\r
      // lines run wide of what was measured.\r
      // A cell is a string, or { text, sub }: the sub-text (a line item's\r
      // work description) wraps under the main text, smaller and muted,\r
      // and counts toward the row's height like every other line.\r
      const cellLines = row.map((cell, i) => {\r
        const isObj = !!cell && typeof cell === 'object';\r
        const main = wrapText(\r
          isObj ? cell.text : cell, 9, !!spec.table.boldFirst && i === 0, cols[i] - cellPad * 2,\r
        ).map((t) => ({ t, sub: false }));\r
        if (!isObj || !cell.sub) return main;\r
        for (const para of String(cell.sub).split('\\n')) {\r
          for (const t of wrapText(para, 8, false, cols[i] - cellPad * 2)) main.push({ t, sub: true });\r
        }\r
        return main;\r
      });\r
      const rowLines = Math.max(...cellLines.map((lines) => lines.length));\r
      const height = rowLines * 12 + 8;\r
      if (y + height > bottom) {\r
        s.page();\r
        y = MARGIN;\r
        drawHead();\r
      }\r
      // A row taller than even a whole page cannot be kept in one piece:\r
      // it draws in page-sized slices instead of running past the bottom\r
      // edge into invisibility. Rows that fit take a single pass.\r
      let start = 0;\r
      while (start < rowLines) {\r
        const count = Math.min(rowLines - start,\r
          Math.max(1, Math.floor((bottom - y - 8) / 12)));\r
        cellLines.forEach((lines, i) => {\r
          const right = align[i] === 'right';\r
          for (let li = start; li < Math.min(start + count, lines.length); li++) {\r
            const line = lines[li];\r
            s.text(line.t, right ? xs[i] + cols[i] - cellPad : xs[i] + cellPad, y + (li - start) * 12, {\r
              size: line.sub ? 8 : 9,\r
              color: line.sub ? SUB : (i === 0 ? INK : INK_2),\r
              bold: !line.sub && !!spec.table.boldFirst && i === 0,\r
              align: right ? 'right' : 'left',\r
            });\r
          }\r
        });\r
        start += count;\r
        y += count * 12;\r
        if (start < rowLines) {\r
          s.page();\r
          y = MARGIN;\r
          drawHead();\r
        }\r
      }\r
      y += 8;\r
      s.line(MARGIN, y - 4, PAGE_W - MARGIN, y - 4, { width: 0.5, color: HAIR });\r
    }\r
    y += 10;\r
  }\r
\r
  /* Notes on the left, totals on the right — kept together on one page. */\r
  const totalsW = 210;\r
  // Each label wraps short of its own value: a schedule row ("Sep 1, 2026 ·\r
  // On delivery · $1,000.00 open") or a long tax label used to run straight\r
  // through the amount beside it and on past the margin.\r
  const totals = (spec.totals || []).map((row) => {\r
    const size = row.strong ? 10.5 : 9;\r
    const valueW = textWidth(winAnsi(String(row.value ?? '')), size, !!row.strong);\r
    const lines = wrapText(String(row.label ?? ''), size, !!row.strong, Math.max(60, totalsW - valueW - 8));\r
    const height = (row.strong ? 22 : 17) + (lines.length - 1) * (size + 3);\r
    return { ...row, size, lines, height };\r
  });\r
  const totalsH = totals.reduce((h, row) => h + row.height, 0) + 4;\r
  const noteColW = contentW - totalsW - 24;\r
  const noteLines = [];\r
  if (spec.notes?.text) {\r
    noteLines.push(...String(spec.notes.text).split('\\n')\r
      .flatMap((para) => wrapText(para, 8.5, false, noteColW)));\r
  }\r
  // Labeled fine-print blocks under the notes: payment details, the tax\r
  // note, then the late-fee disclosure. Same column, same type, one loop.\r
  const blocks = [spec.instructions, spec.taxNote, spec.lateFee]\r
    .filter((b) => b?.text)\r
    .map((b) => ({\r
      label: String(b.label || ''),\r
      lines: String(b.text).split('\\n').flatMap((para) => wrapText(para, 8.5, false, noteColW)),\r
    }));\r
  const notesH = (spec.notes ? 14 : 0) + noteLines.length * 11.5\r
    + blocks.reduce((h, b) => h + 20 + b.lines.length * 11.5, 0)\r
    + (spec.payLink ? 30 : 0);\r
  // Capped at a full page: a taller block gets a fresh page and then wraps.\r
  room(Math.min(Math.max(totalsH, notesH) + 6, bottom - MARGIN));\r
\r
  // Totals first: they are bounded and stay beside the top of the notes\r
  // column, which is drawn after because it alone may spill onto further\r
  // pages (pasted terms, long bank blocks) and the surface writes pages in\r
  // order.\r
  let totalsY = y;\r
  let totalsBroke = false;\r
  const totalsX = PAGE_W - MARGIN;\r
  for (const row of totals) {\r
    // A totals list can outgrow a page too (imported documents may carry\r
    // any number of named taxes); it breaks like every other block.\r
    if (totalsY + row.height > bottom) {\r
      s.page();\r
      totalsBroke = true;\r
      totalsY = MARGIN;\r
    }\r
    const style = row.strong\r
      ? { size: row.size, bold: true }\r
      : { size: row.size, color: INK_2 };\r
    if (row.strong) {\r
      s.line(totalsX - totalsW, totalsY, totalsX, totalsY, { width: 1.2, color: brand || INK });\r
      totalsY += 5;\r
    }\r
    // The value sits on the label's first line; further lines stack under it.\r
    s.text(row.value, totalsX, totalsY, { ...style, align: 'right' });\r
    for (const [i, line] of row.lines.entries()) {\r
      if (i) totalsY += row.size + 3;\r
      s.text(line, totalsX - totalsW, totalsY, style);\r
    }\r
    totalsY += 17;\r
  }\r
\r
  // Text drawn past the page bottom lands at negative coordinates and is\r
  // simply invisible, so the notes column breaks to a new page instead. A\r
  // heading asks for room for its first line too, so it is never orphaned.\r
  // Once the totals broke onto a later page, the column top they shared is\r
  // gone: the notes stack under them there instead of beside them.\r
  let notesY = totalsBroke ? totalsY + 6 : y;\r
  let notesBroke = false;\r
  const noteRoom = (height) => {\r
    if (notesY + height <= bottom) return;\r
    s.page();\r
    notesBroke = true;\r
    notesY = MARGIN;\r
  };\r
  if (spec.notes && (noteLines.length || spec.notes.label)) {\r
    noteRoom(13 + (noteLines.length ? 11.5 : 0));\r
    s.text(String(spec.notes.label || 'Notes').toUpperCase(), MARGIN, notesY, {\r
      size: 7.5, bold: true, color: MUTED, tracking: 0.7,\r
    });\r
    notesY += 13;\r
    for (const line of noteLines) {\r
      noteRoom(11.5);\r
      s.text(line, MARGIN, notesY, { size: 8.5, color: SUB });\r
      notesY += 11.5;\r
    }\r
  }\r
  blocks.forEach((block, i) => {\r
    if (spec.notes || i > 0) notesY += 6;\r
    noteRoom(13 + (block.lines.length ? 11.5 : 0));\r
    s.text(block.label.toUpperCase(), MARGIN, notesY, {\r
      size: 7.5, bold: true, color: MUTED, tracking: 0.7,\r
    });\r
    notesY += 13;\r
    for (const line of block.lines) {\r
      noteRoom(11.5);\r
      s.text(line, MARGIN, notesY, { size: 8.5, color: SUB });\r
      notesY += 11.5;\r
    }\r
  });\r
  if (spec.payLink) {\r
    notesY += 6;\r
    noteRoom(13 + 11.5);\r
    s.text(String(spec.payOnline || 'Pay online').toUpperCase(), MARGIN, notesY, { size: 7.5, bold: true, color: MUTED, tracking: 0.7 });\r
    notesY += 13;\r
    for (const line of wrapText(spec.payLink, 8.5, false, contentW - totalsW - 24)) {\r
      noteRoom(11.5);\r
      s.text(line, MARGIN, notesY, { size: 8.5, color: brand || '#2b49c4' });\r
      notesY += 11.5;\r
    }\r
  }\r
\r
  // Once the notes ran onto a later page, the totals' end no longer bounds\r
  // anything on the current one.\r
  y = (notesBroke ? notesY : Math.max(notesY, totalsY)) + 10;\r
\r
  const pages = s.finish();\r
\r
  /* Footers, once the page count is known. */\r
  const footY = PAGE_H - MARGIN - 8;\r
  pages.forEach((ops, i) => {\r
    const foot = surface(PAGE_H);\r
    foot.line(MARGIN, footY - 10, PAGE_W - MARGIN, footY - 10, { width: 0.5, color: HAIR });\r
    foot.text([spec.number, spec.biz?.name].filter(Boolean).join(' · '), MARGIN, footY, {\r
      size: 7.5, color: MUTED,\r
    });\r
    if (pages.length > 1) {\r
      // The spec carries the wording in the document's language.\r
      const pageOf = String(spec.pageOf || 'Page {n} of {m}')\r
        .replace('{n}', String(i + 1))\r
        .replace('{m}', String(pages.length));\r
      foot.text(pageOf, PAGE_W - MARGIN, footY, {\r
        size: 7.5, color: MUTED, align: 'right',\r
      });\r
    }\r
    ops.push(...foot.ops());\r
  });\r
\r
  return pages;\r
}\r
\r
/* ---------- Public API ---------- */\r
\r
/** Render a paper spec into PDF bytes. */\r
export async function renderPdf(spec) {\r
  const { w: PAGE_W, h: PAGE_H } = pageSize(spec.paper);\r
  const logo = await loadLogo(spec.logo);\r
  const pages = drawPaper(spec, logo);\r
\r
  // 1 catalog, 2 pages, 3+4 fonts, 5 optional image, then page/content pairs.\r
  const objects = [];\r
  const imageId = logo ? 5 : 0;\r
  const firstPage = logo ? 6 : 5;\r
  const pageIds = pages.map((_, i) => firstPage + i * 2);\r
\r
  objects[0] = '<< /Type /Catalog /Pages 2 0 R >>';\r
  objects[1] = \`<< /Type /Pages /Count \${pages.length} /Kids [\${pageIds.map((id) => \`\${id} 0 R\`).join(' ')}] >>\`;\r
  objects[2] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>';\r
  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>';\r
  if (logo) {\r
    objects[4] = {\r
      dict: \`/Type /XObject /Subtype /Image /Width \${logo.width} /Height \${logo.height}\`\r
        + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode',\r
      stream: logo.bytes,\r
    };\r
  }\r
\r
  const resources = \`<< /Font << /F1 3 0 R /F2 4 0 R >>\${logo ? \` /XObject << /Im1 \${imageId} 0 R >>\` : ''} >>\`;\r
  pages.forEach((ops, i) => {\r
    const pageId = pageIds[i];\r
    objects[pageId - 1] = \`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 \${num(PAGE_W)} \${num(PAGE_H)}] \`\r
      + \`/Resources \${resources} /Contents \${pageId + 1} 0 R >>\`;\r
    objects[pageId] = { dict: '', stream: ops.join('\\n') };\r
  });\r
\r
  return assemble(objects);\r
}\r
\r
/** A safe file name for a document number. */\r
export function pdfFilename(spec) {\r
  const base = String(spec?.filename || spec?.number || 'document')\r
    .replace(/\\.pdf$/i, '')\r
    .replace(/[^A-Za-z0-9._-]+/g, '-')\r
    // Leading dots and dashes are how a name tries to become a path.\r
    .replace(/^[.\\-]+|[.\\-]+$/g, '')\r
    .slice(0, 80);\r
  return \`\${base || 'document'}.pdf\`;\r
}\r
\r
/** Render and save. Returns the file name written. */\r
export async function downloadPdf(spec) {\r
  const bytes = await renderPdf(spec);\r
  const name = pdfFilename(spec);\r
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));\r
  const a = document.createElement('a');\r
  a.href = url;\r
  a.download = name;\r
  a.rel = 'noopener';\r
  document.body.appendChild(a);\r
  a.click();\r
  a.remove();\r
  setTimeout(() => URL.revokeObjectURL(url), 10000);\r
  return name;\r
}\r
`;function c(e){return JSON.stringify(e).replaceAll(`<`,`\\u003c`).replaceAll(`\u2028`,`\\u2028`).replaceAll(`\u2029`,`\\u2029`)}async function l(l,u,d,f,{files:p=[]}={}){let m=l.kind===`invoice`,h=t(l,u),g=i(h),_=`${l.number} · ${d.business?.name||g(m?`invoice`:`estimate`)}`,v=n(l,u,d,{payLink:f}),{docSpec:y}=await r(async()=>{let{docSpec:e}=await import(`./pdf-spec-DjSk9VwG.js`);return{docSpec:e}},__vite__mapDeps([0,1,2]),import.meta.url),b=y(l,u,d,{payLink:f});return`<!doctype html>
<html lang="${e(h||`en`)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${e(_)}</title>
<style>
  * { box-sizing: border-box; }
  /* The UA rule for [hidden] is a bare display: none, which the .btn
     display below would silently beat; the PDF button must stay hidden
     until the writer inlined further down proves it works. */
  [hidden] { display: none !important; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    background: #eceef2;
    color: #17181c;
    -webkit-font-smoothing: antialiased;
  }
  @media (prefers-color-scheme: dark) { body { background: #101114; } }
  .wrap { max-width: 760px; margin: 0 auto; padding: 24px 16px 48px; }
  .bar {
    display: flex; justify-content: space-between; align-items: center;
    gap: 12px; flex-wrap: wrap; margin-bottom: 16px;
  }
  /* #6d7078 clears 4.5:1 on the paper's white but only 4.26:1 on the wash
     behind it, and this line is the page's only heading. .paper-sub's own
     gray holds 5.58:1 there. */
  .bar-note { font-size: 13px; color: #5b5e66; }
  @media (prefers-color-scheme: dark) { .bar-note { color: #9a9da6; } }
  .actions { display: flex; gap: 10px; }
  .btn {
    display: inline-block; padding: 11px 20px; border-radius: 9px;
    font: inherit; font-weight: 650; font-size: 14.5px; cursor: pointer;
    text-decoration: none; border: 1px solid rgba(23,24,28,0.2);
    background: #ffffff; color: #17181c;
  }
  .btn-pay { background: #2b49c4; border-color: #2b49c4; color: #ffffff; }
  /* Files published alongside the page: plain links to files already there,
     because this page fetches nothing to render itself. */
  .files {
    margin-top: 18px; padding: 16px 18px; border-radius: 12px;
    background: #ffffff; border: 1px solid rgba(23,24,28,0.1);
  }
  .files-label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.09em;
    text-transform: uppercase; color: #6d7078; margin-bottom: 10px;
  }
  .file {
    display: flex; justify-content: space-between; gap: 12px;
    padding: 9px 2px; color: #17181c; text-decoration: none;
    border-bottom: 1px solid rgba(23,24,28,0.07); font-size: 14px;
  }
  .file:last-child { border-bottom: 0; }
  .file:hover { color: #2b49c4; }
  .file-size { color: #6d7078; font-variant-numeric: tabular-nums; }
  @media print { .files { display: none; } }
  /* The paper stylesheet below gives the line-item table a horizontal scroll
     rail for narrow phones. A scroll container is monolithic — it cannot be
     split across pages — so without this a client printing a long invoice
     from this page would lose every line past the first sheet. */
  @media print {
    .bar { display: none; }
    body { background: #fff; }
    .paper { border: 0; }
    .paper-table-scroll { overflow: visible; }
    .paper-table tr, .paper-trow { break-inside: avoid; }
  }
${o}
</style>
</head>
<body>
<main class="wrap">
  <div class="bar">
    <span class="bar-note">${e(g(m?`invoice`:`estimate`))} ${e(l.number)}</span>
    <span class="actions">
      <button class="btn" id="pdf" type="button" hidden>${e(g(`downloadPdf`))}</button>
      <button class="btn" onclick="window.print()" type="button">${e(g(`print`))}</button>
      ${f&&m?`<a class="btn btn-pay" href="${e(f)}" rel="noopener">${e(g(`payNow`))}</a>`:``}
    </span>
  </div>
  <div class="paper">${v}</div>
  ${p.length?`<div class="files">
    <div class="files-label">${e(g(`attachments`))}</div>
    ${p.map(t=>`<a class="file" href="./${e(t.href)}" download>${e(t.name)}${t.size?`<span class="file-size">${e(a(t.size))}</span>`:``}</a>`).join(``)}
  </div>`:``}
</main>
<script type="application/json" id="spec">${c(b)}<\/script>
<script type="module">
${s}
// The button is revealed only once the writer is here and working, so a page
// that somehow cannot build a PDF simply offers printing instead.
try {
  const spec = JSON.parse(document.getElementById('spec').textContent);
  const button = document.getElementById('pdf');
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      await downloadPdf(spec);
    } catch (err) {
      console.error(err);
      window.print();
    }
    button.disabled = false;
  });
} catch (err) {
  console.error(err);
}
<\/script>
</body>
</html>`}export{l as sharePageHTML};