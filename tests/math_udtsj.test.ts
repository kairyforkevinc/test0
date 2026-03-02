import { calculate_udtsj, multiply_udtsj } from '../src/math_udtsj';

describe('calculate_udtsj', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_udtsj(6, 4)).toBe(10);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_udtsj(-8, 3)).toBe(-5);
  });

  it('should handle zero values', () => {
    expect(calculate_udtsj(0, 0)).toBe(0);
    expect(calculate_udtsj(0, 15)).toBe(15);
  });
});

describe('multiply_udtsj', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_udtsj(6, 7)).toBe(42);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_udtsj(-4, 5)).toBe(-20);
  });

  it('should handle zero values', () => {
    expect(multiply_udtsj(0, 100)).toBe(0);
    expect(multiply_udtsj(9, 0)).toBe(0);
  });
});
