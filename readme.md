# String Calculator TDD Kata

This is a Test-Driven Development (TDD) implementation of the String Calculator kata for Incubyte's assessment.

## Overview

A simple string calculator that can add numbers from a string input, supporting various delimiters and validation rules.

## Features

✅ **Step 1**: Basic addition with comma-separated numbers  
✅ **Step 2**: Handle any amount of numbers  
✅ **Step 3**: Support newlines as delimiters  
✅ **Step 4**: Support custom delimiters  
✅ **Step 5**: Validate and reject negative numbers

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Usage

```javascript
const StringCalculator = require('./stringCalculator');
const calculator = new StringCalculator();

// Basic usage
calculator.add(''); // Returns: 0
calculator.add('1'); // Returns: 1
calculator.add('1,5'); // Returns: 6

// Multiple numbers
calculator.add('1,2,3,4,5'); // Returns: 15

// Newlines as delimiters
calculator.add('1\n2,3'); // Returns: 6

// Custom delimiters
calculator.add('//;\n1;2'); // Returns: 3
calculator.add('//|\n1|2|3'); // Returns: 6

// Negative numbers (throws exception)
calculator.add('-1'); // Throws: "negative numbers not allowed -1"
calculator.add('1,-2,3,-4'); // Throws: "negative numbers not allowed -2,-4"
```

## TDD Approach

This implementation follows strict Test-Driven Development principles:

1. **Red**: Write a failing test
2. **Green**: Write minimal code to pass the test
3. **Refactor**: Improve the code while keeping tests green

Each feature was developed incrementally with tests written first, followed by implementation.

## Test Coverage

The test suite includes:

- Basic functionality tests
- Multiple number handling
- Newline delimiter support
- Custom delimiter support
- Negative number validation
- Edge cases

All tests pass with 100% code coverage.

## Project Structure

```
.
├── package.json              # Project configuration
├── stringCalculator.js       # Main implementation
├── stringCalculator.test.js  # Test suite
└── README.md                # This file
```

## Technologies Used

- **JavaScript (Node.js)**: Programming language
- **Jest**: Testing framework
- **TDD**: Development methodology
