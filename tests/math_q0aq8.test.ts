import { calculate_q0aq8, multiply_q0aq8 } from '../src/math_q0aq8';

describe('calculate_q0aq8', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_q0aq8(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_q0aq8(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_q0aq8(0, 0)).toBe(0);
    expect(calculate_q0aq8(0, 8)).toBe(8);
  });
});

describe('multiply_q0aq8', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_q0aq8(3, 4)).toBe(12);
  });

  it('should handle negative numbers', () => {
    expect(multiply_q0aq8(-5, 3)).toBe(-15);
    expect(multiply_q0aq8(-2, -4)).toBe(8);
  });

  it('should handle zero values', () => {
    expect(multiply_q0aq8(0, 10)).toBe(0);
    expect(multiply_q0aq8(7, 0)).toBe(0);
  });
});
