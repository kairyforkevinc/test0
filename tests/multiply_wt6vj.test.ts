import { multiply_wt6vj } from '../src/multiply_wt6vj';

describe('multiply_wt6vj', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_wt6vj(4, 5)).toBe(20);
  });

  it('should handle negative numbers', () => {
    expect(multiply_wt6vj(-3, 7)).toBe(-21);
    expect(multiply_wt6vj(-2, -6)).toBe(12);
  });

  it('should handle zero', () => {
    expect(multiply_wt6vj(0, 99)).toBe(0);
    expect(multiply_wt6vj(5, 0)).toBe(0);
  });
});
