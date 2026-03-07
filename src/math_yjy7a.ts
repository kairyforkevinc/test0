/**
 * Calculates the sum of two numbers.
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 * @throws {TypeError} If either argument is not a finite number
 */
export function calculate_yjy7a(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a + b;
}
