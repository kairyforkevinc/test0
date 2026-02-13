import { add_w7ndf } from '../src/math_add_w7ndf';

describe('add_w7ndf', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add_w7ndf(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = add_w7ndf(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_w7ndf(0, 10)).toBe(10);
    expect(add_w7ndf(15, 0)).toBe(15);
  });
});
