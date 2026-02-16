import { multiply_n0pvd } from '../src/multiply_n0pvd';

describe('multiply_n0pvd', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_n0pvd(5, 7);
    expect(result).toBe(35);
  });

  it('should handle multiplication with negative numbers', () => {
    const result = multiply_n0pvd(-3, 4);
    expect(result).toBe(-12);
  });

  it('should handle zero values', () => {
    expect(multiply_n0pvd(0, 10)).toBe(0);
    expect(multiply_n0pvd(15, 0)).toBe(0);
  });
});
