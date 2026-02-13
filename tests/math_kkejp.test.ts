import { calculate_kkejp } from '../src/math_kkejp';

describe('calculate_kkejp', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_kkejp(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = calculate_kkejp(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_kkejp(0, 10)).toBe(10);
    expect(calculate_kkejp(15, 0)).toBe(15);
  });
});
