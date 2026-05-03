/**
 * Checks if a number is odd.
 * @param value - The number to check.
 * @returns True if odd, false otherwise.
 * @example
 * ```ts
 * const result = isOddNumber(5);
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isOddNumber(4);
 * console.log(result);
 * // Output: false
 * ```
 */
export const isOddNumber = (value: number): boolean => value % 2 !== 0;
