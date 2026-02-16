import { subtract_u7x6u } from '../src/subtract_u7x6u';

describe('subtract_u7x6u', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_u7x6u(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_u7x6u(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_u7x6u(10, 0)).toBe(10);
    expect(subtract_u7x6u(0, 5)).toBe(-5);
  });
});
