import { subtract_ss3z3_c } from '../src/subtract_ss3z3_c';

describe('subtract_ss3z3_c', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_ss3z3_c(10, 3)).toBe(7);
  });

  it('should handle subtracting a larger number from a smaller one', () => {
    expect(subtract_ss3z3_c(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_ss3z3_c(0, 5)).toBe(-5);
    expect(subtract_ss3z3_c(8, 0)).toBe(8);
  });
});
