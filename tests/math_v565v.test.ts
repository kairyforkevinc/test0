import { calculate_v565v, multiply_v565v } from '../src/math_v565v';

describe('calculate_v565v', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_v565v(9, 11)).toBe(20);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_v565v(-7, 4)).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(calculate_v565v(0, 0)).toBe(0);
    expect(calculate_v565v(0, 25)).toBe(25);
  });
});

describe('multiply_v565v', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_v565v(3, 8)).toBe(24);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_v565v(-5, 6)).toBe(-30);
  });

  it('should handle zero values', () => {
    expect(multiply_v565v(0, 42)).toBe(0);
    expect(multiply_v565v(7, 0)).toBe(0);
  });
});
