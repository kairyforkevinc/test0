import { add_bwv2l_a } from '../src/add_bwv2l_a';

describe('add_bwv2l_a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_bwv2l_a(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(add_bwv2l_a(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_bwv2l_a(0, 0)).toBe(0);
    expect(add_bwv2l_a(0, 8)).toBe(8);
  });
});
