import { calculate_f6wbb } from '../src/math_f6wbb';

describe('calculate_f6wbb', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_f6wbb(3, 5);
    expect(result).toBe(8);
  });

  it('should return the sum of negative and positive numbers', () => {
    const result = calculate_f6wbb(-2, 7);
    expect(result).toBe(5);
  });

  it('should handle zero correctly', () => {
    expect(calculate_f6wbb(0, 5)).toBe(5);
    expect(calculate_f6wbb(10, 0)).toBe(10);
  });
});
