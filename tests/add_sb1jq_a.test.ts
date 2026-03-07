import { add_sb1jq_a } from '../src/add_sb1jq_a';

describe('add_sb1jq_a', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_sb1jq_a(3, 4)).toBe(7);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(add_sb1jq_a(-5, 10)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_sb1jq_a(0, 8)).toBe(8);
    expect(add_sb1jq_a(12, 0)).toBe(12);
  });
});
