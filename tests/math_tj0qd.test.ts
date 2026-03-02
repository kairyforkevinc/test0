import { calculate_tj0qd, multiply_tj0qd } from '../src/math_tj0qd';

describe('calculate_tj0qd', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_tj0qd(3, 7)).toBe(10);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_tj0qd(-5, 12)).toBe(7);
  });

  it('should handle zero values', () => {
    expect(calculate_tj0qd(0, 0)).toBe(0);
    expect(calculate_tj0qd(0, 8)).toBe(8);
  });
});

describe('multiply_tj0qd', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_tj0qd(4, 5)).toBe(20);
  });

  it('should return a negative result when one number is negative', () => {
    expect(multiply_tj0qd(-3, 7)).toBe(-21);
  });

  it('should handle zero values', () => {
    expect(multiply_tj0qd(0, 99)).toBe(0);
    expect(multiply_tj0qd(5, 0)).toBe(0);
  });
});
