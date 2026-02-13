import { divide_w7ndf } from '../src/math_divide_w7ndf';

describe('divide_w7ndf', () => {
  it('should return the quotient of two positive numbers', () => {
    const result = divide_w7ndf(10, 2);
    expect(result).toBe(5);
  });

  it('should handle division with negative numbers', () => {
    expect(divide_w7ndf(-10, 2)).toBe(-5);
    expect(divide_w7ndf(10, -2)).toBe(-5);
    expect(divide_w7ndf(-10, -2)).toBe(5);
  });

  it('should handle decimal results', () => {
    const result = divide_w7ndf(7, 2);
    expect(result).toBe(3.5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide_w7ndf(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide_w7ndf(0, 0)).toThrow('Cannot divide by zero');
  });

  it('should return zero when dividend is zero (and divisor is not)', () => {
    expect(divide_w7ndf(0, 5)).toBe(0);
  });
});
