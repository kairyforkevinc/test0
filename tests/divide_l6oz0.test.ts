import { divide_l6oz0 } from '../src/divide_l6oz0';

describe('divide_l6oz0', () => {
  it('should return the quotient of two positive numbers', () => {
    const result = divide_l6oz0(10, 2);
    expect(result).toBe(5);
  });

  it('should handle division with negative numbers', () => {
    expect(divide_l6oz0(-10, 2)).toBe(-5);
    expect(divide_l6oz0(10, -2)).toBe(-5);
    expect(divide_l6oz0(-10, -2)).toBe(5);
  });

  it('should handle decimal results', () => {
    const result = divide_l6oz0(7, 2);
    expect(result).toBe(3.5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide_l6oz0(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide_l6oz0(0, 0)).toThrow('Cannot divide by zero');
  });

  it('should return zero when dividend is zero (and divisor is not)', () => {
    expect(divide_l6oz0(0, 5)).toBe(0);
  });
});
