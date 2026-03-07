import { subtract_bwv2l_c } from '../src/subtract_bwv2l_c';

describe('subtract_bwv2l_c', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_bwv2l_c(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_bwv2l_c(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_bwv2l_c(0, 5)).toBe(-5);
    expect(subtract_bwv2l_c(5, 0)).toBe(5);
  });
});
