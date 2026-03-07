# Product Requirements Document (PRD)

## Project: test0

## Overview
E2E test project providing standalone utility functions (math, greet, farewell) as a TypeScript library/test harness. Each module exports a single function with corresponding unit tests.

## Goals
- Provide well-tested, standalone utility functions
- Maintain 1:1 source-to-test file mapping
- Ensure CI passes on every PR (typecheck, tests, coverage)

## Modules & Requirements

### Core Utilities (Implemented & Merged)
- `farewell(name)` — returns `"Goodbye, {name}!"`
- `greet(name)` — returns `"Hello, {name}!"`
- `greet_mm6crhi1(name)` — greeting with empty-name validation
- `greet_ebk2v(name)` — PR #394 merged
- `greet_mmgmt0pb(name)` — PR #412 merged
- `add_*`, `subtract_*`, `multiply_*`, `divide_*` — arithmetic operations (multiple variants)
- `calculate_*` — math operations via `math_*.ts` modules
- `calculate_vtquj(a, b)` — PR #357 merged
- `add_wt6vj(a, b)` — PR #370 merged
- `multiply_bwv2l_b(a, b)` — PR #384 merged
- `subtract_bwv2l_c(a, b)` — PR #385 merged
- `subtract_wt6vj(a, b)` — PR #388 merged
- `multiply_wt6vj(a, b)` — PR #390 merged
- `divide_wt6vj(a, b)` — PR #392 merged
- `calculate_x4u8k(a, b)` — PR #316 merged

### In Progress — PRs Open (QA Approved, Need Rebase)
- `greet_juqtv(name)` — PR #395 (issue #359)
- `calculate_kz1ec(a, b)` — PR #398 (issue #396)
- `greet_ce1zk(name)` — PR #402 (issue #400)
- `greet_mmgm8eh4(name)` — PR #408 (issue #406)
- `calculate_32mtp(a, b)` — PR #332 (issue #331)
- `greet_ptm23(name)` — PR #335 (issue #334)
- `greet_v565v(name)` — PR #311 (issue #310)
- `calculate_v565v(a, b)` — PR #309 (issue #308)
- `greet_jstdu(name)` — PR #305 (issue #304)
- `calculate_udtsj(a, b)` — PR #303 (issue #302)
- `greet_dq0jt(name)` — PR #299 (issue #298)
- `calculate_tj0qd(a, b)` — PR #297 (issue #296)
- `calculate_rz23k(a, b)` — PR #293 (issue #292)
- `calculate_qw9c4(a, b)` — PR #289 (issue #288)
- `greet_mm6kyz92(name)` — PR #272 (issue #271)
- `calculate_epldl(a, b)` + `multiply_epldl(a, b)` — PR #249 (issue #248)
- `calculate_dkckt(a, b)` — PR #245 (issue #244)
- `greet_mm6crhi1(name)` validation — PR #241 (issue #240)
- greet special char tests — PR #239 (issue #237)
- `greet_i228(name)` — PR #230 (issue #228)

### In Progress — PRs Open (Awaiting QA)
- `add_bwv2l_a(a, b)` — PR #382 (issue #376)
- `calculate_0i7zc(a, b)` — PR #326 (issue #325)
- `calculate_yomat(a, b)` — PR #320 (issue #319)
- `greet_i231(name)` — PR #232 (issue #231)

### In Progress — PRs Need Fixes
- `calculate_q0aq8(a, b)` — PR #282 (scope creep, remove multiply)
- `calculate_unufx(a, b)` — PR #149 (needs more test cases)

### Awaiting Dev — No PR Yet
- `calculate_v2kbe(a, b)` — issue #347
- `greet_5kcy3(name)` — issue #342
- `calculate_3yck5(a, b)` — issue #339
- `greet_cz7i0(name)` — issue #328
- `calculate_zrye3(a, b)` — issue #323
- `calculate_1hmyu(a, b)` — issue #329
- `greeting_tamoy(name)` — issue #321
- `greeting_k8u4x(name)` — issue #317
- `calculate_wd78v(a, b)` — issue #314
- `calculate_sstht(a, b)` — issue #295
- `subtract_rz23k(a, b)` — issue #294
- `add_qwu48_a(a, b)` — issue #461
- `multiply_qwu48_b(a, b)` — issue #462
- `subtract_qwu48_c(a, b)` — issue #463
- `add_ss3z3_a(a, b)` — issue #479 (parent #474)
- `multiply_ss3z3_b(a, b)` — issue #481 (parent #475)
- `subtract_ss3z3_c(a, b)` — issue #484 (parent #476)

### Feature Requests (Not Scoped)
- Structured logging for 32mtp module (#336) — needs discussion, low priority
- Structured logging for 3yck5 module (#344) — needs discussion, low priority
- Structured logging for v2kbe module (#352) — needs discussion, low priority
- Structured logging for vtquj module (#362) — needs discussion, low priority
- Structured logging for kz1ec module (#404) — needs discussion, low priority

### Planning
- Refactor of 32mtp module (#337) — deferred until #332 merges and #336 is scoped
- Refactor of 3yck5 module (#345) — deferred until #340 merges and #344 is scoped
- Refactor of v2kbe module (#353) — deferred until #348 merges and #352 is scoped
- Refactor of vtquj module (#363) — deferred until #362 is scoped
- Refactor of kz1ec module (#405) — deferred until #398 merges and #404 is scoped

## Non-Requirements
- No runtime entry point (library only)
- No linter currently configured
