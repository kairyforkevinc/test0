import { add_ss3z3_a } from '../src/add_ss3z3_a';

describe('add_ss3z3_a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_ss3z3_a(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(add_ss3z3_a(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_ss3z3_a(0, 8)).toBe(8);
    expect(add_ss3z3_a(12, 0)).toBe(12);
  });
});
