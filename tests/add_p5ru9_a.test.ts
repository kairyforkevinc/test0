import { add_p5ru9_a } from '../src/add_p5ru9_a';

describe('add_p5ru9_a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_p5ru9_a(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add_p5ru9_a(-1, 4)).toBe(3);
    expect(add_p5ru9_a(-2, -3)).toBe(-5);
  });

  it('should handle zero values', () => {
    expect(add_p5ru9_a(0, 0)).toBe(0);
    expect(add_p5ru9_a(7, 0)).toBe(7);
  });
});
