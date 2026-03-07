import { calculate_yjy7a } from '../src/math_yjy7a';

describe('calculate_yjy7a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_yjy7a(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_yjy7a(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_yjy7a(0, 10)).toBe(10);
    expect(calculate_yjy7a(15, 0)).toBe(15);
  });

  it('should throw for NaN input', () => {
    expect(() => calculate_yjy7a(NaN, 1)).toThrow('Both arguments must be finite numbers');
  });

  it('should throw for Infinity input', () => {
    expect(() => calculate_yjy7a(1, Infinity)).toThrow('Both arguments must be finite numbers');
  });
});
