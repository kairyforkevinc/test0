import { calculate_32mtp } from '../src/math_32mtp';

describe('calculate_32mtp', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_32mtp(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_32mtp(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_32mtp(0, 0)).toBe(0);
    expect(calculate_32mtp(0, 42)).toBe(42);
  });
});
