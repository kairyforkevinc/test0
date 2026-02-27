import { greet_i231 } from '../src/greet_i231';

describe('greet_i231', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_i231('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_i231('Alice')).toBe('Hello, Alice!');
    expect(greet_i231('Bob')).toBe('Hello, Bob!');
  });

  it('should throw an error for empty string', () => {
    expect(() => greet_i231('')).toThrow('Name must not be empty');
  });

  it('should throw an error for whitespace-only string', () => {
    expect(() => greet_i231('   ')).toThrow('Name must not be empty');
  });
});
