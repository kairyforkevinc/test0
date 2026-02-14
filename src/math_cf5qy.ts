/**
 * Math utility module providing arithmetic operations.
 * This module contains the calculate_cf5qy and multiply_cf5qy functions.
 */

/**
 * Adds two numbers together.
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 * @throws {TypeError} If either argument is not a finite number
 */
export function calculate_cf5qy(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a + b;
}

/**
 * Multiplies two numbers together.
 * @param a - The first number to multiply
 * @param b - The second number to multiply
 * @returns The product of a and b
 * @throws {TypeError} If either argument is not a finite number
 */
export function multiply_cf5qy(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be finite numbers');
  }
  return a * b;
}
