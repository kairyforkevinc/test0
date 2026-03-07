import { multiply_p5ru9_b } from '../src/multiply_p5ru9_b';

describe('multiply_p5ru9_b', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_p5ru9_b(3, 4)).toBe(12);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_p5ru9_b(-3, 4)).toBe(-12);
    expect(multiply_p5ru9_b(3, -4)).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_p5ru9_b(0, 5)).toBe(0);
    expect(multiply_p5ru9_b(5, 0)).toBe(0);
  });
});
