import { add_l6oz0 } from '../src/add_l6oz0';

describe('add_l6oz0', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add_l6oz0(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = add_l6oz0(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_l6oz0(0, 10)).toBe(10);
    expect(add_l6oz0(15, 0)).toBe(15);
  });
});
