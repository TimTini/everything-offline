# Offline runtime verification — 2026-10-27

Base: upstream `5109489e85212c264b2d42518e999fd189adc296`.
Branch: `offline/no-outbound`. Application source and Vite configs are unchanged.

## Verified

- `node --test dev/tests/*.test.mjs`: **15 passed**. Includes actual TCP proxy
  rejection/reset handling, SDK session isolation, KV list append/clone semantics,
  HTML cloud-script removal, disabled Email page, path checks and profile cleanup.
- Browser canary: a reachable second loopback origin received **zero** protected
  requests. The check separately exercises CSP/guard without proxy masking, worker
  fetch/WebSocket connections, same-origin worker/HMR functionality, and navigation
  through the deny proxy. No real Internet target was used as a probe.
- Windows Edge launcher: actual dev and preview returned HTTP **200**, loaded
  guard/SDK without the Puter script, and used the scoped proxy and WebRTC policy.
  Browser exit led to launcher exit **0** and removal of its temporary profile.
- Startup matrix: **48 apps rendered their main/initial UI** with the offline
  session identity; **Email intentionally disabled** with a clear explanation.
  Meetings is excluded. Assets is missing upstream `src/main.js`.
- Offline Vite bundles completed for **Documents, Spreadsheet, Notes, Photo
  Studio, Inventory and Sudoku**. Large-chunk/dynamic-import warnings remain
  upstream; app lifecycle/type-check/worker-preparation scripts were not implied
  by this shared Vite build command.
- Existing unit suites: Notes **275 passed**, Inventory **722 passed**, Sudoku
  **333 passed**, Photo Studio **2,202 passed / 26 skipped**.

## Limits and unsuccessful attempts retained

- Startup checks are not complete editing/import/export/data-recovery tests. A
  visible UI does not make the app's cloud-only workflows available. Menus may
  still use upstream account/cloud wording; unsupported cloud capabilities remain
  absent from the injected SDK.
- Initial unrestricted parallel suites caused timeouts. Photo Studio's menu
  timeout did not reproduce in its full rerun with `--maxWorkers=2`; that rerun
  passed. Initial broad Documents/Spreadsheet runs reported failures and were
  stopped. Documents has 1,014 test files and Spreadsheet has 3,386; their full
  suites were **not completed**, so no repository-wide green claim is made.
  No unrelated app changes were made to hide those results.
- The first long multi-app browser process stalled after five apps; isolated
  single-app checks succeeded. The harness now forks each app into a fresh process
  to keep native Vite optimizer state and signal listeners separate. Canary
  fixtures are also unique per process to prevent cross-test HMR reloads.
- Cap Table initially failed because `kv.add` was missing; adding the required
  in-memory list append and rerunning its browser check resolved startup. Email
  initially showed account/mailbox errors; it now has an intentional disabled
  gate instead of a simulated cloud mailbox.
- AdGuard injects `local.adguard.org` scripts into local HTTP on this machine.
  Browser reports separate these system-injected requests and require them to
  fail. This is not evidence of app telemetry, and no global AdGuard setting was
  changed.
- No OS-wide packet-capture/isolation, hostile-code sandbox, real cloud service,
  login, live message delivery or authenticated E2E was tested. The supported
  outbound boundary is the dedicated browser launched by `dev/offline.mjs`.
  `--no-browser`, ordinary upstream dev commands and arbitrary hosting provide a
  narrower boundary.

Detailed machine-local reports/logs live in ignored `work/`; commands to reproduce
the core and browser checks are in [OFFLINE.md](OFFLINE.md). They contain only
synthetic session data and test results, not existing user accounts or documents.
