import { calculate_x4u8k } from '../src/math_x4u8k';

describe('calculate_x4u8k', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_x4u8k(3, 5);
    expect(result).toBe(8);
  });

  it('should return the sum of negative and positive numbers', () => {
    const result = calculate_x4u8k(-2, 7);
    expect(result).toBe(5);
  });

  it('should handle zero correctly', () => {
    expect(calculate_x4u8k(0, 5)).toBe(5);
    expect(calculate_x4u8k(10, 0)).toBe(10);
  });
});
