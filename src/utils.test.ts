import { greet } from './utils';

describe('greet', () => {
  it('should return greeting with the provided name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should return greeting with different names', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});
