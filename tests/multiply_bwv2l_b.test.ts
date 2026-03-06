import { multiply_bwv2l_b } from '../src/multiply_bwv2l_b';

describe('multiply_bwv2l_b', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_bwv2l_b(4, 5)).toBe(20);
  });

  it('should handle negative numbers', () => {
    expect(multiply_bwv2l_b(-3, 7)).toBe(-21);
  });

  it('should handle zero values', () => {
    expect(multiply_bwv2l_b(0, 100)).toBe(0);
    expect(multiply_bwv2l_b(99, 0)).toBe(0);
  });

  it('should return 1 when multiplying identity cases', () => {
    expect(multiply_bwv2l_b(1, 1)).toBe(1);
  });
});
