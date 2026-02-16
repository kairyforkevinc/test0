import { multiply_l6oz0 } from '../src/multiply_l6oz0';

describe('multiply_l6oz0', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_l6oz0(5, 7);
    expect(result).toBe(35);
  });

  it('should handle multiplication with negative numbers', () => {
    const result = multiply_l6oz0(-3, 4);
    expect(result).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_l6oz0(0, 10)).toBe(0);
    expect(multiply_l6oz0(15, 0)).toBe(0);
  });
});
