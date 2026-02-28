import { calculate_fwakg, multiply_fwakg } from '../src/math_fwakg';

describe('calculate_fwakg', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculate_fwakg(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(calculate_fwakg(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(calculate_fwakg(0, 10)).toBe(10);
    expect(calculate_fwakg(15, 0)).toBe(15);
  });
});

describe('multiply_fwakg', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiply_fwakg(3, 4)).toBe(12);
  });

  it('should handle negative numbers', () => {
    expect(multiply_fwakg(-3, 5)).toBe(-15);
    expect(multiply_fwakg(-2, -4)).toBe(8);
  });

  it('should return zero when either operand is zero', () => {
    expect(multiply_fwakg(0, 7)).toBe(0);
    expect(multiply_fwakg(9, 0)).toBe(0);
  });

  it('should return the same number when multiplied by one', () => {
    expect(multiply_fwakg(42, 1)).toBe(42);
    expect(multiply_fwakg(1, 99)).toBe(99);
  });
});
