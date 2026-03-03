import { calculate_vtquj } from '../src/math_vtquj';

describe('calculate_vtquj', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_vtquj(2, 3)).toBe(5);
  });

  it('should return the sum of negative numbers', () => {
    expect(calculate_vtquj(-4, -6)).toBe(-10);
  });

  it('should handle zero', () => {
    expect(calculate_vtquj(0, 7)).toBe(7);
    expect(calculate_vtquj(5, 0)).toBe(5);
  });
});
