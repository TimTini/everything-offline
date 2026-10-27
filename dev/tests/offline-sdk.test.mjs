import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { installOfflineSDK } from '../offline-sdk.mjs';

function createApp(name = 'sample', notices = [], deferNotice = false) {
  const body = { appendChild: node => notices.push(node) };
  const document = {
    body: deferNotice ? null : body,
    title: '',
    getElementById: () => null,
    createElement: tag => ({ tag, style: {} }),
    addEventListener: (event, callback) => { document.ready = callback; },
  };
  const context = vm.createContext({
    window: {},
    document,
    Blob,
    URL: { createObjectURL: () => 'blob:offline-test', revokeObjectURL() {} },
    structuredClone,
  });
  vm.runInContext(`(${installOfflineSDK.toString()})(${JSON.stringify(name)})`, context);
  return {
    puter: context.window.puter,
    document,
    finishDom: () => { document.body = body; document.ready?.(); },
  };
}

test('installs an isolated, signed-in local identity and sign-out resets it', async () => {
  const notices = [];
  const { puter, document } = createApp('notes', notices);
  assert.equal(puter.env, 'web');
  assert.equal(puter.appID, 'offline-notes');
  assert.equal(puter.auth.isSignedIn(), true);
  assert.deepEqual(JSON.parse(JSON.stringify(await puter.auth.getUser())), {
    username: 'offline', uuid: 'offline-user',
  });
  await puter.auth.signOut();
  assert.equal(puter.auth.isSignedIn(), false);
  await puter.auth.signIn();
  assert.equal(await puter.auth.isSignedIn(), true);
  const who = await puter.auth.whoami();
  assert.deepEqual(JSON.parse(JSON.stringify(who)), { username: 'offline', uuid: 'offline-user' });
  who.username = 'mutated';
  assert.equal((await puter.auth.getUser()).username, 'offline');
  assert.match(notices[0].textContent, /reload or close this tab/i);
  assert.match(notices[0].textContent, /export files to keep them/i);
  assert.equal('ai' in puter, false);
  assert.equal('hosting' in puter, false);
  puter.ui.setWindowTitle('Notes');
  assert.equal(document.title, 'Notes');
});

test('stores Blob files by validated path and supports tree operations', async () => {
  const { puter } = createApp();
  await puter.fs.mkdir('docs');
  await puter.fs.write('docs/a.txt', new Blob(['hello'], { type: 'text/plain' }));
  assert.equal(await (await puter.fs.read('docs/a.txt')).text(), 'hello');
  const stat = await puter.fs.stat('docs/a.txt');
  assert.equal(stat.name, 'a.txt');
  assert.equal(stat.size, 5);
  assert.equal(stat.is_dir, false);
  assert.ok(stat.modified < 1e12);
  assert.equal((await puter.fs.stat({ uid: stat.uid })).path, 'docs/a.txt');
  assert.deepEqual(JSON.parse(JSON.stringify(await puter.fs.readdir('docs'))).map(x => x.name), ['a.txt']);
  await puter.fs.rename('docs/a.txt', 'docs/b.txt');
  assert.equal(await puter.fs.stat('docs/b.txt').then(x => x.name), 'b.txt');
  await puter.fs.delete('docs', { recursive: true });
  await assert.rejects(puter.fs.read('docs/b.txt'), /not found/i);
});

test('rejects traversal and duplicate writes unless overwrite is requested', async () => {
  const { puter } = createApp();
  await assert.rejects(puter.fs.write('../outside', new Blob(['x'])), /path/i);
  await puter.fs.write('x.txt', new Blob(['one']));
  await assert.rejects(puter.fs.write('x.txt', new Blob(['two'])), /exist/i);
  await puter.fs.write('x.txt', new Blob(['two']), { overwrite: true });
  assert.equal(await (await puter.fs.read('x.txt')).text(), 'two');
  await assert.rejects(puter.fs.read('/absolute'), /path/i);
});

test('clones KV values, supports key listing return shapes, and starts fresh per install', async () => {
  const { puter: a } = createApp();
  const value = { nested: [1] };
  await a.kv.set('settings', value);
  value.nested.push(2);
  const read = await a.kv.get('settings');
  read.nested.push(3);
  assert.deepEqual(JSON.parse(JSON.stringify(await a.kv.get('settings'))), { nested: [1] });
  assert.deepEqual(JSON.parse(JSON.stringify(await a.kv.get('settings', { returnValues: true }))), {
    key: 'settings', value: { nested: [1] },
  });
  assert.deepEqual(JSON.parse(JSON.stringify(await a.kv.list('set*'))), ['settings']);
  assert.deepEqual(JSON.parse(JSON.stringify(await a.kv.list({ pattern: 'set*', returnValues: true, limit: 10 }))), [
    { key: 'settings', value: { nested: [1] } },
  ]);
  await a.kv.del('settings');
  assert.equal(await a.kv.get('settings'), null);
  assert.equal(await createApp().puter.kv.get('settings'), null);
});

test('atomically appends KV arrays and returns detached snapshots', async () => {
  const { puter } = createApp();
  const left = [{ revision: 'left' }];
  const right = [{ revision: 'right' }];
  const [leftResult, rightResult] = await Promise.all([
    puter.kv.add('head', left),
    puter.kv.add('head', right),
  ]);
  left[0].revision = 'changed';
  leftResult[0].revision = 'also-changed';
  assert.deepEqual(JSON.parse(JSON.stringify(await puter.kv.get('head'))), [
    { revision: 'left' }, { revision: 'right' },
  ]);
  assert.deepEqual(JSON.parse(JSON.stringify(rightResult)), [
    { revision: 'left' }, { revision: 'right' },
  ]);
  await assert.rejects(puter.kv.add('invalid', 'not-an-array'), /array/i);
  await puter.kv.set('invalid-existing', 'text');
  await assert.rejects(puter.kv.add('invalid-existing', []), /array/i);
});

test('shows the temporary-storage notice when the SDK runs before body parsing', () => {
  const notices = [];
  const { finishDom } = createApp('sample', notices, true);
  assert.equal(notices.length, 0);
  finishDom();
  assert.equal(notices.length, 1);
  assert.equal(notices[0].id, 'offline-session-notice');
});
