import { add_ungea } from '../src/add_ungea';

describe('add_ungea', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add_ungea(5, 7)).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    expect(add_ungea(-3, 8)).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_ungea(0, 10)).toBe(10);
    expect(add_ungea(15, 0)).toBe(15);
  });
});
