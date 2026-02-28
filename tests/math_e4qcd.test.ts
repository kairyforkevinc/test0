import { calculate_e4qcd } from '../src/math_e4qcd';

describe('calculate_e4qcd', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_e4qcd(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_e4qcd(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_e4qcd(0, 6)).toBe(6);
    expect(calculate_e4qcd(9, 0)).toBe(9);
  });
});
