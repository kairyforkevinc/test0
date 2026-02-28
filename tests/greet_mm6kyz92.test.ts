import { greet_mm6kyz92 } from '../src/greet_mm6kyz92';

describe('greet_mm6kyz92', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_mm6kyz92('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_mm6kyz92('Alice')).toBe('Hello, Alice!');
    expect(greet_mm6kyz92('Bob')).toBe('Hello, Bob!');
  });

  it('should throw for empty string', () => {
    expect(() => greet_mm6kyz92('')).toThrow('Name cannot be empty');
  });

  it('should throw for whitespace-only string', () => {
    expect(() => greet_mm6kyz92('   ')).toThrow('Name cannot be empty');
  });

  it('should throw for null', () => {
    expect(() => greet_mm6kyz92(null as unknown as string)).toThrow('Name cannot be empty');
  });

  it('should throw for undefined', () => {
    expect(() => greet_mm6kyz92(undefined as unknown as string)).toThrow('Name cannot be empty');
  });
});
