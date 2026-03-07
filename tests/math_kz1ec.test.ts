import { calculate_kz1ec } from '../src/math_kz1ec';

describe('calculate_kz1ec', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_kz1ec(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_kz1ec(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_kz1ec(0, 10)).toBe(10);
    expect(calculate_kz1ec(15, 0)).toBe(15);
  });
});
