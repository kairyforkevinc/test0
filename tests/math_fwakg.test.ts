import { calculate_fwakg } from '../src/math_fwakg';

describe('calculate_fwakg', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_fwakg(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_fwakg(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_fwakg(0, 10)).toBe(10);
    expect(calculate_fwakg(15, 0)).toBe(15);
  });
});
