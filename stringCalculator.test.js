const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  // Basic test cases
  describe('Step 1: Basic functionality', () => {
    test('should return 0 for an empty string', () => {
      expect(calculator.add('')).toBe(0);
    });

    test('should return the number itself when given a single number', () => {
      expect(calculator.add('1')).toBe(1);
    });

    test('should return the sum of two comma-separated numbers', () => {
      expect(calculator.add('1,5')).toBe(6);
    });

    test('should return the sum of two comma-separated numbers', () => {
      expect(calculator.add('1,5,5')).toBe(11);
    });
  });
});
