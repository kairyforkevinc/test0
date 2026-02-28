import { calculate_epldl, multiply_epldl } from '../src/math_epldl';

describe('calculate_epldl', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_epldl(3, 5)).toBe(8);
  });

  it('should return the sum of negative and positive numbers', () => {
    expect(calculate_epldl(-2, 7)).toBe(5);
  });

  it('should handle zero correctly', () => {
    expect(calculate_epldl(0, 5)).toBe(5);
    expect(calculate_epldl(10, 0)).toBe(10);
  });
});

describe('multiply_epldl', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_epldl(3, 5)).toBe(15);
  });

  it('should return the product of negative and positive numbers', () => {
    expect(multiply_epldl(-2, 7)).toBe(-14);
  });

  it('should handle zero correctly', () => {
    expect(multiply_epldl(0, 5)).toBe(0);
    expect(multiply_epldl(10, 0)).toBe(0);
  });
});
