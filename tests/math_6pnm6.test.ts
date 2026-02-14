import { calculate_6pnm6 } from '../src/math_6pnm6';

describe('calculate_6pnm6', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_6pnm6(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_6pnm6(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_6pnm6(0, 8)).toBe(8);
    expect(calculate_6pnm6(12, 0)).toBe(12);
  });
});
