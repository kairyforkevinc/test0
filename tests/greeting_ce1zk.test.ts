import { greet_ce1zk } from '../src/greeting_ce1zk';

describe('greet_ce1zk', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet_ce1zk('Alice')).toBe('Hello, Alice!');
  });

  it('should handle empty string', () => {
    expect(greet_ce1zk('')).toBe('Hello, !');
  });

  it('should handle name with spaces', () => {
    expect(greet_ce1zk('John Doe')).toBe('Hello, John Doe!');
  });
});
