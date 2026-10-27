import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { discoverApps, parseAppNames, renderHub, validateSiteRoot } from '../build-pages.mjs';

test('discovery includes runnable app folders and email gate but excludes meetings and incomplete assets', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'pages-build-discovery-'));
  try {
    for (const app of ['notes', 'email', 'meetings', 'assets', 'missing-index']) {
      const folder = path.join(root, app);
      await mkdir(folder);
      await writeFile(path.join(folder, 'package.json'), '{}');
      if (app !== 'missing-index') await writeFile(path.join(folder, 'index.html'), '<main></main>');
    }
    await mkdir(path.join(root, 'assets', 'src'));
    assert.deepEqual(await discoverApps(root), ['email', 'notes']);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('app selection defaults to discovered apps and rejects unknown or unsafe names', () => {
  assert.deepEqual(parseAppNames([], ['notes', 'email']), ['notes', 'email']);
  assert.deepEqual(parseAppNames(['email', 'notes'], ['notes', 'email']), ['email', 'notes']);
  assert.throws(() => parseAppNames(['../notes'], ['notes']), /Invalid app/);
  assert.throws(() => parseAppNames(['unknown'], ['notes']), /Unknown app/);
});

test('site root validation only permits the repository _site output directory', () => {
  const repoRoot = path.resolve('repo');
  assert.equal(validateSiteRoot(repoRoot, path.join(repoRoot, '_site')), path.join(repoRoot, '_site'));
  assert.throws(() => validateSiteRoot(repoRoot, path.join(repoRoot, 'src')), /Refusing/);
  assert.throws(() => validateSiteRoot(repoRoot, path.join(repoRoot, '..', '_site')), /Refusing/);
});

test('hub has escaped labels, relative links, explicit limits, and no remote resources', () => {
  const html = renderHub([{ name: 'email' }, { name: 'notes', label: 'Notes <script>' }]);
  assert.match(html, /apps\/email\//);
  assert.match(html, /Email is disabled in offline mode/);
  assert.match(html, /apps\/notes\//);
  assert.match(html, /Notes &lt;script&gt;/);
  assert.match(html, /in memory and are lost when you reload or close the tab/i);
  assert.match(html, /GitHub Pages loads these app files from GitHub/i);
  assert.match(html, /no launcher proxy/i);
  assert.match(html, /does not provide OS-level network isolation/i);
  assert.doesNotMatch(html, /<script\b/i);
  const remoteLinks = [...html.matchAll(/href="(https?:\/\/[^\"]+)"/gi)].map(match => match[1]);
  assert.deepEqual(remoteLinks, ['https://github.com/TimTini/everything-offline']);
  assert.doesNotMatch(html, /(?:src|href)="\/apps\//i);
});
