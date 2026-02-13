import { calculate_la73o } from '../src/math_la73o';

describe('calculate_la73o', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_la73o(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = calculate_la73o(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_la73o(0, 10)).toBe(10);
    expect(calculate_la73o(15, 0)).toBe(15);
  });
});
