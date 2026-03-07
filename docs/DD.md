# Design Document (DD)

## Project: test0

## Architecture
Flat module structure. Each `src/*.ts` exports a single named function with JSDoc. Each has a corresponding `tests/*.test.ts`. No inter-module dependencies.

## Conventions
- Named exports only (no default exports)
- JSDoc on all public functions
- Division functions throw `Error('Cannot divide by zero')` for `b === 0`
- `math_cf5qy.ts` validates inputs with `Number.isFinite()`, throws `TypeError` for NaN/Infinity
- Commit format: `feat: add <function> with unit tests (#N)`

## CI Standards
- **Test pyramid**: Unit tests in CI (jest). System/E2E by QA during review. Manual by QA + PM.
- **Linter**: Not yet configured (open gap — no lint CI step).
- **Type check**: `tsc --noEmit` runs in CI on every PR and push to main.
- **Tests**: Full jest suite runs on every PR and push to main. Must pass before merge.
- **Build**: `tsc` build verified in CI.
- **Coverage**: Overall ≥ 80% (currently 100%). Coverage ratchet — can only go up.
- **Incremental coverage**: Every PR must have ≥ 80% test coverage on new/changed source lines.
- **Security**: No known vulnerabilities. Dev-only dependencies.
- **CI workflow**: `.github/workflows/ci.yml` — typecheck, test, coverage, Codecov upload.

## Known Gaps
- No linter configured (ESLint recommended)
- `package.json` references `src/index.ts` as main but file does not exist
- No deployment workflow (library-only project, may not need one)
