import { subtract_4r8xd } from '../src/subtract_4r8xd';

describe('subtract_4r8xd', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_4r8xd(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_4r8xd(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_4r8xd(10, 0)).toBe(10);
    expect(subtract_4r8xd(0, 5)).toBe(-5);
  });
});
