import { multiply_ss3z3_b } from '../src/multiply_ss3z3_b';

describe('multiply_ss3z3_b', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_ss3z3_b(4, 5);
    expect(result).toBe(20);
  });

  it('should return a negative result when one number is negative', () => {
    const result = multiply_ss3z3_b(-3, 7);
    expect(result).toBe(-21);
  });

  it('should handle zero values', () => {
    expect(multiply_ss3z3_b(0, 10)).toBe(0);
    expect(multiply_ss3z3_b(15, 0)).toBe(0);
  });
});
