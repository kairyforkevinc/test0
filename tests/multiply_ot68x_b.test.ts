import { multiply_ot68x_b } from '../src/multiply_ot68x_b';

describe('multiply_ot68x_b', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_ot68x_b(3, 4)).toBe(12);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_ot68x_b(-3, 4)).toBe(-12);
    expect(multiply_ot68x_b(3, -4)).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_ot68x_b(0, 5)).toBe(0);
    expect(multiply_ot68x_b(5, 0)).toBe(0);
  });
});
