import { greet_5kcy3 } from '../src/greeting_5kcy3';

describe('greet_5kcy3', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_5kcy3('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_5kcy3('Alice')).toBe('Hello, Alice!');
    expect(greet_5kcy3('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_5kcy3('')).toBe('Hello, !');
  });
});
