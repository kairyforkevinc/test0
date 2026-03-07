import { calculate_q0aq8 } from '../src/math_q0aq8';

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
