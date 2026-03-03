# Product Requirements Document (PRD)

## Project: test0

## Overview
E2E test project providing standalone utility functions (math, greet, farewell) as a TypeScript library/test harness. Each module exports a single function with corresponding unit tests.

## Goals
- Provide well-tested, standalone utility functions
- Maintain 1:1 source-to-test file mapping
- Ensure CI passes on every PR (typecheck, tests, coverage)

## Modules & Requirements

### Core Utilities (Implemented)
- `farewell(name)` — returns `"Goodbye, {name}!"`
- `greet(name)` — returns `"Hello, {name}!"`
- `greet_mm6crhi1(name)` — greeting with empty-name validation
- `add_*`, `subtract_*`, `multiply_*`, `divide_*` — arithmetic operations (multiple variants)
- `calculate_*` — math operations via `math_*.ts` modules

### In Progress
- `calculate_32mtp(a, b)` + `multiply_32mtp(a, b)` — sum & product functions, PR #332 open (issue #330)
- `greet_ptm23(name)` — greeting utility, PR #335 open (issue #333)
- `calculate_3yck5(a, b)` — sum function, PR #340 open (issue #338)
- `greet_5kcy3(name)` — greeting utility, PR #343 open (issue #341)

### Newly Requested (PRs Open)
- `calculate_v2kbe(a, b)` — sum function, PR #348 open (issue #346)
- `greet_ebk2v(name)` — greeting utility, PR #351 open (issue #349)

### Feature Requests (Not Scoped)
- Structured logging for 32mtp module (#336) — needs discussion, low priority
- Structured logging for 3yck5 module (#344) — needs discussion, low priority
- Structured logging for v2kbe module (#352) — needs discussion, low priority

### Planning
- Refactor of 32mtp module (#337) — premature, deferred until #332 merges and #336 is scoped
- Refactor of 3yck5 module (#345) — premature, deferred until #340 merges and #344 is scoped
- Refactor of v2kbe module (#353) — premature, deferred until #348 merges and #352 is scoped

## Non-Requirements
- No runtime entry point (library only)
- No linter currently configured
