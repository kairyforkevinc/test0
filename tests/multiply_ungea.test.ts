import { multiply_ungea } from '../src/multiply_ungea';

describe('multiply_ungea', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_ungea(4, 5)).toBe(20);
  });

  it('should handle negative numbers', () => {
    expect(multiply_ungea(-3, 7)).toBe(-21);
  });

  it('should handle zero values', () => {
    expect(multiply_ungea(0, 100)).toBe(0);
    expect(multiply_ungea(99, 0)).toBe(0);
  });
});
