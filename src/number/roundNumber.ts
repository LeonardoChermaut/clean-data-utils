/**
 * Rounds a number to a specified number of decimal places.
 * @param value - The number to round.
 * @param decimalPlaces - The number of decimal places.
 * @returns The rounded number.
 * @example
 * ```ts
 * const result = roundNumber(3.14159, 2);
 * console.log(result);
 * // Output: 3.14
 * ```
 * @example
 * ```ts
 * const result = roundNumber(2.5, 0);
 * console.log(result);
 * // Output: 3
 * ```
 */
export const roundNumber = (value: number, decimalPlaces: number): number => {
  const factor = 10 ** decimalPlaces;

  return Math.round(value * factor) / factor;
};
