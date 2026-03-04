import { multiply_bwv2l_b } from '../src/multiply_bwv2l_b';

describe('multiply_bwv2l_b', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_bwv2l_b(6, 7)).toBe(42);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_bwv2l_b(-4, 5)).toBe(-20);
  });

  it('should return zero when either argument is zero', () => {
    expect(multiply_bwv2l_b(0, 99)).toBe(0);
    expect(multiply_bwv2l_b(8, 0)).toBe(0);
  });
});
