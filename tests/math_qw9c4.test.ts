import { calculate_qw9c4 } from '../src/math_qw9c4';

describe('calculate_qw9c4', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_qw9c4(2, 3)).toBe(5);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_qw9c4(-4, 7)).toBe(3);
  });

  it('should handle zero values', () => {
    expect(calculate_qw9c4(0, 0)).toBe(0);
    expect(calculate_qw9c4(0, 9)).toBe(9);
  });
});
