import { greet } from '../src/greet';

describe('greet', () => {
  it('should return a greeting message with the provided name', () => {
    const result = greet('World');
    expect(result).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle special characters', () => {
    expect(greet('O\'Brien')).toBe("Hello, O'Brien!");
    expect(greet('José')).toBe('Hello, José!');
    expect(greet('<script>')).toBe('Hello, <script>!');
  });
});
