/**
 * Math utility module providing comprehensive arithmetic operations.
 * This module contains functions for addition, subtraction, multiplication, and division.
 */

/**
 * Adds two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param a - The number to subtract from
 * @param b - The number to subtract
 * @returns The difference of a and b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers together.
 * @param a - The first number
 * @param b - The second number
 * @returns The product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param a - The dividend
 * @param b - The divisor
 * @returns The quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Legacy function for backward compatibility.
 * @deprecated Use add() instead
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 */
export function calculate_kkejp(a: number, b: number): number {
  return add(a, b);
}
