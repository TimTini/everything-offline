import { readdir, lstat, mkdir, realpath, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { offlineCsp, offlinePlugin } from './offline-plugin.mjs';

const repoRoot = path.resolve(import.meta.dirname, '..');
const appsRoot = path.join(repoRoot, 'src');
const siteRoot = path.join(repoRoot, '_site');
const repoUrl = 'https://github.com/TimTini/everything-offline';

function isAppName(name) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) && name !== 'meetings';
}

export async function discoverApps(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const apps = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || !isAppName(entry.name)) continue;
    const appRoot = path.join(root, entry.name);
    try {
      await Promise.all([
        stat(path.join(appRoot, 'index.html')),
        stat(path.join(appRoot, 'package.json')),
      ]);
      if (entry.name === 'assets') await stat(path.join(appRoot, 'src', 'main.js'));
      apps.push(entry.name);
    } catch {
      // A folder without the normal Vite app entry files is not a runnable app.
    }
  }
  return apps.sort((a, b) => a.localeCompare(b));
}

export function parseAppNames(args, discovered) {
  const names = args.length ? args : discovered;
  for (const name of names) {
    if (!isAppName(name)) throw new Error(`Invalid app: ${name}`);
    if (!discovered.includes(name)) throw new Error(`Unknown app: ${name}`);
  }
  if (new Set(names).size !== names.length) throw new Error('Duplicate app selection');
  return [...names];
}

export function validateSiteRoot(root, output) {
  const expected = path.resolve(root, '_site');
  const actual = path.resolve(output);
  const equal = process.platform === 'win32'
    ? expected.toLowerCase() === actual.toLowerCase()
    : expected === actual;
  if (!equal) throw new Error(`Refusing to write outside the validated _site directory: ${actual}`);
  return expected;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function displayName(name) {
  return name.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join(' ');
}

export function renderHub(apps) {
  const cards = apps.map(item => {
    const app = typeof item === 'string' ? { name: item } : item;
    if (!isAppName(app.name)) throw new Error(`Invalid app for hub: ${app.name}`);
    const label = escapeHtml(app.label ?? displayName(app.name));
    const status = app.name === 'email'
      ? '<span class="status">Email is disabled in offline mode</span>'
      : '<span class="status">Runs in this browser tab</span>';
    return `<li><a href="apps/${encodeURIComponent(app.name)}/"><strong>${label}</strong><span class="arrow" aria-hidden="true">→</span></a>${status}</li>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="${escapeHtml(offlineCsp)}">
  <meta name="referrer" content="no-referrer">
  <title>Everything Offline</title>
  <style>
    :root { color-scheme: light dark; font: 16px/1.5 system-ui, sans-serif; }
    body { margin: 0; background: #10151c; color: #edf2f7; }
    main { width: min(100% - 2rem, 68rem); margin: 0 auto; padding: 3rem 0 4rem; }
    h1 { margin: 0 0 .5rem; font-size: clamp(2rem, 6vw, 3.5rem); letter-spacing: -.04em; }
    .intro { max-width: 48rem; color: #c1ccd9; }
    .warning { margin: 1.5rem 0; padding: 1rem 1.25rem; border: 1px solid #d99e32; border-left-width: 5px; border-radius: .6rem; background: #302613; color: #fff0c2; }
    .warning p { margin: .3rem 0; }
    h2 { margin-top: 2.5rem; font-size: 1.2rem; }
    ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr)); gap: .8rem; padding: 0; list-style: none; }
    li { min-width: 0; padding: 1rem; border: 1px solid #354251; border-radius: .65rem; background: #18212c; }
    li a { display: flex; justify-content: space-between; gap: 1rem; color: #edf2f7; text-decoration: none; }
    li a:hover, li a:focus-visible { color: #95c8ff; text-decoration: underline; }
    .status { display: block; margin-top: .4rem; color: #9cabbc; font-size: .88rem; }
    .arrow { color: #8fbfff; }
    footer { margin-top: 3rem; color: #aeb9c6; font-size: .9rem; }
    a { color: #9dccff; }
  </style>
</head>
<body>
  <main>
    <h1>Everything Offline</h1>
    <p class="intro">A collection of browser apps built from the Everything Project sources for this static GitHub Pages demo.</p>
    <aside class="warning" aria-label="Offline demo limitations">
      <strong>Cloud services are disabled.</strong>
      <p>Files and settings in an app session are in memory and are lost when you reload or close the tab. Export anything you need to keep.</p>
      <p>GitHub Pages loads these app files from GitHub. This page has no launcher proxy and does not provide OS-level network isolation or a zero-outbound guarantee. Use the local offline launcher for its dedicated browser and deny-all proxy.</p>
    </aside>
    <h2>Applications</h2>
    <ul>
${cards}
    </ul>
    <footer>Source: <a href="${repoUrl}" rel="noreferrer">everything-offline on GitHub</a>. Pages delivery requires an Internet connection to load the site.</footer>
  </main>
</body>
</html>
`;
}

function assertNoSymlink(target, description) {
  return lstat(target).then(info => {
    if (info.isSymbolicLink()) throw new Error(`Refusing to use a symbolic link for ${description}`);
  }).catch(error => {
    if (error.code !== 'ENOENT') throw error;
  });
}

async function prepareSiteRoot(output, clean) {
  validateSiteRoot(repoRoot, output);
  await assertNoSymlink(repoRoot, 'repository root');
  await assertNoSymlink(output, 'site output');
  if (clean) await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await assertNoSymlink(path.join(output, 'apps'), 'apps output');
  await mkdir(path.join(output, 'apps'), { recursive: true });
}

async function appOutputStats(directory) {
  let files = 0;
  let bytes = 0;
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(full);
      else if (entry.isFile()) {
        files++;
        bytes += (await stat(full)).size;
      }
    }
  }
  await visit(directory);
  return { files, bytes };
}

function sanitizedError(error) {
  return String(error?.message ?? error)
    .replaceAll(repoRoot, '<repo>')
    .replace(/[A-Za-z]:\\[^\s:]+/g, '<path>')
    .replace(/(?:\\\\|\/\/)[^\s:]+(?:[\\/][^\s:]+)*/g, '<path>');
}

async function buildApp(name, output) {
  const appPath = path.join(appsRoot, name);
  const root = await realpath(appPath);
  const src = await realpath(appsRoot);
  if (!root.startsWith(`${src}${path.sep}`)) throw new Error(`App path escapes src: ${name}`);
  const outDir = path.join(output, 'apps', name);
  await assertNoSymlink(outDir, `${name} output`);
  const viteEntry = path.join(root, 'node_modules', 'vite', 'dist', 'node', 'index.js');
  const vite = await import(pathToFileURL(viteEntry).href);
  const previousCwd = process.cwd();
  try {
    process.chdir(root);
    await vite.build({
      root,
      plugins: [offlinePlugin(name)],
      base: './',
      build: { outDir, emptyOutDir: true },
    });
  } finally {
    process.chdir(previousCwd);
  }
  return appOutputStats(outDir);
}

async function builtApps(output) {
  const apps = [];
  const root = path.join(output, 'apps');
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || !isAppName(entry.name)) continue;
    try {
      await stat(path.join(root, entry.name, 'index.html'));
      apps.push(entry.name);
    } catch { /* Incomplete folders are not linked from the hub. */ }
  }
  return apps.sort((a, b) => a.localeCompare(b));
}

