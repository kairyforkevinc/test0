import { greet } from './utils';

describe('greet', () => {
  it('should return greeting with the provided name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should return greeting with different names', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
    expect(greet('Bob')).toBe('Hello, Bob!');
  });

  it('should throw error for empty string', () => {
    expect(() => greet('')).toThrow('Name cannot be empty or whitespace');
  });

  it('should throw error for whitespace-only string', () => {
    expect(() => greet('   ')).toThrow('Name cannot be empty or whitespace');
    expect(() => greet('\t')).toThrow('Name cannot be empty or whitespace');
    expect(() => greet('\n')).toThrow('Name cannot be empty or whitespace');
  });
});
