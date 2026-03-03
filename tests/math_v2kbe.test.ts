import { calculate_v2kbe } from '../src/math_v2kbe';

describe('calculate_v2kbe', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_v2kbe(2, 3)).toBe(5);
  });

  it('should return the sum of negative numbers', () => {
    expect(calculate_v2kbe(-4, -6)).toBe(-10);
  });

  it('should handle zero', () => {
    expect(calculate_v2kbe(0, 7)).toBe(7);
    expect(calculate_v2kbe(5, 0)).toBe(5);
  });
});
