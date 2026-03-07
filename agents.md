# test0

## Overview & Execution Flow
E2E test project with utility functions (math, greet, farewell). Each module exports a single function. No runtime entry point; used as a library/test harness.

## Public Interfaces
- `farewell(name: string): string` — returns `"Goodbye, {name}!"`
- `greet(name: string): string` — returns `"Hello, {name}!"`
- `greet_mm6crhi1(name: string): string` — returns `"Hello, {name}!"`, throws `Error('Name cannot be empty')` for empty/whitespace-only input
- `greet_ebk2v(name: string): string` — returns `"Hello, {name}!"` (in `src/greeting_ebk2v.ts`)
- `greet_mmgmt0pb(name: string): string` — returns `"Hello, {name}!"` (in `src/greet_mmgmt0pb.ts`)
- `greet_juqtv(name: string): string` — returns `"Hello, {name}!"` (in `src/greeting_juqtv.ts`)
- `greet_ce1zk(name: string): string` — returns `"Hello, {name}!"` (in `src/greeting_ce1zk.ts`)
- `greet_mmgm8eh4(name: string): string` — returns `"Hello, {name}!"`, throws `Error('Name cannot be empty')` for null/undefined/empty input (in `src/greet_mmgm8eh4.ts`)
- `add_*(a: number, b: number): number` — addition (multiple variants, includes `add_fyizk`, `add_wt6vj`, `add_nuogg`, `add_p5ru9_a`, `add_ungea`)
- `subtract_*(a: number, b: number): number` — subtraction (multiple variants, includes `subtract_fyizk`, `subtract_bwv2l_c`, `subtract_wt6vj`, `subtract_nuogg`, `subtract_p5ru9_c`, `subtract_ungea`)
- `multiply_*(a: number, b: number): number` — multiplication (multiple variants, includes `multiply_fyizk`, `multiply_bwv2l_b`, `multiply_wt6vj`, `multiply_nuogg`, `multiply_p5ru9_b`, `multiply_ungea`)
- `divide_*(a: number, b: number): number` — division with zero-check (multiple variants, includes `divide_fyizk`, `divide_wt6vj`, `divide_nuogg`, `divide_ungea`)
- `calculate_*(a: number, b: number): number` — math operations via `math_*.ts` modules (includes `calculate_fwakg`, `calculate_vtquj`, `calculate_q0aq8`)
- `math_cf5qy.ts` validates inputs with `Number.isFinite()`, throws `TypeError` for NaN/Infinity

## External Dependencies
Dev only: `jest`, `ts-jest`, `typescript`, `@types/jest`, `@types/node`

## Internal Design
Flat module structure. Each `src/*.ts` has a corresponding `tests/*.test.ts`. No inter-module dependencies.

## Project Structure
```
src/           — source modules (farewell, greet, add, subtract, multiply, divide, math variants)
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
