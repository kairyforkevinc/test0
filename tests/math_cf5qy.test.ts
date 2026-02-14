import { calculate_cf5qy, multiply_cf5qy } from '../src/math_cf5qy';

describe('calculate_cf5qy', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_cf5qy(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_cf5qy(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_cf5qy(0, 8)).toBe(8);
    expect(calculate_cf5qy(12, 0)).toBe(12);
  });

  it('should throw TypeError for NaN input', () => {
    expect(() => calculate_cf5qy(NaN, 1)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity input', () => {
    expect(() => calculate_cf5qy(1, Infinity)).toThrow(TypeError);
  });
});

describe('multiply_cf5qy', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_cf5qy(3, 4)).toBe(12);
  });

  it('should return the product of a negative and positive number', () => {
    expect(multiply_cf5qy(-5, 10)).toBe(-50);
  });

  it('should handle zero values', () => {
    expect(multiply_cf5qy(0, 8)).toBe(0);
    expect(multiply_cf5qy(12, 0)).toBe(0);
  });

  it('should throw TypeError for NaN input', () => {
    expect(() => multiply_cf5qy(NaN, 1)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity input', () => {
    expect(() => multiply_cf5qy(1, Infinity)).toThrow(TypeError);
  });
});
