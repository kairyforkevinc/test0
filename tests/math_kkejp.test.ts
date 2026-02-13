import { add, subtract, multiply, divide, calculate_kkejp } from '../src/math_kkejp';

describe('Math Operations', () => {
  describe('add', () => {
    it('should return the sum of two positive numbers', () => {
      expect(add(5, 7)).toBe(12);
    });

    it('should return the sum of a negative and positive number', () => {
      expect(add(-3, 8)).toBe(5);
    });

    it('should handle zero values', () => {
      expect(add(0, 10)).toBe(10);
      expect(add(15, 0)).toBe(15);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    it('should handle negative results', () => {
      expect(subtract(5, 8)).toBe(-3);
    });

    it('should handle zero values', () => {
      expect(subtract(10, 0)).toBe(10);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
      expect(multiply(-2, -5)).toBe(10);
    });

    it('should handle zero multiplication', () => {
      expect(multiply(0, 10)).toBe(0);
      expect(multiply(15, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    it('should handle negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('calculate_kkejp (legacy)', () => {
    it('should still work for backward compatibility', () => {
      expect(calculate_kkejp(5, 7)).toBe(12);
    });

    it('should return the sum of a negative and positive number', () => {
      expect(calculate_kkejp(-3, 8)).toBe(5);
    });

    it('should handle zero values', () => {
      expect(calculate_kkejp(0, 10)).toBe(10);
      expect(calculate_kkejp(15, 0)).toBe(15);
    });
  });
});
