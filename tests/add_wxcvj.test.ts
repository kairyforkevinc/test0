import { add_wxcvj } from '../src/add_wxcvj';

describe('add_wxcvj', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add_wxcvj(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = add_wxcvj(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_wxcvj(0, 10)).toBe(10);
    expect(add_wxcvj(15, 0)).toBe(15);
  });
});
