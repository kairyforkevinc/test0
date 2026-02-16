import { subtract_n0pvd } from '../src/subtract_n0pvd';

describe('subtract_n0pvd', () => {
  it('should return the difference of two positive numbers', () => {
    const result = subtract_n0pvd(10, 3);
    expect(result).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    const result = subtract_n0pvd(5, 8);
    expect(result).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_n0pvd(10, 0)).toBe(10);
    expect(subtract_n0pvd(0, 5)).toBe(-5);
  });
});
