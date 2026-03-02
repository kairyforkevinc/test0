import { calculate_q0aq8 } from '../src/math_q0aq8';

describe('calculate_q0aq8', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_q0aq8(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_q0aq8(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_q0aq8(0, 10)).toBe(10);
    expect(calculate_q0aq8(15, 0)).toBe(15);
  });

  it('should handle two negative numbers', () => {
    expect(calculate_q0aq8(-4, -6)).toBe(-10);
  });

  it('should handle decimal numbers', () => {
    expect(calculate_q0aq8(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
