import { multiply_nuogg } from '../src/multiply_nuogg';

describe('multiply_nuogg', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_nuogg(3, 4)).toBe(12);
  });

  it('should return zero when multiplied by zero', () => {
    expect(multiply_nuogg(5, 0)).toBe(0);
    expect(multiply_nuogg(0, 7)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(multiply_nuogg(-3, 4)).toBe(-12);
    expect(multiply_nuogg(-3, -4)).toBe(12);
  });
});
