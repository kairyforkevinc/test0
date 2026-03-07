/**
 * Divides the first number by the second.
 * @param a - The dividend
 * @param b - The divisor
 * @returns The quotient of a divided by b
 * @throws {Error} If divisor (b) is zero
 */
export function divide_wt6vj(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
