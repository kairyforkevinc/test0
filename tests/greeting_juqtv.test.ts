import { greet_juqtv } from '../src/greeting_juqtv';

describe('greet_juqtv', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_juqtv('World')).toBe('Hello, World!');
  });

  it('should handle different names', () => {
    expect(greet_juqtv('Alice')).toBe('Hello, Alice!');
    expect(greet_juqtv('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_juqtv('')).toBe('Hello, !');
  });
});
