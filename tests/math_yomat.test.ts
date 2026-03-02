import { calculate_yomat } from '../src/math_yomat';

describe('calculate_yomat', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_yomat(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_yomat(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_yomat(0, 10)).toBe(10);
    expect(calculate_yomat(15, 0)).toBe(15);
  });
});
