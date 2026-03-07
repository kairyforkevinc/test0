import { subtract_p5ru9_c } from '../src/subtract_p5ru9_c';

describe('subtract_p5ru9_c', () => {
  it('should return the difference of two positive numbers', () => {
    expect(subtract_p5ru9_c(5, 3)).toBe(2);
  });

  it('should handle negative numbers', () => {
    expect(subtract_p5ru9_c(-5, -3)).toBe(-2);
    expect(subtract_p5ru9_c(-5, 3)).toBe(-8);
  });

  it('should handle zero', () => {
    expect(subtract_p5ru9_c(0, 0)).toBe(0);
    expect(subtract_p5ru9_c(5, 0)).toBe(5);
  });
});
