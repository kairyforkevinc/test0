import { subtract_wt6vj } from '../src/subtract_wt6vj';

describe('subtract_wt6vj', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_wt6vj(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_wt6vj(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_wt6vj(0, 5)).toBe(-5);
    expect(subtract_wt6vj(5, 0)).toBe(5);
  });
});
