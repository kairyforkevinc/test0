import { subtract_fyizk } from '../src/subtract_fyizk';

describe('subtract_fyizk', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_fyizk(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_fyizk(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_fyizk(0, 5)).toBe(-5);
    expect(subtract_fyizk(5, 0)).toBe(5);
  });
});
