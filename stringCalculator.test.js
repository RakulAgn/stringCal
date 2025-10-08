const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

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

  describe('Step 2: Handle multiple numbers', () => {
    test('should handle three numbers', () => {
      expect(calculator.add('1,2,3')).toBe(6);
    });

    test('should handle many numbers', () => {
      expect(calculator.add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
    });
  });

  describe('Step 3: Handle newlines as delimiters', () => {
    test('should handle newline as delimiter', () => {
      expect(calculator.add('1\n2,3')).toBe(6);
    });

    test('should handle multiple newlines', () => {
      expect(calculator.add('1\n2\n3')).toBe(6);
    });

    test('should handle mixed delimiters', () => {
      expect(calculator.add('1,2\n3,4\n5')).toBe(15);
    });
  });

  describe('Step 4: Support custom delimiters', () => {
    test('should support semicolon as custom delimiter', () => {
      expect(calculator.add('//;\n1;2')).toBe(3);
    });

    test('should support pipe as custom delimiter', () => {
      expect(calculator.add('//|\n1|2|3')).toBe(6);
    });

    test('should support asterisk as custom delimiter', () => {
      expect(calculator.add('//*\n1*2*3')).toBe(6);
    });

    test('should support dot as custom delimiter', () => {
      expect(calculator.add('//.\n1.2.3')).toBe(6);
    });
  });

  describe('Step 5: Negative number validation', () => {
    test('should throw exception for single negative number', () => {
      expect(() => calculator.add('-1')).toThrow('negative numbers not allowed -1');
    });

    test('should throw exception for multiple negative numbers', () => {
      expect(() => calculator.add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
    });

    test('should throw exception with custom delimiter and negative numbers', () => {
      expect(() => calculator.add('//;\n1;-2;3')).toThrow('negative numbers not allowed -2');
    });

    test('should throw exception showing all negative numbers', () => {
      expect(() => calculator.add('-1,-2,-3')).toThrow('negative numbers not allowed -1,-2,-3');
    });
  });

  describe('Edge cases', () => {
    test('should handle single zero', () => {
      expect(calculator.add('0')).toBe(0);
    });

    test('should handle zeros in sequence', () => {
      expect(calculator.add('0,0,0')).toBe(0);
    });

    test('should handle large numbers', () => {
      expect(calculator.add('100,200,300')).toBe(600);
    });
  });
});
