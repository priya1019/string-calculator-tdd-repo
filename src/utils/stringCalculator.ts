export function add(numbers: string): number {
  // If the input is an empty string, return 0
  if (numbers.trim() === '') return 0;
  // If the input is a single number, return that number
  return parseInt(numbers);
}
