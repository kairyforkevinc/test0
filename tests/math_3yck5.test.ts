import { calculate_3yck5, multiply_3yck5 } from '../src/math_3yck5';

describe('calculate_3yck5', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_3yck5(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_3yck5(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_3yck5(0, 0)).toBe(0);
    expect(calculate_3yck5(0, 42)).toBe(42);
  });
});

describe('multiply_3yck5', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_3yck5(3, 4)).toBe(12);
  });

  it('should handle negative numbers', () => {
    expect(multiply_3yck5(-3, 5)).toBe(-15);
    expect(multiply_3yck5(-2, -4)).toBe(8);
  });

  it('should handle zero values', () => {
    expect(multiply_3yck5(0, 100)).toBe(0);
    expect(multiply_3yck5(7, 0)).toBe(0);
  });
});
