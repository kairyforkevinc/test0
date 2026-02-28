import { greet_mm6kyz92 } from '../src/greet_mm6kyz92';

describe('greet_mm6kyz92', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_mm6kyz92('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_mm6kyz92('Alice')).toBe('Hello, Alice!');
    expect(greet_mm6kyz92('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_mm6kyz92('')).toBe('Hello, !');
  });
});
