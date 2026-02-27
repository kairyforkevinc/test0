import { greet_i228 } from '../src/greet_i228';

describe('greet_i228', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_i228('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_i228('Alice')).toBe('Hello, Alice!');
    expect(greet_i228('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_i228('')).toBe('Hello, !');
  });
});
