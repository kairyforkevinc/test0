import { subtract_w7ndf } from '../src/math_subtract_w7ndf';

describe('subtract_w7ndf', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_w7ndf(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_w7ndf(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_w7ndf(10, 0)).toBe(10);
    expect(subtract_w7ndf(0, 5)).toBe(-5);
  });
});
