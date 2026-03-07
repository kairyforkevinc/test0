import { add_qwu48_a } from '../src/add_qwu48_a';

describe('add_qwu48_a', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add_qwu48_a(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = add_qwu48_a(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_qwu48_a(0, 10)).toBe(10);
    expect(add_qwu48_a(15, 0)).toBe(15);
  });
});
