export function add(numbers: string): number {
  // If the input is an empty string, return 0
  if (numbers === '') return 0;

  let delimiter = /,|\n/;
  // Check for custom delimiter
  let numberString = numbers;

  if (numbers.startsWith('//')) {
    // Extract the custom delimiter and the number string
    const parts = numbers.split('\n');
    // The first part contains the custom delimiter
    delimiter = new RegExp(parts[0].slice(2));
    // The second part contains the numbers
    numberString = parts[1];
  }
  // Split the number string using the delimiter
  const splitNumbers = numberString.split(delimiter);
  const parsedNumbers = splitNumbers.map(Number);
  // Convert the split strings to numbers and filter out negatives
  const negatives = parsedNumbers.filter((n) => n < 0);
  // If there are any negative numbers, throw an error
  if (negatives.length > 0) {
    // Join the negative numbers into a string for the error message
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }
  // Return the sum of the numbers
  return parsedNumbers.reduce((sum, num) => sum + num, 0);
}
