import { multiply_fyizk } from '../src/multiply_fyizk';

describe('multiply_fyizk', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_fyizk(4, 5)).toBe(20);
  });

  it('should handle negative numbers', () => {
    expect(multiply_fyizk(-3, 7)).toBe(-21);
  });

  it('should handle zero values', () => {
    expect(multiply_fyizk(0, 100)).toBe(0);
    expect(multiply_fyizk(99, 0)).toBe(0);
  });
});
