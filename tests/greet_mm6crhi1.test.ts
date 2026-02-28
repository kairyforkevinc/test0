import { greet_mm6crhi1 } from '../src/greet_mm6crhi1';

describe('greet_mm6crhi1', () => {
  it('should return a greeting message with the provided name', () => {
    expect(greet_mm6crhi1('World')).toBe('Hello, World!');
  });

  it('should handle different names correctly', () => {
    expect(greet_mm6crhi1('Alice')).toBe('Hello, Alice!');
    expect(greet_mm6crhi1('Bob')).toBe('Hello, Bob!');
  });

  it('should handle empty string', () => {
    expect(greet_mm6crhi1('')).toBe('Hello, !');
  });

  it('should handle special characters', () => {
    expect(greet_mm6crhi1("O'Brien")).toBe("Hello, O'Brien!");
    expect(greet_mm6crhi1('José')).toBe('Hello, José!');
    expect(greet_mm6crhi1('<script>')).toBe('Hello, <script>!');
  });
});
