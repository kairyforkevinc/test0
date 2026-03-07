import { divide_ungea } from '../src/divide_ungea';

describe('divide_ungea', () => {
  it('should return the quotient of two positive numbers', () => {
    expect(divide_ungea(10, 2)).toBe(5);
  });

  it('should handle division with negative numbers', () => {
    expect(divide_ungea(-10, 2)).toBe(-5);
    expect(divide_ungea(10, -2)).toBe(-5);
  });

  it('should handle decimal results', () => {
    expect(divide_ungea(7, 2)).toBe(3.5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide_ungea(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divide_ungea(0, 0)).toThrow('Cannot divide by zero');
  });

  it('should return zero when dividend is zero', () => {
    expect(divide_ungea(0, 5)).toBe(0);
  });
});
