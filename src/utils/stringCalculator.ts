export function add(numbers: string): number {
  // If the input is an empty string, return 0
  if (numbers.trim() === '') return 0;
  // Replace new lines with commas and split by commas
  const normalized = numbers.replace(/\n/g, ',');
  // Split the string by commas and convert each part to an integer
  const parts = normalized.split(',');
  // Sum all the valid numbers and return the result
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}
