import { calculate_vtquj, multiply_vtquj } from '../src/math_vtquj';

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

describe('multiply_vtquj', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_vtquj(3, 4)).toBe(12);
  });

  it('should return the product of negative numbers', () => {
    expect(multiply_vtquj(-3, -5)).toBe(15);
  });

  it('should handle zero', () => {
    expect(multiply_vtquj(0, 9)).toBe(0);
    expect(multiply_vtquj(7, 0)).toBe(0);
  });
});
