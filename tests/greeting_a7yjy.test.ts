import { greet_a7yjy } from '../src/greeting_a7yjy';

describe('greet_a7yjy', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_a7yjy('Alice')).toBe('Hello, Alice!');
  });

  it('should handle name with spaces', () => {
    expect(greet_a7yjy('John Doe')).toBe('Hello, John Doe!');
  });

  it('should handle single character name', () => {
    expect(greet_a7yjy('A')).toBe('Hello, A!');
  });
});
