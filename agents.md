# test0

## Overview & Execution Flow
E2E test project with math utility functions. Each module exports a single function (add, subtract, multiply, divide, greet). No runtime entry point; used as a library/test harness.

## Public Interfaces
- `greet(name: string): string` — returns `"Hello, {name}!"`
- `greet_mm6crhi1(name: string): string` — returns `"Hello, {name}!"`
- `add_*(a: number, b: number): number` — addition (multiple variants)
- `subtract_*(a: number, b: number): number` — subtraction (multiple variants)
- `multiply_*(a: number, b: number): number` — multiplication (multiple variants)
- `divide_*(a: number, b: number): number` — division with zero-check (multiple variants)
- `calculate_*(a: number, b: number): number` — math operations via `math_*.ts` modules
- `math_cf5qy.ts` validates inputs with `Number.isFinite()`, throws `TypeError` for NaN/Infinity

## External Dependencies
Dev only: `jest`, `ts-jest`, `typescript`, `@types/jest`, `@types/node`

## Internal Design
Flat module structure. Each `src/*.ts` has a corresponding `tests/*.test.ts`. No inter-module dependencies.

## Project Structure
```
src/           — source modules (greet, add, subtract, multiply, divide, math variants)
tests/         — 1:1 test files for each source module
.github/workflows/ci.yml — CI: typecheck, test, coverage, Codecov upload
```

## Build / Start / Test / Lint
```
npm run typecheck    # tsc --noEmit
npm test             # jest
npm run test:coverage # jest --coverage
npm run build        # tsc
```
No linter configured.

## Conventions
- Named exports, no default exports
- JSDoc on public functions
- Division functions throw `Error('Cannot divide by zero')` for `b === 0`
- Commit format: `feat: add <function> with unit tests (#N)`

## Gotchas
- `package.json` references `src/index.ts` as main but it does not exist
- No linter/formatter configured
- CI uses Node 20, npm (not bun)
