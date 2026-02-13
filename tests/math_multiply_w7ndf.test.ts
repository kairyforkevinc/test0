import { multiply_w7ndf } from '../src/math_multiply_w7ndf';

describe('multiply_w7ndf', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_w7ndf(5, 7);
    expect(result).toBe(35);
  });

  it('should handle multiplication with negative numbers', () => {
    const result = multiply_w7ndf(-3, 4);
    expect(result).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_w7ndf(0, 10)).toBe(0);
    expect(multiply_w7ndf(15, 0)).toBe(0);
  });
});
