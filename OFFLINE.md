# Run without cloud services

This checkout adds one shared offline launcher. Application source and existing
Vite configuration stay upstream-compatible. Use the launcher below: ordinary
`npm run dev` still starts the upstream, cloud-enabled application.

## Setup and run

Requires Node.js 22.12 or newer. Install an app's locked dependencies once:

```powershell
cd src/photo-studio
npm ci --ignore-scripts --no-audit --no-fund
cd ../..
node dev/offline.mjs photo-studio
```

Replace `photo-studio` with the app directory name, such as `documents`,
`spreadsheet`, `notes`, `inventory`, or `sudoku`. Installation and cloning need
Internet access; the application runtime is the offline part.

On Windows the launcher opens installed Edge/Chrome/Chromium with a separate
temporary profile. It serves only on `127.0.0.1`, opens port 5173 by default,
and refuses to switch ports silently. To choose another port:

```powershell
node dev/offline.mjs documents --port 5180
```

Close the dedicated browser or stop the launcher to end the session. The launcher
owns only that browser/profile and its own server/proxy. It does not change global
browser settings, firewall rules, extensions, or other running browser profiles.

Meetings is deliberately excluded. The upstream `assets` directory currently
does not contain its referenced `src/main.js` and is not a runnable app.
Email displays an explicit disabled page instead of starting the cloud mailbox.

## What is blocked

- Remote Puter SDK and analytics scripts are removed before Vite processes HTML.
- The page's fetch, XHR, WebSocket, EventSource, beacon, external links and forms
  are restricted to the app origin. WebRTC, WebTransport and service-worker
  registration are disabled. CSP restricts external scripts, images, styles,
  fonts, frames and worker connections too.
- The dedicated Windows browser uses a local proxy that never forwards requests.
  Only the selected app host and port bypass the proxy. The launcher also disables
  browser background networking, DNS resolution outside loopback, QUIC and
  non-proxied WebRTC UDP.

Cloud AI, sharing, hosting, account sync, online multiplayer and Internet API
calls are unavailable. Existing menus or account wording may still mention Puter;
the injected SDK does not provide those services. An application may retain its
own offline UI/data behavior without implementing its cloud-only workflows.

These are application and dedicated-browser controls, not OS network isolation
or a sandbox for hostile code. System software can inject code into local HTTP:
AdGuard does so on the validation machine. Such injected requests are separately
reported and required to fail in the browser checks.

## Data lifetime

The small SDK substitute provides a local identity and in-memory files/settings
only to let applications boot. Its data is lost on reload or tab close. The
dedicated browser profile is temporary too, so do not rely on browser storage
surviving launcher sessions. Export/download documents you want to keep.

The launcher does not read or migrate data from an older checkout. It does not
implement a new disk store, background sync, backup system, or persistent
replacement for Puter. Native local open/export features remain available where
the application already supports them.

## Build and preview

```powershell
node dev/offline.mjs notes --build
node dev/offline.mjs notes --preview --port 5180
```

The build invokes Vite with the offline plugin and writes the app's normal
`dist/`. It does not run package lifecycle hooks, type checks, cloud deployment
scripts or optional worker preparation. Run required local preparation/checks
from that app's README separately. A successful bundle is not proof that every
feature works. Preview keeps the runtime HTTP policy and dedicated browser.

Built HTML contains the guard, session SDK and CSP meta policy. Serve it through
this launcher for the complete supported path. Opening `dist/index.html` with
`file://`, using an arbitrary static server, or running `npm run dev` is not the
supported isolated runtime.

`--no-browser` runs only the loopback server for development/tests:

```powershell
node dev/offline.mjs sudoku --port 5180 --no-browser
```

It omits the dedicated profile/proxy. CSP and page guards alone cannot block
every top-level navigation, so this option does **not** provide the complete
outbound-blocking boundary. Non-Windows hosts currently have that same limit.

## Verification

```powershell
node --test dev/tests/*.test.mjs
node dev/verify-offline.mjs notes sudoku photo-studio inventory documents spreadsheet
```

The browser check imports Playwright from Documents and Vite from Notes, so
install those apps' locked dependencies as well as the apps under test. It uses
the installed matching Playwright Chromium; install that browser explicitly if
it is missing. Reports go to ignored `work/offline-browser-<pid>.json`.

The canary is a second loopback HTTP/WebSocket server, never an Internet target.
A positive control first proves the canary is reachable. CSP/guard checks bypass
the proxy for the canary, so the proxy cannot hide a broken policy. A separate
context verifies programmatic navigation through the deny proxy. Tests also
check that same-origin workers and the Vite HMR WebSocket still work.

App checks cover visible startup, the local SDK/notice, unhandled page errors
and outbound requests. They do not establish editing/export correctness,
authenticated/cloud behavior, or complete feature coverage.
Multiple app arguments run in separate child processes, since app lockfiles use
different Vite generations. Each process also has its own canary fixture.
See [OFFLINE-VERIFICATION.md](OFFLINE-VERIFICATION.md) for this checkout's results.

## Update from upstream

Keep these additions on a separate branch. Commit local changes, fetch upstream,
then merge or rebase the new upstream commit and rerun the checks above. Do not
replace this directory with a downloaded ZIP: a fresh upstream copy does not
include this launcher. No generated bundles, temporary profiles, user data or
dependency folders belong in the commit.

Reference: [Vite HTML plugin hooks](https://vite.dev/guide/api-plugin.html#transformindexhtml),
[CSP connection policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src),
[Chromium proxy bypass rules](https://chromium.googlesource.com/chromium/src/+/HEAD/net/docs/proxy.md#proxy-bypass-rules).
