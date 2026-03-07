import { calculate_yjy7a, multiply_yjy7a } from '../src/math_yjy7a';

describe('calculate_yjy7a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_yjy7a(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_yjy7a(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_yjy7a(0, 8)).toBe(8);
    expect(calculate_yjy7a(12, 0)).toBe(12);
  });

  it('should throw TypeError for NaN input', () => {
    expect(() => calculate_yjy7a(NaN, 1)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity input', () => {
    expect(() => calculate_yjy7a(1, Infinity)).toThrow(TypeError);
  });
});

describe('multiply_yjy7a', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_yjy7a(3, 4)).toBe(12);
  });

  it('should return the product of a negative and positive number', () => {
    expect(multiply_yjy7a(-5, 10)).toBe(-50);
  });

  it('should handle zero values', () => {
    expect(multiply_yjy7a(0, 8)).toBe(0);
    expect(multiply_yjy7a(12, 0)).toBe(0);
  });

  it('should throw TypeError for NaN input', () => {
    expect(() => multiply_yjy7a(NaN, 1)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity input', () => {
    expect(() => multiply_yjy7a(1, Infinity)).toThrow(TypeError);
  });
});
