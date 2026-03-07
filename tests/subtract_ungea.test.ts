import { subtract_ungea } from '../src/subtract_ungea';

describe('subtract_ungea', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_ungea(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_ungea(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_ungea(0, 5)).toBe(-5);
    expect(subtract_ungea(5, 0)).toBe(5);
  });
});
