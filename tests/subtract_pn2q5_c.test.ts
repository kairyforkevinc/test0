import { subtract_pn2q5_c } from '../src/subtract_pn2q5_c';

describe('subtract_pn2q5_c', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_pn2q5_c(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_pn2q5_c(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_pn2q5_c(0, 5)).toBe(-5);
    expect(subtract_pn2q5_c(5, 0)).toBe(5);
  });
});
