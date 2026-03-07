import { subtract_ungea } from '../src/subtract_ungea';

describe('subtract_ungea', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_ungea(10, 3)).toBe(7);
  });

  it('should handle subtraction resulting in negative numbers', () => {
    expect(subtract_ungea(5, 8)).toBe(-3);
  });

  it('should handle zero values', () => {
    expect(subtract_ungea(10, 0)).toBe(10);
    expect(subtract_ungea(0, 5)).toBe(-5);
  });
});
