import { calculate_udtsj } from '../src/math_udtsj';

describe('calculate_udtsj', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_udtsj(6, 4)).toBe(10);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_udtsj(-8, 3)).toBe(-5);
  });

  it('should handle zero values', () => {
    expect(calculate_udtsj(0, 0)).toBe(0);
    expect(calculate_udtsj(0, 15)).toBe(15);
  });
});
