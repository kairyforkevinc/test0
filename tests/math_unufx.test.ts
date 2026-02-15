import { calculate_unufx } from '../src/math_unufx';

describe('calculate_unufx', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_unufx(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_unufx(-5, 10)).toBe(5);
  });
});
