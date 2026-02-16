import { divide_m25pw } from '../src/divide_m25pw';

describe('divide_m25pw', () => {
  it('should return the quotient of two positive numbers', () => {
    const result = divide_m25pw(10, 2);
    expect(result).toBe(5);
  });

  it('should handle division with negative numbers', () => {
    expect(divide_m25pw(-10, 2)).toBe(-5);
    expect(divide_m25pw(10, -2)).toBe(-5);
    expect(divide_m25pw(-10, -2)).toBe(5);
  });

  it('should handle decimal results', () => {
    const result = divide_m25pw(7, 2);
    expect(result).toBe(3.5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide_m25pw(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide_m25pw(0, 0)).toThrow('Cannot divide by zero');
  });

  it('should return zero when dividend is zero (and divisor is not)', () => {
    expect(divide_m25pw(0, 5)).toBe(0);
  });
});
