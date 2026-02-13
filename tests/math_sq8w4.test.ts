import { calculate_sq8w4, multiply_sq8w4 } from '../src/math_sq8w4';

describe('calculate_sq8w4', () => {
  it('should return the sum of two positive numbers', () => {
    const result = calculate_sq8w4(3, 5);
    expect(result).toBe(8);
  });

  it('should return the sum of negative and positive numbers', () => {
    const result = calculate_sq8w4(-2, 7);
    expect(result).toBe(5);
  });

  it('should handle zero correctly', () => {
    expect(calculate_sq8w4(0, 5)).toBe(5);
    expect(calculate_sq8w4(10, 0)).toBe(10);
  });
});

describe('multiply_sq8w4', () => {
  it('should return the product of two positive numbers', () => {
    const result = multiply_sq8w4(3, 5);
    expect(result).toBe(15);
  });

  it('should return the product of negative and positive numbers', () => {
    const result = multiply_sq8w4(-2, 7);
    expect(result).toBe(-14);
  });

  it('should handle zero correctly', () => {
    expect(multiply_sq8w4(0, 5)).toBe(0);
    expect(multiply_sq8w4(10, 0)).toBe(0);
  });

  it('should handle multiplication of two negative numbers', () => {
    const result = multiply_sq8w4(-3, -4);
    expect(result).toBe(12);
  });
});
