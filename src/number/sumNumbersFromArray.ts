/**
 * Sums all numbers in an array.
 * @param values The array of numbers to sum.
 * @returns The sum of all numbers.
 * @example
 * ```ts
 * const result = sumNumbersFromArray([1, 2, 3, 4, 5]);
 * console.log(result);
 * // Output: 15
 * ```
 */
export const sumNumbersFromArray = (values: number[]): number =>
  values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
