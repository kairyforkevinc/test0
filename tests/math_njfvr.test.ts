import { calculate_njfvr } from '../src/math_njfvr';

describe('calculate_njfvr', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_njfvr(3, 5);
    expect(result).toBe(8);
  });

  it('should return the sum of negative and positive numbers', () => {
    const result = calculate_njfvr(-2, 7);
    expect(result).toBe(5);
  });

  it('should handle zero correctly', () => {
    expect(calculate_njfvr(0, 5)).toBe(5);
    expect(calculate_njfvr(10, 0)).toBe(10);
  });
});
