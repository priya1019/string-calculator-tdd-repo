export function add(numbers: string): number {
  // If the input is an empty string, return 0
  if (numbers === '') return 0;

  let delimiter = /,|\n/;
  // If the input starts with '//', it indicates a custom delimiter
  let numberString = numbers;
  if (numbers.startsWith('//')) {
    // Split the input to extract the custom delimiter and the number string
    const parts = numbers.split('\n');
    delimiter = new RegExp(parts[0].slice(2)); // Extract the custom delimiter
    numberString = parts[1]; // The rest is the number string
  }
  // Split the number string using the determined delimiter
  const splitNumbers = numberString.split(delimiter);
  // Convert the split strings to integers and sum them up
  return splitNumbers.reduce((sum, num) => sum + parseInt(num), 0);
}
