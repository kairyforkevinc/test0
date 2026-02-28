import { calculate_dkckt } from '../src/math_dkckt';

describe('calculate_dkckt', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_dkckt(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_dkckt(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_dkckt(0, 10)).toBe(10);
    expect(calculate_dkckt(15, 0)).toBe(15);
  });
});
