import { multiply_og6bj_b } from '../src/multiply_og6bj_b';

describe('multiply_og6bj_b', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_og6bj_b(3, 4)).toBe(12);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_og6bj_b(-3, 4)).toBe(-12);
    expect(multiply_og6bj_b(3, -4)).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_og6bj_b(0, 5)).toBe(0);
    expect(multiply_og6bj_b(5, 0)).toBe(0);
  });
});
