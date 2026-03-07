import { divide_wt6vj } from '../src/divide_wt6vj';

describe('divide_wt6vj', () => {
  it('should return the quotient of two positive numbers', () => {
    expect(divide_wt6vj(10, 2)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(divide_wt6vj(-10, 2)).toBe(-5);
    expect(divide_wt6vj(10, -2)).toBe(-5);
    expect(divide_wt6vj(-10, -2)).toBe(5);
  });

  it('should handle decimal results', () => {
    expect(divide_wt6vj(7, 2)).toBe(3.5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide_wt6vj(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide_wt6vj(0, 0)).toThrow('Cannot divide by zero');
  });

  it('should return zero when dividend is zero', () => {
    expect(divide_wt6vj(0, 5)).toBe(0);
  });
});
