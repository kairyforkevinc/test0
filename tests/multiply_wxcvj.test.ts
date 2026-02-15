import { multiply_wxcvj } from '../src/multiply_wxcvj';

describe('multiply_wxcvj', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_wxcvj(4, 5);
    expect(result).toBe(20);
  });

  it('should return a negative result when one number is negative', () => {
    const result = multiply_wxcvj(-3, 7);
    expect(result).toBe(-21);
  });

  it('should handle zero values', () => {
    expect(multiply_wxcvj(0, 10)).toBe(0);
    expect(multiply_wxcvj(15, 0)).toBe(0);
  });
});
