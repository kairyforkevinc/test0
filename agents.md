# test0

## Overview & Execution Flow
E2E test project with math and string utility functions. Each module exports a single function with a unique suffix. Tests map 1:1 with source files.

## Public Interfaces
- `greet(name: string): string` — returns `"Hello, {name}!"`
- `greet_i228(name: string): string` — returns `"Hello, {name}!"`
- `add_{suffix}(a: number, b: number): number` — addition (suffixes: wxcvj, l6oz0, 4r8xd, w7ndf)
- `subtract_{suffix}(a: number, b: number): number` — subtraction (suffixes: wxcvj, l6oz0, 4r8xd, m25pw, u7x6u, uno1e, w7ndf)
- `multiply_{suffix}(a: number, b: number): number` — multiplication (suffixes: wxcvj, l6oz0, m25pw, 4r8xd, w7ndf)
- `divide_{suffix}(a: number, b: number): number` — division with zero check (suffixes: wxcvj, l6oz0, 4r8xd, uno1e, w7ndf)
- `calculate_{suffix}(a: number, b: number): number` — addition (suffixes: sq8w4, njfvr, cf5qy, fr13a, p61ck, la73o, kkejp, f6wbb)
- `multiply_cf5qy(a: number, b: number): number` — multiplication with NaN/Infinity validation

## External Dependencies
None (devDependencies only: typescript, jest, ts-jest, @types/jest, @types/node)

## Internal Design
Standalone modules, no shared state or imports between modules.

## Project Structure
```
src/           — 31 source files (greet, greet_i228, add_*, subtract_*, multiply_*, divide_*, math_*)
tests/         — 31 test files (1:1 mapping with src/)
.github/workflows/ci.yml — CI: typecheck + test + coverage
```

## Build / Start / Test / Lint
```
npm ci                  # install deps
npm test                # jest
npm run test:coverage   # jest --coverage
npm run typecheck       # tsc --noEmit
npm run build           # tsc
```

## Conventions
- Named exports, no default exports
- Unique suffix per module (e.g., `_wxcvj`, `_i228`)
- JSDoc on public functions
- Full TypeScript strict mode

## Gotchas
- `package.json` declares `"main": "src/index.ts"` but no index.ts exists
- No linter configured (no ESLint/Prettier)
