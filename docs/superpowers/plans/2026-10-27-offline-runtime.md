# Offline-only Runtime Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development; user mandates orchestrator-worker with gpt-6-luna high fallback. Workers do not commit/push.

**Goal:** Fresh upstream apps run under one shared no-cloud runtime with outbound requests denied.
**Architecture:** Additive Node/Vite launcher and plugin inject browser network restrictions plus session-only SDK; dedicated browser uses local refusing proxy. Leave app internals untouched.
**Tech Stack:** Node >=22.12, existing app Vite, browser APIs, node:test; no new product dependencies.
**Spec:** docs/superpowers/specs/2026-10-27-offline-runtime-design.md

## Global Constraints
Meetings excluded; no old code reused; no persistent-store rebuild; no real Internet test probes; app scope only; no global OS/browser policy changes; preserve existing app import/export/local data; no cloud services.

## Review Focus
- Late/dynamic network paths, redirects, workers, beacons and external navigation.
- Same-origin dev workers, Wasm, assets and HMR remain usable.
- Temporary data never presented as durable save; missing capabilities fail clearly.
- CLI path traversal, host binding, proxy behavior and lifecycle cleanup.
- Built app and preview preserve restrictions; arbitrary static hosts outside supported launcher documented.

### Task 1: Minimal session SDK (worker)
Files dev/offline-sdk.mjs, dev/tests/offline-sdk.test.mjs. Export installOfflineSDK(appName): self-contained browser function, serializable via toString, no imports inside. local identity, auth/getUser, fs read/write/list/stat/mkdir/rename/delete/space, kv get/set/del/list/add/update only where real consumers need. No cloud features. Run failing node tests then implementation; cover actual consumer shapes and session reset, missing files/conflicts, clone semantics, no persistence. Parent checks diff/test output.

### Task 2: Shared offline launch path (worker)
Files dev/offline.mjs, dev/offline-plugin.mjs, dev/offline-guard.mjs, dev/tests/offline-network.test.mjs. Plugin imports installOfflineSDK; inject serialized SDK and guard; removes remote scripts/hints. Restrictive HTTP headers and meta CSP, loopback host, refuse Meetings. Guard self-contained function installOfflineGuard. CLI imports Vite from selected app node_modules, preserving config and adding plugin, --port/--no-browser/--build/--preview. Windows dedicated browser and local refusing proxy. No imports of task 1 internals except exported function. RED/GREEN tests using local HTTP canaries or VM where browser not installed; include path validation.

### Task 3: Independent review and controller verification
Read-only reviewer inspects combined diff, reports actionable risks. Implementers fix only specific findings. Parent independently runs node tests, representative builds/unit suites and browser canary checks (Documents/Notes/Photo/Sudoku/business representative as feasible), records exact tested/not_run boundary and fixes runtime failures at source. Add OFFLINE.md with exact install/run/build/verify/update commands and limitations. Review staged source for secrets, commit scoped files on offline/no-outbound. Upstream remote is not user-owned; do not push without confirmed write access and ownership.
