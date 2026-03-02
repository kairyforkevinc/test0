import { greet_dq0jt } from '../src/greeting_dq0jt';

describe('greet_dq0jt', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_dq0jt('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_dq0jt('Alice')).toBe('Hello, Alice!');
    expect(greet_dq0jt('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_dq0jt('')).toBe('Hello, !');
  });
});
