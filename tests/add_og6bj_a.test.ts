import { add_og6bj_a } from '../src/add_og6bj_a';

describe('add_og6bj_a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_og6bj_a(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add_og6bj_a(-1, 4)).toBe(3);
    expect(add_og6bj_a(-2, -3)).toBe(-5);
  });

  it('should handle zero values', () => {
    expect(add_og6bj_a(0, 0)).toBe(0);
    expect(add_og6bj_a(7, 0)).toBe(7);
  });
});
