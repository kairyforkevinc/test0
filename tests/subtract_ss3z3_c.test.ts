import { subtract_ss3z3_c } from '../src/subtract_ss3z3_c';

describe('subtract_ss3z3_c', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_ss3z3_c(10, 3);
    expect(result).toBe(7);
  });

  it('should return a negative result when b is greater than a', () => {
    const result = subtract_ss3z3_c(3, 8);
    expect(result).toBe(-5);
  });

  it('should handle zero values', () => {
    expect(subtract_ss3z3_c(0, 10)).toBe(-10);
    expect(subtract_ss3z3_c(15, 0)).toBe(15);
  });
});
