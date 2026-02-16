import { subtract_m25pw } from '../src/subtract_m25pw';

describe('subtract_m25pw', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_m25pw(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_m25pw(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_m25pw(10, 0)).toBe(10);
    expect(subtract_m25pw(0, 5)).toBe(-5);
  });
});