export async function buildPages(args = process.argv.slice(2)) {
  const apps = parseAppNames(args, await discoverApps(appsRoot));
  const output = validateSiteRoot(repoRoot, siteRoot);
  await prepareSiteRoot(output, args.length === 0);
  const successes = [];
  const failures = [];
  for (const app of apps) {
    process.stdout.write(`Building ${app}...\n`);
    try {
      const stats = await buildApp(app, output);
      successes.push({ app, ...stats });
      process.stdout.write(`  ${stats.files} files, ${stats.bytes} bytes\n`);
    } catch (error) {
      const message = sanitizedError(error);
      failures.push({ app, error: message });
      process.stderr.write(`  FAILED: ${message}\n`);
    }
  }
  const linkedApps = await builtApps(output);
  await writeFile(path.join(output, 'index.html'), renderHub(linkedApps), 'utf8');
  await writeFile(path.join(output, '.nojekyll'), '');
  const summary = {
    selectedApps: apps,
    successes,
    failures,
    totals: {
      successfulApps: successes.length,
      failedApps: failures.length,
      files: successes.reduce((total, app) => total + app.files, 0),
      bytes: successes.reduce((total, app) => total + app.bytes, 0),
    },
  };
  await writeFile(path.join(output, 'build-summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  process.stdout.write(`Pages output: ${output}\n`);
  process.stdout.write(`Build summary: ${successes.length} succeeded, ${failures.length} failed; ${summary.totals.bytes} bytes\n`);
  if (failures.length) throw new Error(`${failures.length} app build(s) failed; see _site/build-summary.json`);
  return summary;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    await buildPages();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
