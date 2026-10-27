function e(e){return e.replace(/^export\s+(?=(async\s+)?function|const|let|class)/gm,``)}function t(t,{runtime:n=`/**\r
 * Survey runtime: what a respondent is shown and what counts as a valid\r
 * answer. Used in three places that must agree exactly:\r
 *\r
 *   - the respondent page (r/index.html) and the in-app preview, to decide\r
 *     which questions and pages to show and to check answers as people type;\r
 *   - the collector worker (src/worker/collector.js), which re-checks every\r
 *     submitted response against the published survey before storing it.\r
 *\r
 * The worker is deployed as one plain script, so this file has no imports and\r
 * nothing here may touch the DOM. buildWorkerSource() in\r
 * src/data/collector-client.js strips the \`export\` keywords and prepends this\r
 * file to the worker source.\r
 *\r
 * Answer shapes, by question type:\r
 *   single, dropdown   { c: choiceId, t?: otherText }\r
 *   multi              { c: [choiceId, ...], t?: otherText }\r
 *   rating, nps,\r
 *   slider             number\r
 *   matrix             { [rowId]: columnId }  or { [rowId]: [columnId, ...] } when q.multi\r
 *   ranking            [choiceId, ...]  (every choice, best first)\r
 *   text, textarea,\r
 *   datetime           string\r
 *   multitext, contact { [fieldId]: string }\r
 */\r
\r
export const OTHER_ID = '_other';\r
export const NONE_ID = '_none';\r
\r
/** Types that collect an answer. 'statement' is display-only text. */\r
export const ANSWER_TYPES = [\r
  'single',\r
  'multi',\r
  'dropdown',\r
  'rating',\r
  'nps',\r
  'matrix',\r
  'slider',\r
  'ranking',\r
  'text',\r
  'textarea',\r
  'multitext',\r
  'contact',\r
  'datetime',\r
];\r
\r
export const LIMITS = {\r
  text: 1000,\r
  textarea: 10000,\r
  other: 1000,\r
  field: 500,\r
};\r
\r
export const CONTACT_FIELDS = [\r
  ['name', 'Name'],\r
  ['company', 'Company'],\r
  ['address', 'Address'],\r
  ['address2', 'Address 2'],\r
  ['city', 'City/Town'],\r
  ['state', 'State/Province'],\r
  ['zip', 'ZIP/Postal code'],\r
  ['country', 'Country'],\r
  ['email', 'Email address'],\r
  ['phone', 'Phone number'],\r
];\r
\r
const EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r
const PHONE_RE = /^[+()\\-.\\s\\d]{5,32}$/;\r
const DATE_RE = /^\\d{4}-\\d{2}-\\d{2}$/;\r
const TIME_RE = /^([01]\\d|2[0-3]):[0-5]\\d$/;\r
\r
export function isAnswerable(q) {\r
  return !!q && ANSWER_TYPES.includes(q.type);\r
}\r
\r
function own(obj, key) {\r
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);\r
}\r
\r
function choiceIds(q) {\r
  return (q.choices || []).map((c) => c.id);\r
}\r
\r
/** A finite number from a number or a numeric string, else null. */\r
function numeric(raw) {\r
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null;\r
  if (typeof raw === 'string' && /^\\s*-?\\d+(\\.\\d+)?\\s*$/.test(raw)) return Number(raw);\r
  return null;\r
}\r
\r
/** YYYY-MM-DD that names a day that exists (no February 31st). */\r
function realDate(s) {\r
  if (!DATE_RE.test(s || '')) return false;\r
  const [y, m, d] = s.split('-').map(Number);\r
  const t = new Date(Date.UTC(y, m - 1, d));\r
  return t.getUTCFullYear() === y && t.getUTCMonth() === m - 1 && t.getUTCDate() === d;\r
}\r
\r
function clip(v, cap) {\r
  return typeof v === 'string' ? v.slice(0, cap) : '';\r
}\r
\r
/** Highest value a rating question accepts. */\r
export function ratingMax(q) {\r
  const n = Math.round(Number(q.scale));\r
  return n >= 2 && n <= 10 ? n : 5;\r
}\r
\r
export function sliderBounds(q) {\r
  let min = Number.isFinite(Number(q.min)) ? Number(q.min) : 0;\r
  let max = Number.isFinite(Number(q.max)) ? Number(q.max) : 100;\r
  if (max <= min) max = min + 1;\r
  let step = Number(q.step);\r
  if (!(step > 0)) step = 1;\r
  return { min, max, step };\r
}\r
\r
/** The fields a multitext or contact question shows, in order. */\r
export function fieldsOf(q) {\r
  if (q.type === 'contact') {\r
    const conf = q.fields || {};\r
    return CONTACT_FIELDS.filter(([id]) => (own(conf, id) ? conf[id].enabled !== false : true)).map(\r
      ([id, label]) => ({\r
        id,\r
        label: (own(conf, id) && conf[id].label) || label,\r
        required: own(conf, id) ? !!conf[id].required : false,\r
        kind: id === 'email' ? 'email' : id === 'phone' ? 'phone' : 'text',\r
      }),\r
    );\r
  }\r
  return (q.fields || []).map((f) => ({ id: f.id, label: f.label || '', required: false, kind: 'text' }));\r
}\r
\r
/**\r
 * Normalize a raw answer into its stored shape, dropping anything that does\r
 * not belong to the question (unknown choice ids, out-of-range numbers,\r
 * oversized text). Returns undefined for "no answer".\r
 */\r
export function sanitizeAnswer(q, raw) {\r
  if (!isAnswerable(q) || raw == null) return undefined;\r
  switch (q.type) {\r
    case 'single':\r
    case 'dropdown': {\r
      const c = typeof raw === 'object' ? raw.c : raw;\r
      if (typeof c !== 'string') return undefined;\r
      if (c === OTHER_ID && q.other && q.other.enabled) {\r
        const t = clip(raw.t, LIMITS.other).trim();\r
        return t ? { c, t } : { c };\r
      }\r
      return choiceIds(q).includes(c) ? { c } : undefined;\r
    }\r
    case 'multi': {\r
      const list = Array.isArray(raw) ? raw : raw && Array.isArray(raw.c) ? raw.c : null;\r
      if (!list) return undefined;\r
      const allowed = new Set(choiceIds(q));\r
      if (q.other && q.other.enabled) allowed.add(OTHER_ID);\r
      if (q.none && q.none.enabled) allowed.add(NONE_ID);\r
      let picked = [...new Set(list.filter((c) => typeof c === 'string' && allowed.has(c)))];\r
      if (picked.includes(NONE_ID)) picked = [NONE_ID];\r
      if (!picked.length) return undefined;\r
      const out = { c: picked };\r
      if (picked.includes(OTHER_ID)) {\r
        const t = clip(raw.t, LIMITS.other).trim();\r
        if (t) out.t = t;\r
      }\r
      return out;\r
    }\r
    case 'rating': {\r
      const n = numeric(raw);\r
      return Number.isInteger(n) && n >= 1 && n <= ratingMax(q) ? n : undefined;\r
    }\r
    case 'nps': {\r
      const n = numeric(raw);\r
      return Number.isInteger(n) && n >= 0 && n <= 10 ? n : undefined;\r
    }\r
    case 'slider': {\r
      const n = numeric(raw);\r
      const { min, max, step } = sliderBounds(q);\r
      if (n == null || n < min || n > max) return undefined;\r
      // On the step grid (with a little room for floating point).\r
      const k = (n - min) / step;\r
      return Math.abs(k - Math.round(k)) < 1e-6 ? n : undefined;\r
    }\r
    case 'matrix': {\r
      if (typeof raw !== 'object' || Array.isArray(raw)) return undefined;\r
      const cols = new Set((q.columns || []).map((c) => c.id));\r
      const out = {};\r
      for (const row of q.rows || []) {\r
        if (!own(raw, row.id)) continue;\r
        const v = raw[row.id];\r
        if (q.multi) {\r
          const picked = Array.isArray(v) ? [...new Set(v.filter((c) => cols.has(c)))] : [];\r
          if (picked.length) out[row.id] = picked;\r
        } else if (typeof v === 'string' && cols.has(v)) {\r
          out[row.id] = v;\r
        }\r
      }\r
      return Object.keys(out).length ? out : undefined;\r
    }\r
    case 'ranking': {\r
      if (!Array.isArray(raw)) return undefined;\r
      const ids = choiceIds(q);\r
      const order = [...new Set(raw.filter((c) => ids.includes(c)))];\r
      return order.length === ids.length && ids.length > 0 ? order : undefined;\r
    }\r
    case 'text':\r
    case 'textarea': {\r
      const t = clip(raw, q.type === 'text' ? LIMITS.text : LIMITS.textarea);\r
      return t.trim() ? t : undefined;\r
    }\r
    case 'datetime': {\r
      const t = typeof raw === 'string' ? raw.trim() : '';\r
      if (!t) return undefined;\r
      const wantDate = q.date !== false;\r
      const wantTime = !!q.time;\r
      if (wantDate && wantTime) {\r
        const [d, tm] = t.split('T');\r
        return realDate(d) && TIME_RE.test(tm || '') ? \`\${d}T\${tm}\` : undefined;\r
      }\r
      if (wantTime) return TIME_RE.test(t) ? t : undefined;\r
      return realDate(t) ? t : undefined;\r
    }\r
    case 'multitext':\r
    case 'contact': {\r
      if (typeof raw !== 'object' || Array.isArray(raw)) return undefined;\r
      const out = {};\r
      for (const f of fieldsOf(q)) {\r
        const t = clip(raw[f.id], LIMITS.field).trim();\r
        if (t) out[f.id] = t;\r
      }\r
      return Object.keys(out).length ? out : undefined;\r
    }\r
    default:\r
      return undefined;\r
  }\r
}\r
\r
function countLabel(n, one, many) {\r
  return \`\${n} \${n === 1 ? one : many}\`;\r
}\r
\r
/** What an unanswered required question says unless the creator wrote\r
 *  their own message. */\r
export function defaultRequiredMessage(q) {\r
  // A ranking starts out in an order, so say how to answer it.\r
  return q && q.type === 'ranking' ? 'Put the items in order, or choose “Keep this order”.' : 'This question requires an answer.';\r
}\r
\r
/**\r
 * The message to show for an answer, or '' when it is acceptable. \`value\`\r
 * must already be sanitized (undefined = unanswered).\r
 */\r
export function validateAnswer(q, value) {\r
  if (!isAnswerable(q)) return '';\r
  const requiredMsg = (q.requiredMessage || '').trim() || defaultRequiredMessage(q);\r
  if (value === undefined) {\r
    if (q.required) return requiredMsg;\r
    // Contact fields marked required (shown with *) are required even when\r
    // the question as a whole is not.\r
    const field = q.type === 'contact' && fieldsOf(q).find((f) => f.required);\r
    return field ? \`\${field.label} is required.\` : '';\r
  }\r
\r
  switch (q.type) {\r
    case 'single':\r
    case 'dropdown':\r
      if (value.c === OTHER_ID && q.other && q.other.required !== false && !value.t) {\r
        return 'Please specify your answer.';\r
      }\r
      return '';\r
    case 'multi': {\r
      const real = value.c.filter((c) => c !== NONE_ID);\r
      if (value.c.includes(OTHER_ID) && q.other && q.other.required !== false && !value.t) {\r
        return 'Please specify your answer.';\r
      }\r
      if (value.c.includes(NONE_ID)) return '';\r
      const min = Number(q.minSelect) || 0;\r
      const max = Number(q.maxSelect) || 0;\r
      if (min && max && min === max && real.length !== min) {\r
        return \`Select exactly \${countLabel(min, 'option', 'options')}.\`;\r
      }\r
      if (min && real.length < min) return \`Select at least \${countLabel(min, 'option', 'options')}.\`;\r
      if (max && real.length > max) return \`Select no more than \${countLabel(max, 'option', 'options')}.\`;\r
      return '';\r
    }\r
    case 'matrix':\r
      if (q.required && (q.rows || []).some((r) => !own(value, r.id))) {\r
        return (q.requiredMessage || '').trim() || 'Please answer every row.';\r
      }\r
      return '';\r
    case 'text': {\r
      const v = q.validation || {};\r
      const t = value.trim();\r
      if (v.kind === 'email' && !EMAIL_RE.test(t)) return v.message || 'Enter a valid email address.';\r
      if (v.kind === 'number' || v.kind === 'integer') {\r
        // Plain decimal digits only: Number() would also take hex, binary,\r
        // exponents and Infinity, which are stored as typed.\r
        // A decimal comma counts ("3,5": phone keypads in many languages\r
        // offer only that), except where it could be a thousands separator\r
        // ("1,000").\r
        const comma = /^[+-]?\\d*,\\d+$/.test(t) && !/^[+-]?\\d{1,3},\\d{3}$/.test(t);\r
        const n = Number(comma ? t.replace(',', '.') : t);\r
        const bad =\r
          !(comma || /^[+-]?(\\d+(\\.\\d*)?|\\.\\d+)$/.test(t)) ||\r
          !Number.isFinite(n) ||\r
          (v.kind === 'integer' && !Number.isInteger(n)) ||\r
          (v.min !== '' && v.min != null && n < Number(v.min)) ||\r
          (v.max !== '' && v.max != null && n > Number(v.max));\r
        if (bad) {\r
          if (v.message) return v.message;\r
          const kind = v.kind === 'integer' ? 'a whole number' : 'a number';\r
          const hasMin = v.min !== '' && v.min != null;\r
          const hasMax = v.max !== '' && v.max != null;\r
          if (hasMin && hasMax) return \`Enter \${kind} between \${v.min} and \${v.max}.\`;\r
          if (hasMin) return \`Enter \${kind} of at least \${v.min}.\`;\r
          if (hasMax) return \`Enter \${kind} of at most \${v.max}.\`;\r
          return \`Enter \${kind}.\`;\r
        }\r
      }\r
      if (v.kind === 'length') {\r
        const min = Number(v.min) || 0;\r
        const max = Number(v.max) || 0;\r
        if ((min && t.length < min) || (max && t.length > max)) {\r
          if (v.message) return v.message;\r
          if (min && max) return \`Enter between \${min} and \${max} characters.\`;\r
          if (min) return \`Enter at least \${countLabel(min, 'character', 'characters')}.\`;\r
          return \`Enter no more than \${countLabel(max, 'character', 'characters')}.\`;\r
        }\r
      }\r
      return '';\r
    }\r
    case 'textarea': {\r
      const v = q.validation || {};\r
      if (v.kind === 'length') {\r
        const t = value.trim();\r
        const min = Number(v.min) || 0;\r
        const max = Number(v.max) || 0;\r
        if (min && t.length < min) return v.message || \`Enter at least \${countLabel(min, 'character', 'characters')}.\`;\r
        if (max && t.length > max) return v.message || \`Enter no more than \${countLabel(max, 'character', 'characters')}.\`;\r
      }\r
      return '';\r
    }\r
    case 'contact':\r
    case 'multitext': {\r
      const issue = fieldIssue(q, value);\r
      return issue ? issue.message : '';\r
    }\r
    default:\r
      return '';\r
  }\r
}\r
\r
/**\r
 * The first box of a contact or multiple-text answer that fails, as\r
 * { id, message }, or null.\r
 */\r
export function fieldIssue(q, value) {\r
  for (const f of fieldsOf(q)) {\r
    const t = value[f.id];\r
    if (q.type === 'contact') {\r
      if (f.required && !t) return { id: f.id, message: \`\${f.label} is required.\` };\r
      if (t && f.kind === 'email' && !EMAIL_RE.test(t)) return { id: f.id, message: 'Enter a valid email address.' };\r
      if (t && f.kind === 'phone' && !PHONE_RE.test(t)) return { id: f.id, message: 'Enter a valid phone number.' };\r
    } else if (q.required && !t) return { id: f.id, message: 'Please fill in every box.' };\r
  }\r
  return null;\r
}\r
\r
/** True when a display condition holds for the answers given so far. */\r
export function conditionHolds(cond, survey, answers) {\r
  if (!cond || !cond.qid) return true;\r
  const value = answers ? answers[cond.qid] : undefined;\r
  const answered = value !== undefined;\r
  switch (cond.op) {\r
    case 'answered':\r
      return answered;\r
    case 'notAnswered':\r
      return !answered;\r
    case 'is':\r
    case 'isNot': {\r
      let hit = false;\r
      if (value != null && typeof value === 'object' && !Array.isArray(value)) {\r
        hit = Array.isArray(value.c) ? value.c.includes(cond.value) : value.c === cond.value;\r
      } else if (typeof value === 'number') {\r
        hit = String(value) === String(cond.value);\r
      }\r
      return cond.op === 'is' ? hit : answered && !hit;\r
    }\r
    default:\r
      return true;\r
  }\r
}\r
\r
export function isQuestionVisible(q, survey, answers) {\r
  return conditionHolds(q.display, survey, answers);\r
}\r
\r
/**\r
 * Where to go after \`pageIndex\`: another page index, 'end' (thank-you\r
 * screen), or 'disqualify'. Question skip logic on the page wins over page\r
 * logic, earliest question first; only visible, answered single-answer\r
 * questions take part.\r
 */\r
export function nextStep(survey, pageIndex, answers) {\r
  const pages = survey.pages || [];\r
  const page = pages[pageIndex];\r
  const resolve = (target) => {\r
    if (!target || !target.type) return null;\r
    if (target.type === 'end' || target.type === 'disqualify') return target.type;\r
    if (target.type === 'page') {\r
      const idx = pages.findIndex((p) => p.id === target.pageId);\r
      // Only ever jump forward: a backwards jump could loop forever.\r
      if (idx > pageIndex) return idx;\r
    }\r
    return null;\r
  };\r
  if (page) {\r
    for (const q of page.questions || []) {\r
      if (!q.logic || !isQuestionVisible(q, survey, answers)) continue;\r
      const v = answers ? answers[q.id] : undefined;\r
      if (!v || typeof v !== 'object' || Array.isArray(v)) continue;\r
      // Checkbox picks arrive in screen order, which is shuffled when choices\r
      // are randomized: rules apply in the order the choices were written.\r
      const picked = new Set(Array.isArray(v.c) ? v.c : [v.c]);\r
      const order = [...(q.choices || []).map((c) => c.id), OTHER_ID, NONE_ID];\r
      for (const c of order.filter((id) => picked.has(id))) {\r
        if (!own(q.logic, c)) continue;\r
        const to = resolve(q.logic[c]);\r
        if (to != null) return to;\r
      }\r
    }\r
    const to = resolve(page.logic);\r
    if (to != null) return to;\r
  }\r
  return pageIndex + 1 < pages.length ? pageIndex + 1 : 'end';\r
}\r
\r
/** The pages a respondent with these answers walks through, in order, and\r
 *  how the walk ends. */\r
export function walk(survey, answers) {\r
  const pages = survey.pages || [];\r
  const path = [];\r
  if (!pages.length) return { path, outcome: 'end' };\r
  let i = 0;\r
  const seen = new Set();\r
  while (typeof i === 'number' && i < pages.length && !seen.has(i)) {\r
    seen.add(i);\r
    path.push(i);\r
    i = nextStep(survey, i, answers);\r
  }\r
  return { path, outcome: i === 'disqualify' ? 'disqualify' : 'end' };\r
}\r
\r
/**\r
 * Check a whole submission the way the collector does: sanitize every\r
 * answer, drop answers to questions the respondent never saw (skipped pages,\r
 * hidden questions), and report the first problem per question.\r
 */\r
export function validateResponse(survey, rawAnswers) {\r
  const raw = rawAnswers && typeof rawAnswers === 'object' ? rawAnswers : {};\r
  const pages = survey.pages || [];\r
  // Answers are accepted page by page along the path, and only for\r
  // questions visible at that point, so an answer to a skipped or hidden\r
  // question can never steer logic, hide a required question, or be stored.\r
  // Null-prototype maps: a question id is never mistaken for an inherited\r
  // property.\r
  const clean = Object.create(null);\r
  const errors = Object.create(null);\r
  const path = [];\r
  const seen = new Set();\r
  let i = pages.length ? 0 : 'end';\r
  while (typeof i === 'number' && i < pages.length && !seen.has(i)) {\r
    seen.add(i);\r
    path.push(i);\r
    for (const q of pages[i].questions || []) {\r
      if (!isAnswerable(q) || !isQuestionVisible(q, survey, clean)) continue;\r
      const v = own(raw, q.id) ? sanitizeAnswer(q, raw[q.id]) : undefined;\r
      if (v !== undefined) clean[q.id] = v;\r
      const msg = validateAnswer(q, v);\r
      if (msg) errors[q.id] = msg;\r
    }\r
    i = nextStep(survey, i, clean);\r
  }\r
  return {\r
    ok: Object.keys(errors).length === 0,\r
    errors: { ...errors },\r
    answers: { ...clean },\r
    outcome: i === 'disqualify' ? 'disqualify' : 'end',\r
    path,\r
  };\r
}\r
\r
/** Small deterministic PRNG so a respondent keeps the same shuffled order\r
 *  when they go back a page. */\r
export function seededShuffle(items, seed) {\r
  let h = 2166136261;\r
  const s = String(seed);\r
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);\r
  const out = items.slice();\r
  for (let i = out.length - 1; i > 0; i--) {\r
    h = Math.imul(h ^ (h >>> 15), 2246822507);\r
    h = Math.imul(h ^ (h >>> 13), 3266489909);\r
    h ^= h >>> 16;\r
    const j = (h >>> 0) % (i + 1);\r
    [out[i], out[j]] = [out[j], out[i]];\r
  }\r
  return out;\r
}\r
\r
/** Question numbers as respondents see them: answerable questions only,\r
 *  counted across the whole survey. */\r
export function questionNumbers(survey) {\r
  const out = {};\r
  let n = 0;\r
  for (const page of survey.pages || []) {\r
    for (const q of page.questions || []) {\r
      if (isAnswerable(q)) out[q.id] = ++n;\r
    }\r
  }\r
  return out;\r
}\r
`,collector:r=`/**\r
 * Response collector: a Puter serverless worker deployed into the survey\r
 * creator's own account (see src/data/collector-client.js for deployment).\r
 *\r
 * Respondents have no Puter account and cannot reach the creator's storage,\r
 * so this worker stands between them: it serves published surveys and stores\r
 * responses in the creator's KV. It serves no HTML. The respondent page\r
 * (r/index.html on the app's own hosting) calls this JSON API.\r
 *\r
 * At deploy time src/shared/runtime.js is prepended to this file, so\r
 * validateResponse() and friends are in scope here, and every submission is\r
 * checked by exactly the code the respondent page used.\r
 *\r
 * Public API (respondents, no credentials). Requests are CORS "simple": GET,\r
 * or POST with a text/plain JSON body, so browsers send no preflight.\r
 *   GET  /api/c/<collectorId>            survey + collector, or a status\r
 *   POST /api/c/<collectorId>/unlock     { password } for protected links (returns a pass)\r
 *   POST /api/c/<collectorId>/responses  { answers, startedAt, rid?, password?, pass?, meta? }\r
 *\r
 * Admin API (the builder app), with \`Authorization: Bearer <secret>\`. Only\r
 * SHA-256(secret) is baked into the deployed source.\r
 *   GET  /admin/ping\r
 *   POST /admin/publish            { survey }\r
 *   POST /admin/collector          { collector }\r
 *   POST /admin/collector/delete   { id }\r
 *   POST /admin/survey/delete      { sid, collectors: [id] }\r
 *   GET  /admin/responses?sid=&limit=&cursor=   newest first\r
 *   POST /admin/responses/delete   { sid, keys: [key] }\r
 *   GET  /admin/stats\r
 *\r
 * KV layout (all keys start with svw: so they never mix with app data):\r
 *   svw:s:<surveyId>              published survey { survey, publishedAt }\r
 *   svw:c:<collectorId>           collector settings\r
 *   svw:r:<surveyId>:<responseId> one response; ids sort by submit time\r
 *   svw:n:<surveyId>              response count for the survey\r
 *   svw:nc:<collectorId>          response count for the collector\r
 *   svw:x:<collectorId>:<rid>     the response id a submission is stored under (expires)\r
 *\r
 * Each response is its own small key: a submission is one ~1 KB write that\r
 * never rewrites anything shared, and the app pages through them newest\r
 * first, so it only ever reads what it has not cached yet.\r
 */\r
\r
const ADMIN_SECRET_HASH = '__SV_ADMIN_SECRET_HASH__';\r
const WORKER_VERSION = '__SV_WORKER_VERSION__';\r
\r
const P_SURVEY = 'svw:s:';\r
const P_COLLECTOR = 'svw:c:';\r
const P_RESPONSE = 'svw:r:';\r
const P_COUNT = 'svw:n:';\r
const P_CCOUNT = 'svw:nc:';\r
\r
// Byte limits (KV counts UTF-8 bytes, not characters).\r
const MAX_BODY = 256 * 1024;\r
const MAX_SURVEY = 350 * 1024;\r
// Wrong passwords allowed per link per 10-minute window.\r
const MAX_PASSWORD_TRIES = 20;\r
const P_PWFAIL = 'svw:pf:';\r
const P_SUBMITTED = 'svw:x:';\r
const RID_RE = /^[a-z0-9]{8,32}$/i;\r
const ID_RE = /^[a-z0-9]{6,32}$/i;\r
const KEY_RE = /^[a-z0-9]{6,40}$/i;\r
\r
/* ---- Utilities ------------------------------------------------------------ */\r
\r
function kvOf(ctx) {\r
  const owner = (ctx && ctx.me) || (typeof me !== 'undefined' ? me : null);\r
  return owner.puter.kv;\r
}\r
\r
/** puter.kv values may come back parsed or as JSON strings. */\r
function coerce(value) {\r
  if (value == null) return null;\r
  if (typeof value === 'string') {\r
    try {\r
      return JSON.parse(value);\r
    } catch {\r
      return null;\r
    }\r
  }\r
  return value;\r
}\r
\r
function byteLength(text) {\r
  return new TextEncoder().encode(text).length;\r
}\r
\r
async function sha256Hex(text) {\r
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(text)));\r
  let out = '';\r
  for (const b of new Uint8Array(buf)) out += b.toString(16).padStart(2, '0');\r
  return out;\r
}\r
\r
function randomChars(n) {\r
  const bytes = new Uint8Array(n);\r
  crypto.getRandomValues(bytes);\r
  let out = '';\r
  for (const b of bytes) out += (b % 36).toString(36);\r
  return out;\r
}\r
\r
/** Time-sortable response id: 9 base-36 digits of milliseconds (good until\r
 *  the year 5188) plus 6 random characters. */\r
function newResponseId(now) {\r
  return now.toString(36).padStart(9, '0') + randomChars(6);\r
}\r
\r
function json(body, status = 200) {\r
  return new Response(JSON.stringify(body), {\r
    status,\r
    headers: {\r
      'content-type': 'application/json',\r
      // Survey content and answers are personal data behind capability\r
      // links: nothing may be cached along the way.\r
      'cache-control': 'no-store',\r
      'x-content-type-options': 'nosniff',\r
    },\r
  });\r
}\r
\r
function fail(status, error, extra = {}) {\r
  return json({ error, ...extra }, status);\r
}\r
\r
// What readJson returns for a body over the route's limit.\r
const TOO_LARGE = Object.freeze({ tooLarge: true });\r
\r
/** The request's JSON object, null if it is not one, or TOO_LARGE. */\r
async function readJson(request, max = MAX_BODY) {\r
  try {\r
    // Refuse a body declared too large before reading it into memory; the\r
    // check below still covers bodies that do not declare their length.\r
    if (Number(request.headers.get('content-length')) > max) return TOO_LARGE;\r
    const text = await request.text();\r
    if (!text) return null;\r
    if (byteLength(text) > max) return TOO_LARGE;\r
    const body = JSON.parse(text);\r
    return body && typeof body === 'object' && !Array.isArray(body) ? body : null;\r
  } catch {\r
    return null;\r
  }\r
}\r
\r
async function isAdmin(request) {\r
  const auth = request.headers.get('authorization') || '';\r
  const m = /^Bearer\\s+([a-f0-9]{32,128})$/i.exec(auth.trim());\r
  if (!m) return false;\r
  return (await sha256Hex(m[1])) === ADMIN_SECRET_HASH;\r
}\r
\r
function admin(handler) {\r
  return async (ctx) => {\r
    if (!(await isAdmin(ctx.request))) return fail(401, 'unauthorized');\r
    try {\r
      return await handler(ctx);\r
    } catch (err) {\r
      return fail(500, 'server_error');\r
    }\r
  };\r
}\r
\r
function guarded(handler) {\r
  return async (ctx) => {\r
    try {\r
      return await handler(ctx);\r
    } catch (err) {\r
      return fail(500, 'server_error');\r
    }\r
  };\r
}\r
\r
/** Every entry under a prefix. Uses cursor paging when the runtime offers\r
 *  it; an older runtime that only returns arrays gets a single call. */\r
async function listAll(kv, prefix, values) {\r
  const out = [];\r
  let cursor;\r
  for (let guard = 0; guard < 1000; guard++) {\r
    const page = await kv.list({ pattern: \`\${prefix}*\`, returnValues: values, limit: 1000, cursor });\r
    if (Array.isArray(page)) return page;\r
    out.push(...(page.items || []));\r
    cursor = page.cursor;\r
    if (!cursor) break;\r
  }\r
  return out;\r
}\r
\r
/* ---- Survey and collector state ----------------------------------------- */\r
\r
async function loadCollector(kv, cid) {\r
  if (!ID_RE.test(cid || '')) return null;\r
  const c = coerce(await kv.get(P_COLLECTOR + cid));\r
  return c && c.sid ? c : null;\r
}\r
\r
async function loadSurvey(kv, sid) {\r
  const rec = coerce(await kv.get(P_SURVEY + sid));\r
  return rec && rec.survey ? rec : null;\r
}\r
\r
/** Why a collector cannot take responses right now, or null if it can. */\r
async function blockedReason(kv, collector) {\r
  if (collector.status !== 'open') return 'closed';\r
  if (collector.closeAt && Date.now() >= Number(collector.closeAt)) return 'closed';\r
  const max = Number(collector.maxResponses) || 0;\r
  if (max > 0) {\r
    const n = Number(coerce(await kv.get(P_CCOUNT + collector.id))) || 0;\r
    if (n >= max) return 'full';\r
  }\r
  return null;\r
}\r
\r
/** Check a password with a per-link limit on wrong guesses, so a short\r
 *  password cannot be found by scripting the unlock route. Returns null when\r
 *  it matches, or the error response to send. */\r
async function checkPassword(kv, collector, password) {\r
  if (!collector.passwordHash) return null;\r
  const key = \`\${P_PWFAIL}\${collector.id}:\${Math.floor(Date.now() / 600000)}\`;\r
  // Take the attempt before checking, atomically: reading the count first\r
  // would let any number of guesses sent at once through.\r
  const n = await kv.incr(key);\r
  if (n === 1) await kv.expire(key, 900).catch(() => {});\r
  if (n > MAX_PASSWORD_TRIES) return fail(429, 'too_many_attempts');\r
  if (await passwordOk(collector, password)) {\r
    // The right password does not use up the link's allowance.\r
    await kv.decr(key).catch(() => {});\r
    return null;\r
  }\r
  return fail(403, 'wrong_password');\r
}\r
\r
/*\r
 * Unlock passes. A respondent who unlocked a protected link gets a signed,\r
 * time-limited pass to submit with, so a run of wrong guesses by someone\r
 * else (which locks the link for 10 minutes) cannot stop them sending\r
 * their answers. Signed with a key only this worker's source holds, bound\r
 * to the link and its current password (changing it voids passes).\r
 */\r
const PASS_MS = 24 * 3600 * 1000;\r
\r
async function passSignature(collector, exp) {\r
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(\`pass:\${ADMIN_SECRET_HASH}\`), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);\r
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(\`\${collector.id}|\${collector.passwordHash}|\${exp}\`));\r
  let out = '';\r
  for (const b of new Uint8Array(sig)) out += b.toString(16).padStart(2, '0');\r
  return out;\r
}\r
\r
async function issuePass(collector) {\r
  const exp = Date.now() + PASS_MS;\r
  return \`\${exp}.\${await passSignature(collector, exp)}\`;\r
}\r
\r
async function passOk(collector, pass) {\r
  const m = /^(\\d{13,16})\\.([0-9a-f]{64})$/.exec(typeof pass === 'string' ? pass : '');\r
  if (!m || Number(m[1]) < Date.now() || !collector.passwordHash) return false;\r
  return (await passSignature(collector, Number(m[1]))) === m[2];\r
}\r
\r
async function passwordOk(collector, password) {\r
  if (!collector.passwordHash) return true;\r
  if (typeof password !== 'string' || !password) return false;\r
  return (await sha256Hex(\`\${collector.salt}:\${password}\`)) === collector.passwordHash;\r
}\r
\r
/** The collector settings a respondent's page needs, and nothing more. */\r
function publicCollector(c) {\r
  return {\r
    id: c.id,\r
    allowMultiple: c.allowMultiple !== false,\r
    thankYou: c.thankYou && (c.thankYou.title || c.thankYou.message || c.thankYou.redirect) ? c.thankYou : null,\r
  };\r
}\r
\r
function brief(survey) {\r
  return { title: survey.title, theme: survey.theme, closedMessage: survey.options && survey.options.closedMessage };\r
}\r
\r
/* ---- Public API ------------------------------------------------------------ */\r
\r
async function openCollector(ctx) {\r
  const kv = kvOf(ctx);\r
  const collector = await loadCollector(kv, ctx.params.cid);\r
  if (!collector) return { error: fail(404, 'not_found') };\r
  const rec = await loadSurvey(kv, collector.sid);\r
  if (!rec) return { error: fail(404, 'not_found') };\r
  const reason = await blockedReason(kv, collector);\r
  // The link with it: a resend of a response stored before the link\r
  // filled up or closed is still acknowledged (see the responses route).\r
  if (reason) return { error: fail(410, reason, brief(rec.survey)), kv, collector };\r
  return { kv, collector, survey: rec.survey };\r
}\r
\r
/** The response a submission id (rid) was stored under, if it was. */\r
async function storedFor(kv, collector, claim) {\r
  const prior = coerce(await kv.get(claim));\r
  const id = prior && typeof prior.id === 'string' && KEY_RE.test(prior.id) ? prior.id : null;\r
  const rec = id ? coerce(await kv.get(\`\${P_RESPONSE}\${collector.sid}:\${id}\`)) : null;\r
  return { id, rec };\r
}\r
\r
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\r
\r
router.get('/api/c/:cid', guarded(async (ctx) => {\r
  const r = await openCollector(ctx);\r
  if (r.error) return r.error;\r
  if (r.collector.passwordHash) return json({ locked: true, ...brief(r.survey) });\r
  return json({ survey: r.survey, collector: publicCollector(r.collector) });\r
}));\r
\r
router.post('/api/c/:cid/unlock', guarded(async (ctx) => {\r
  const r = await openCollector(ctx);\r
  if (r.error) return r.error;\r
  const body = (await readJson(ctx.request)) || {};\r
  const denied = await checkPassword(r.kv, r.collector, body.password);\r
  if (denied) return denied;\r
  return json({ survey: r.survey, collector: publicCollector(r.collector), pass: await issuePass(r.collector) });\r
}));\r
\r
router.post('/api/c/:cid/responses', guarded(async (ctx) => {\r
  const r = await openCollector(ctx);\r
  if (r.error && !r.collector) return r.error;\r
  const body = await readJson(ctx.request);\r
  if (r.error) {\r
    // Full or closed since: a resend of a response already stored (its\r
    // reply lost) is acknowledged rather than refused.\r
    const rid = body && body !== TOO_LARGE ? body.rid : '';\r
    if (RID_RE.test(rid || '')) {\r
      const { id, rec } = await storedFor(r.kv, r.collector, \`\${P_SUBMITTED}\${r.collector.id}:\${rid}\`);\r
      if (rec) return json({ ok: true, id, outcome: rec.outcome === 'disqualified' ? 'disqualified' : 'complete' });\r
    }\r
    return r.error;\r
  }\r
  if (body === TOO_LARGE) return fail(413, 'too_large');\r
  if (!body) return fail(400, 'bad_request');\r
  // Honeypot: a field people never see, which form-filling bots do fill.\r
  if (body.hp) return json({ ok: true, id: null });\r
  // A pass from unlocking stands in for the password, past any lockout.\r
  if (!(await passOk(r.collector, body.pass))) {\r
    const denied = await checkPassword(r.kv, r.collector, body.password);\r
    if (denied) return denied;\r
  }\r
\r
  const check = validateResponse(r.survey, body.answers);\r
  if (!check.ok) return fail(422, 'invalid', { errors: check.errors });\r
\r
  const { kv, collector } = r;\r
  const outcome = check.outcome === 'disqualify' ? 'disqualified' : 'complete';\r
  // The page sends one id per visit and the response id chosen for it is\r
  // kept, so a resend (after a timeout, or a reply lost on the way back) is\r
  // acknowledged if that response was stored, and otherwise stores it under\r
  // the same id: never twice, and never lost to an attempt that failed.\r
  const claim = RID_RE.test(body.rid || '') ? \`\${P_SUBMITTED}\${collector.id}:\${body.rid}\` : '';\r
  const now = Date.now();\r
  let id = null;\r
  if (claim) {\r
    let { id: known, rec } = await storedFor(kv, collector, claim);\r
    // Copies sent at the same moment (Submit pressed again while the first\r
    // is still on its way): only the first to count itself here picks the\r
    // response id; the others wait for it, then answer as a resend.\r
    if (!known) {\r
      const lock = \`\${claim}:n\`;\r
      const first = (await kv.incr(lock)) === 1;\r
      await kv.expire(lock, 86400).catch(() => {});\r
      for (let i = 0; !first && !rec && i < 20; i++) {\r
        await pause(250);\r
        ({ id: known, rec } = await storedFor(kv, collector, claim));\r
      }\r
    }\r
    if (rec) return json({ ok: true, id: known, outcome });\r
    if (known) id = known;\r
    else {\r
      id = newResponseId(now);\r
      await kv.set(claim, { id });\r
      await kv.expire(claim, 86400).catch(() => {});\r
    }\r
  }\r
  id ||= newResponseId(now);\r
  const max = Number(collector.maxResponses) || 0;\r
  // With a limit, reserve a slot before writing so two respondents racing\r
  // for the last place cannot both get in, and give it back if this one is\r
  // over. Without one, the response is stored first and the counter (a\r
  // single hot key under a burst) is best effort.\r
  if (max > 0) {\r
    const n = await kv.incr(P_CCOUNT + collector.id);\r
    if (n > max) {\r
      await kv.decr(P_CCOUNT + collector.id);\r
      return fail(410, 'full', brief(r.survey));\r
    }\r
  }\r
\r
  const started = Number(body.startedAt);\r
  const startedAt = Number.isFinite(started) && started <= now && now - started < 30 * 86400000 ? started : now;\r
  const meta = body.meta && typeof body.meta === 'object' ? body.meta : {};\r
  const record = {\r
    id,\r
    cid: collector.id,\r
    at: now,\r
    st: startedAt,\r
    outcome,\r
    answers: check.answers,\r
    meta: {\r
      device: ['desktop', 'tablet', 'mobile'].includes(meta.device) ? meta.device : 'unknown',\r
      lang: typeof meta.lang === 'string' ? meta.lang.slice(0, 20) : '',\r
    },\r
  };\r
  try {\r
    await kv.set(\`\${P_RESPONSE}\${collector.sid}:\${id}\`, record);\r
  } catch (err) {\r
    if (max > 0) await kv.decr(P_CCOUNT + collector.id).catch(() => {});\r
    if (/too.?large|value_too_large/i.test(String(err && (err.code || err.message)))) return fail(413, 'too_large');\r
    throw err;\r
  }\r
  if (!max) await kv.incr(P_CCOUNT + collector.id).catch(() => {});\r
  await kv.incr(P_COUNT + collector.sid).catch(() => {});\r
  return json({ ok: true, id, outcome });\r
}));\r
\r
/* ---- Admin API ----------------------------------------------------------- */\r
\r
router.get('/admin/ping', admin(async () => {\r
  const runtime = typeof __PUTER_PREAMBLE_VERSION__ === 'string' ? __PUTER_PREAMBLE_VERSION__ : null;\r
  return json({ ok: true, version: WORKER_VERSION, runtime });\r
}));\r
\r
router.post('/admin/publish', admin(async (ctx) => {\r
  // The survey limit applies to the stored record, checked below; the body\r
  // gets room for the JSON around it.\r
  const body = await readJson(ctx.request, MAX_SURVEY + 64 * 1024);\r
  if (body === TOO_LARGE) return fail(413, 'too_large');\r
  const survey = body && body.survey;\r
  if (!survey || !ID_RE.test(survey.id || '') || !Array.isArray(survey.pages)) return fail(400, 'bad_request');\r
  const record = { survey, publishedAt: Date.now() };\r
  if (byteLength(JSON.stringify(record)) > MAX_SURVEY) return fail(413, 'too_large');\r
  await kvOf(ctx).set(P_SURVEY + survey.id, record);\r
  return json({ ok: true, publishedAt: record.publishedAt });\r
}));\r
\r
router.post('/admin/collector', admin(async (ctx) => {\r
  const body = await readJson(ctx.request);\r
  const c = body && body.collector;\r
  if (!c || !ID_RE.test(c.id || '') || !ID_RE.test(c.sid || '')) return fail(400, 'bad_request');\r
  const kv = kvOf(ctx);\r
  const prev = coerce(await kv.get(P_COLLECTOR + c.id)) || {};\r
  const next = {\r
    id: c.id,\r
    sid: c.sid,\r
    status: c.status === 'open' ? 'open' : 'closed',\r
    closeAt: Number(c.closeAt) > 0 ? Number(c.closeAt) : null,\r
    maxResponses: Number(c.maxResponses) > 0 ? Math.floor(Number(c.maxResponses)) : 0,\r
    allowMultiple: c.allowMultiple !== false,\r
    thankYou: c.thankYou && typeof c.thankYou === 'object'\r
      ? {\r
          title: String(c.thankYou.title || '').slice(0, 300),\r
          message: String(c.thankYou.message || '').slice(0, 3000),\r
          redirect: /^https?:\\/\\//i.test(c.thankYou.redirect || '') ? String(c.thankYou.redirect).slice(0, 2000) : '',\r
        }\r
      : null,\r
    passwordHash: prev.passwordHash || '',\r
    salt: prev.salt || '',\r
  };\r
  // \`password\` absent keeps the current one; '' removes it.\r
  if (typeof c.password === 'string') {\r
    if (c.password) {\r
      next.salt = randomChars(16);\r
      next.passwordHash = await sha256Hex(\`\${next.salt}:\${c.password}\`);\r
    } else {\r
      next.salt = '';\r
      next.passwordHash = '';\r
    }\r
  }\r
  await kv.set(P_COLLECTOR + c.id, next);\r
  return json({ ok: true });\r
}));\r
\r
router.post('/admin/collector/delete', admin(async (ctx) => {\r
  const body = await readJson(ctx.request);\r
  if (!body || !ID_RE.test(body.id || '')) return fail(400, 'bad_request');\r
  await kvOf(ctx).del(P_COLLECTOR + body.id);\r
  await kvOf(ctx).del(P_CCOUNT + body.id);\r
  return json({ ok: true });\r
}));\r
\r
router.post('/admin/survey/delete', admin(async (ctx) => {\r
  const body = await readJson(ctx.request);\r
  if (!body || !ID_RE.test(body.sid || '')) return fail(400, 'bad_request');\r
  const kv = kvOf(ctx);\r
  const keys = await listAll(kv, \`\${P_RESPONSE}\${body.sid}:\`, false);\r
  // In batches: one by one, a survey with thousands of responses outlasts\r
  // the app's request timeout.\r
  for (let i = 0; i < keys.length; i += 25) {\r
    await Promise.all(keys.slice(i, i + 25).map((key) => kv.del(typeof key === 'string' ? key : key.key)));\r
  }\r
  for (const cid of Array.isArray(body.collectors) ? body.collectors : []) {\r
    if (!ID_RE.test(cid)) continue;\r
    await kv.del(P_COLLECTOR + cid);\r
    await kv.del(P_CCOUNT + cid);\r
  }\r
  await kv.del(P_SURVEY + body.sid);\r
  await kv.del(P_COUNT + body.sid);\r
  return json({ ok: true, deleted: keys.length });\r
}));\r
\r
router.get('/admin/responses', admin(async (ctx) => {\r
  const url = new URL(ctx.request.url);\r
  const sid = url.searchParams.get('sid') || '';\r
  if (!ID_RE.test(sid)) return fail(400, 'bad_request');\r
  const limit = Math.min(1000, Math.max(1, Number(url.searchParams.get('limit')) || 500));\r
  const cursor = url.searchParams.get('cursor') || undefined;\r
  const prefix = \`\${P_RESPONSE}\${sid}:\`;\r
  const page = await kvOf(ctx).list({ pattern: \`\${prefix}*\`, returnValues: true, reverse: true, limit, cursor });\r
  const items = (Array.isArray(page) ? page.slice().reverse() : page.items || []).map((e) => ({\r
    key: e.key.slice(prefix.length),\r
    value: coerce(e.value),\r
  }));\r
  return json({ items, cursor: Array.isArray(page) ? null : page.cursor || null });\r
}));\r
\r
router.post('/admin/responses/delete', admin(async (ctx) => {\r
  const body = await readJson(ctx.request);\r
  if (!body || !ID_RE.test(body.sid || '') || !Array.isArray(body.keys)) return fail(400, 'bad_request');\r
  const kv = kvOf(ctx);\r
  let deleted = 0;\r
  for (const key of body.keys.slice(0, 1000)) {\r
    if (!KEY_RE.test(key)) continue;\r
    const full = \`\${P_RESPONSE}\${body.sid}:\${key}\`;\r
    const rec = coerce(await kv.get(full));\r
    if (!rec) continue;\r
    await kv.del(full);\r
    deleted++;\r
    // A deleted link's counter is gone; decrementing would recreate it at -1.\r
    if (rec.cid && ID_RE.test(rec.cid) && (await kv.get(P_COLLECTOR + rec.cid))) await kv.decr(P_CCOUNT + rec.cid).catch(() => {});\r
  }\r
  if (deleted) await kv.decr(P_COUNT + body.sid, deleted).catch(() => {});\r
  return json({ ok: true, deleted });\r
}));\r
\r
router.get('/admin/stats', admin(async (ctx) => {\r
  const kv = kvOf(ctx);\r
  // One survey's count (the results screen polls it every minute): one\r
  // read, not a listing of every survey's and link's counter.\r
  const sid = new URL(ctx.request.url).searchParams.get('sid');\r
  if (sid && ID_RE.test(sid)) return json({ surveys: { [sid]: Number(coerce(await kv.get(P_COUNT + sid))) || 0 }, collectors: {} });\r
  const surveys = {};\r
  const collectors = {};\r
  for (const e of await listAll(kv, P_COUNT, true)) surveys[e.key.slice(P_COUNT.length)] = Number(coerce(e.value)) || 0;\r
  for (const e of await listAll(kv, P_CCOUNT, true)) collectors[e.key.slice(P_CCOUNT.length)] = Number(coerce(e.value)) || 0;\r
  return json({ surveys, collectors });\r
}));\r
\r
/* ---- Fallbacks: JSON for anything else ----------------------------------- */\r
\r
router.get('/*path', async () => fail(404, 'not_found'));\r
router.post('/*path', async () => fail(404, 'not_found'));\r
`}={}){return`${e(n)}\n\n${r}`.replace(`__SV_ADMIN_SECRET_HASH__`,t).replace(`__SV_WORKER_VERSION__`,`5`)}export{t as buildWorkerSource};