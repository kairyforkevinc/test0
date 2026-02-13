import { calculate_fr13a } from '../src/math_fr13a';

describe('calculate_fr13a', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_fr13a(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = calculate_fr13a(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_fr13a(0, 10)).toBe(10);
    expect(calculate_fr13a(15, 0)).toBe(15);
  });
});
