/**
 * Adds two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 * @throws {TypeError} If either argument is not a finite number
 */
export function calculate_yjy7a(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a + b;
}

/**
 * Multiplies two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The product of a and b
 * @throws {TypeError} If either argument is not a finite number
 */
export function multiply_yjy7a(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a * b;
}
