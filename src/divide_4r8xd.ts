/**
 * Math utility module providing division operation.
 * This module contains the divide_4r8xd function for dividing two numbers.
 */

/**
 * Divides the first number by the second.
 * @param a - The dividend (number to be divided)
 * @param b - The divisor (number to divide by)
 * @returns The quotient of a divided by b
 * @throws {Error} If divisor (b) is zero
 */
export function divide_4r8xd(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
