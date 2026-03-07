import { greet_mmgm8eh4 } from '../src/greet_mmgm8eh4';

describe('greet_mmgm8eh4', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_mmgm8eh4('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet_mmgm8eh4('')).toBe('Hello, !');
  });

  it('should handle name with spaces', () => {
    expect(greet_mmgm8eh4('John Doe')).toBe('Hello, John Doe!');
  });

  it('should throw for null input', () => {
    expect(() => greet_mmgm8eh4(null)).toThrow('Name cannot be null or undefined');
  });

  it('should throw for undefined input', () => {
    expect(() => greet_mmgm8eh4(undefined)).toThrow('Name cannot be null or undefined');
  });
});
