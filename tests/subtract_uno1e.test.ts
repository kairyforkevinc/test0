import { subtract_uno1e } from '../src/subtract_uno1e';

describe('subtract_uno1e', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_uno1e(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_uno1e(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_uno1e(10, 0)).toBe(10);
    expect(subtract_uno1e(0, 5)).toBe(-5);
  });
});
