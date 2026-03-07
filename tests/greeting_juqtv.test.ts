import { greet_juqtv } from '../src/greeting_juqtv';

describe('greet_juqtv', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_juqtv('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet_juqtv('')).toBe('Hello, !');
  });

  it('should handle name with spaces', () => {
    expect(greet_juqtv('John Doe')).toBe('Hello, John Doe!');
  });
});
