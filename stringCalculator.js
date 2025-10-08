class StringCalculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }

    let delimiter = /[,\n]/;
    let numberString = numbers;

    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterEndIndex);
      delimiter = new RegExp(this.escapeRegex(customDelimiter));
      numberString = numbers.substring(delimiterEndIndex + 1);
    }

    const numberArray = numberString
      .split(delimiter)
      .map(num => parseInt(num, 10))
      .filter(num => !isNaN(num));

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;

/**
 *
 * 1. First Handle the Empty Values Properly
 * 2. Split By Delimiter (Comma,NewLine)
 * 3. Handle Custom Delimiters
 */
