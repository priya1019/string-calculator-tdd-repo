import { add } from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  it('returns the number itself for single number input', () => {
    expect(add('5')).toBe(5);
  });
  it('returns sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });
  it('returns sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });
  it('handles new lines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });
  it('supports custom delimiter using //;\\n format', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
  it('throws an error for negative numbers', () => {
    expect(() => add('1,-2,3,-5')).toThrow(
      'negative numbers not allowed: -2,-5',
    );
  });
});
