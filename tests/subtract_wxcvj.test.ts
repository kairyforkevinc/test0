import { subtract_wxcvj } from '../src/subtract_wxcvj';

describe('subtract_wxcvj', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_wxcvj(10, 3);
    expect(result).toBe(7);
  });

  it('should return a negative result when b is greater than a', () => {
    const result = subtract_wxcvj(3, 8);
    expect(result).toBe(-5);
  });

  it('should handle zero values', () => {
    expect(subtract_wxcvj(0, 10)).toBe(-10);
    expect(subtract_wxcvj(15, 0)).toBe(15);
  });
});
