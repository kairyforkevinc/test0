import { greet_jstdu } from '../src/greeting_jstdu';

describe('greet_jstdu', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_jstdu('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_jstdu('Alice')).toBe('Hello, Alice!');
    expect(greet_jstdu('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_jstdu('')).toBe('Hello, !');
  });
});
