import { add_4r8xd } from '../src/add_4r8xd';

describe('add_4r8xd', () => {
  it('should return the sum of two positive numbers', () => {
    const result = add_4r8xd(5, 7);
    expect(result).toBe(12);
  });

  it('should return the sum of a negative and positive number', () => {
    const result = add_4r8xd(-3, 8);
    expect(result).toBe(5);
  });

  it('should handle zero values', () => {
    expect(add_4r8xd(0, 10)).toBe(10);
    expect(add_4r8xd(15, 0)).toBe(15);
  });
});
