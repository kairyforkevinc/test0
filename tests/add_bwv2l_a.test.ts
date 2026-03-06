import { add_bwv2l_a } from '../src/add_bwv2l_a';

describe('add_bwv2l_a', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add_bwv2l_a(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = add_bwv2l_a(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_bwv2l_a(0, 10)).toBe(10);
    expect(add_bwv2l_a(15, 0)).toBe(15);
  });
});
