import { calculate_unufx } from '../src/math_unufx';

describe('calculate_unufx', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_unufx(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_unufx(-5, 10)).toBe(5);
  });

  it('should handle both zeros', () => {
    expect(calculate_unufx(0, 0)).toBe(0);
  });

  it('should handle both negative numbers', () => {
    expect(calculate_unufx(-3, -7)).toBe(-10);
  });

  it('should handle large numbers near MAX_SAFE_INTEGER', () => {
    expect(calculate_unufx(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  it('should handle decimal inputs with floating-point behavior', () => {
    expect(calculate_unufx(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
