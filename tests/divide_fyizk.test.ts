import { divide_fyizk } from '../src/divide_fyizk';

describe('divide_fyizk', () => {
  it('should return the quotient of two positive numbers', () => {
    expect(divide_fyizk(10, 2)).toBe(5);
  });

  it('should handle division with negative numbers', () => {
    expect(divide_fyizk(-10, 2)).toBe(-5);
    expect(divide_fyizk(10, -2)).toBe(-5);
    expect(divide_fyizk(-10, -2)).toBe(5);
  });

  it('should handle decimal results', () => {
    expect(divide_fyizk(7, 2)).toBe(3.5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide_fyizk(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide_fyizk(0, 0)).toThrow('Cannot divide by zero');
  });

  it('should return zero when dividend is zero', () => {
    expect(divide_fyizk(0, 5)).toBe(0);
  });
});
