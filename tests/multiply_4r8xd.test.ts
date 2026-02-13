import { multiply_4r8xd } from '../src/multiply_4r8xd';

describe('multiply_4r8xd', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_4r8xd(5, 7);
    expect(result).toBe(35);
  });

  it('should handle multiplication with negative numbers', () => {
    const result = multiply_4r8xd(-3, 4);
    expect(result).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_4r8xd(0, 10)).toBe(0);
    expect(multiply_4r8xd(15, 0)).toBe(0);
  });
});
