import { subtract_nuogg } from '../src/subtract_nuogg';

describe('subtract_nuogg', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_nuogg(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_nuogg(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_nuogg(0, 5)).toBe(-5);
    expect(subtract_nuogg(5, 0)).toBe(5);
  });
});
