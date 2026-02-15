import { calculate_utxd8 } from '../src/math_utxd8';

describe('calculate_utxd8', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_utxd8(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_utxd8(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_utxd8(0, 8)).toBe(8);
    expect(calculate_utxd8(12, 0)).toBe(12);
  });

  it('should throw TypeError for NaN input', () => {
    expect(() => calculate_utxd8(NaN, 1)).toThrow(TypeError);
  });

  it('should throw TypeError for Infinity input', () => {
    expect(() => calculate_utxd8(1, Infinity)).toThrow(TypeError);
  });
});
