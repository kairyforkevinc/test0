/**
 * Math utility module providing addition operation.
 * This module contains the calculate_utxd8 function for adding two numbers.
 */

/**
 * Adds two numbers together.
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 * @throws {TypeError} If either argument is not a finite number
 */
export function calculate_utxd8(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a + b;
}
