import { calculate_rz23k } from '../src/math_rz23k';

describe('calculate_rz23k', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_rz23k(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_rz23k(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_rz23k(0, 10)).toBe(10);
    expect(calculate_rz23k(15, 0)).toBe(15);
  });

  it('should handle two negative numbers', () => {
    expect(calculate_rz23k(-4, -6)).toBe(-10);
  });

  it('should handle decimal numbers', () => {
    expect(calculate_rz23k(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
