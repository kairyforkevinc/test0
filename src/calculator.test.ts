import { add, subtract, multiply } from './calculator';

describe('Calculator Utilities', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
    });

    it('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
      expect(add(-10, 5)).toBe(-5);
    });

    it('should add zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    it('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => add('5' as any, 3)).toThrow('Both arguments must be numbers');
      expect(() => add(5, null as any)).toThrow('Both arguments must be numbers');
    });

    it('should throw error for infinite values', () => {
      expect(() => add(Infinity, 5)).toThrow('Arguments must be finite numbers');
      expect(() => add(5, -Infinity)).toThrow('Arguments must be finite numbers');
    });

    it('should throw error for NaN', () => {
      expect(() => add(NaN, 5)).toThrow('Arguments must be finite numbers');
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(20, 10)).toBe(10);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(-10, 5)).toBe(-15);
      expect(subtract(10, -5)).toBe(15);
    });

    it('should subtract zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => subtract('5' as any, 3)).toThrow('Both arguments must be numbers');
      expect(() => subtract(5, undefined as any)).toThrow('Both arguments must be numbers');
    });

    it('should throw error for infinite values', () => {
      expect(() => subtract(Infinity, 5)).toThrow('Arguments must be finite numbers');
      expect(() => subtract(5, -Infinity)).toThrow('Arguments must be finite numbers');
    });

    it('should throw error for NaN', () => {
      expect(() => subtract(NaN, 5)).toThrow('Arguments must be finite numbers');
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(10, 5)).toBe(50);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
      expect(multiply(-10, 5)).toBe(-50);
      expect(multiply(10, -5)).toBe(-50);
    });

    it('should multiply by zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    it('should multiply by one', () => {
      expect(multiply(1, 5)).toBe(5);
      expect(multiply(5, 1)).toBe(5);
    });

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 2)).toBe(5);
      expect(multiply(0.5, 0.5)).toBe(0.25);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => multiply('5' as any, 3)).toThrow('Both arguments must be numbers');
      expect(() => multiply(5, {} as any)).toThrow('Both arguments must be numbers');
    });

    it('should throw error for infinite values', () => {
      expect(() => multiply(Infinity, 5)).toThrow('Arguments must be finite numbers');
      expect(() => multiply(5, -Infinity)).toThrow('Arguments must be finite numbers');
    });

    it('should throw error for NaN', () => {
      expect(() => multiply(NaN, 5)).toThrow('Arguments must be finite numbers');
    });
  });
});
