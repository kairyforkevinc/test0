import { calculate_qw9c4 } from '../src/math_qw9c4';

describe('calculate_qw9c4', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_qw9c4(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_qw9c4(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_qw9c4(0, 10)).toBe(10);
    expect(calculate_qw9c4(15, 0)).toBe(15);
  });

  it('should handle two negative numbers', () => {
    expect(calculate_qw9c4(-4, -6)).toBe(-10);
  });

  it('should handle decimal numbers', () => {
    expect(calculate_qw9c4(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
