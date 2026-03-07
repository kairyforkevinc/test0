import { subtract_p5ru9_c } from '../src/subtract_p5ru9_c';

describe('subtract_p5ru9_c', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_p5ru9_c(10, 3)).toBe(7);
  });

  it('should handle negative results', () => {
    expect(subtract_p5ru9_c(3, 10)).toBe(-7);
  });

  it('should handle zero values', () => {
    expect(subtract_p5ru9_c(0, 5)).toBe(-5);
    expect(subtract_p5ru9_c(5, 0)).toBe(5);
  });
});
