import { subtract_l6oz0 } from '../src/subtract_l6oz0';

describe('subtract_l6oz0', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_l6oz0(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_l6oz0(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_l6oz0(10, 0)).toBe(10);
    expect(subtract_l6oz0(0, 5)).toBe(-5);
  });
});
