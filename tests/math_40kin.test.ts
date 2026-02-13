import { calculate_40kin, multiply_40kin } from '../src/math_40kin';

describe('calculate_40kin', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_40kin(10, 20);
    expect(result).toBe(30);
  });

  it('should return the sum of two negative numbers', () => {
    const result = calculate_40kin(-5, -10);
    expect(result).toBe(-15);
  });

  it('should handle zero values', () => {
    expect(calculate_40kin(10, 0)).toBe(10);
    expect(calculate_40kin(0, 5)).toBe(5);
  });

  it('should return the sum of a positive and negative number', () => {
    const result = calculate_40kin(10, -3);
    expect(result).toBe(7);
  });
});

describe('multiply_40kin', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_40kin(5, 6);
    expect(result).toBe(30);
  });

  it('should return the product of two negative numbers', () => {
    const result = multiply_40kin(-4, -3);
    expect(result).toBe(12);
  });

  it('should handle zero values', () => {
    expect(multiply_40kin(10, 0)).toBe(0);
    expect(multiply_40kin(0, 5)).toBe(0);
  });

  it('should return the product of a positive and negative number', () => {
    const result = multiply_40kin(8, -2);
    expect(result).toBe(-16);
  });
});
