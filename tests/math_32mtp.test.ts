import { calculate_32mtp, multiply_32mtp } from '../src/math_32mtp';

describe('calculate_32mtp', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_32mtp(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_32mtp(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_32mtp(0, 0)).toBe(0);
    expect(calculate_32mtp(0, 42)).toBe(42);
  });
});

describe('multiply_32mtp', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_32mtp(3, 4)).toBe(12);
  });

  it('should handle negative numbers', () => {
    expect(multiply_32mtp(-3, 5)).toBe(-15);
    expect(multiply_32mtp(-2, -4)).toBe(8);
  });

  it('should handle zero values', () => {
    expect(multiply_32mtp(0, 100)).toBe(0);
    expect(multiply_32mtp(7, 0)).toBe(0);
  });
});
