# Coding Conventions (CC)

## Project: test0

## Language & Runtime
- TypeScript 5.3+, Node 20, npm
- Jest + ts-jest for testing

## Code Style
- Named exports only, no default exports
- JSDoc on all public functions
- One function per module (`src/*.ts`)
- One test file per source file (`tests/*.test.ts`)

## Naming
- Source files: `src/<function_name>.ts` or `src/<category>_<id>.ts`
- Test files: `tests/<matching_source_name>.test.ts`
- Functions: `snake_case` with module identifier suffix (e.g., `calculate_32mtp`, `greet_ptm23`)

## Error Handling
- Division functions: throw `Error('Cannot divide by zero')` for `b === 0`
- Input validation: use `Number.isFinite()` where applicable, throw `TypeError` for NaN/Infinity
- Greeting validation (where applicable): throw `Error('Name cannot be empty')` for empty/whitespace input

## Git & CI
- Commit format: `feat: add <function> with unit tests (#N)`
- Branch naming: `silicon/{type}{issue_number}-$(date +%Y%m%dT%H%M%S)`
- CI checks: typecheck (`tsc --noEmit`), tests (`jest`), coverage (`jest --coverage`)
- All PRs must reference a closing issue
- Squash-and-merge strategy

## Architecture
- Flat module structure, no inter-module dependencies
- No shared state, all functions are pure
