import { add_wt6vj } from '../src/add_wt6vj';

describe('add_wt6vj', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_wt6vj(2, 3)).toBe(5);
  });

  it('should return the sum of negative numbers', () => {
    expect(add_wt6vj(-4, -6)).toBe(-10);
  });

  it('should handle zero', () => {
    expect(add_wt6vj(0, 7)).toBe(7);
    expect(add_wt6vj(5, 0)).toBe(5);
  });
});
