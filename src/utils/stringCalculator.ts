export function add(numbers: string): number {
  // If the input is an empty string, return 0
  if (numbers.trim() === '') return 0;
  // If the input is a single number, return that number as an integer
  const parts = numbers.split(',');
  // If the input contains multiple numbers, return their sum
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}
