import { calculate_v2kbe, multiply_v2kbe } from '../src/math_v2kbe';

describe('calculate_v2kbe', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_v2kbe(2, 3)).toBe(5);
  });

  it('should return the sum of negative numbers', () => {
    expect(calculate_v2kbe(-4, -6)).toBe(-10);
  });

  it('should handle zero', () => {
    expect(calculate_v2kbe(0, 7)).toBe(7);
    expect(calculate_v2kbe(5, 0)).toBe(5);
  });
});

describe('multiply_v2kbe', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_v2kbe(3, 4)).toBe(12);
  });

  it('should return the product of negative numbers', () => {
    expect(multiply_v2kbe(-3, -5)).toBe(15);
  });

  it('should handle zero', () => {
    expect(multiply_v2kbe(0, 9)).toBe(0);
    expect(multiply_v2kbe(7, 0)).toBe(0);
  });
});
