import { calculate_epldl } from '../src/math_epldl';

describe('calculate_epldl', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_epldl(3, 5)).toBe(8);
  });

  it('should return the sum of negative and positive numbers', () => {
    expect(calculate_epldl(-2, 7)).toBe(5);
  });

  it('should handle zero correctly', () => {
    expect(calculate_epldl(0, 5)).toBe(5);
    expect(calculate_epldl(10, 0)).toBe(10);
  });
});
