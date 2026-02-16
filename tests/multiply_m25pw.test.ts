import { multiply_m25pw } from '../src/multiply_m25pw';

describe('multiply_m25pw', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_m25pw(5, 7);
    expect(result).toBe(35);
  });

  it('should handle multiplication with negative numbers', () => {
    const result = multiply_m25pw(-3, 4);
    expect(result).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_m25pw(0, 10)).toBe(0);
    expect(multiply_m25pw(15, 0)).toBe(0);
  });
});
