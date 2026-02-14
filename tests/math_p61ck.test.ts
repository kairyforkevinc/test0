import { calculate_p61ck } from '../src/math_p61ck';

describe('calculate_p61ck', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_p61ck(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = calculate_p61ck(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_p61ck(0, 10)).toBe(10);
    expect(calculate_p61ck(15, 0)).toBe(15);
  });
});
