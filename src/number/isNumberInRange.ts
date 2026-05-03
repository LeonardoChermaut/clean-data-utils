/**
 * Checks if a number is within a range (inclusive).
 * @param value - The number to check.
 * @param minimum - The minimum value of the range.
 * @param maximum - The maximum value of the range.
 * @returns True if value is in range, false otherwise.
 * @example
 * ```ts
 * const result = isNumberInRange(5, 1, 10);
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isNumberInRange(0, 1, 10);
 * console.log(result);
 * // Output: false
 * ```
 */
export const isNumberInRange = (value: number, minimum: number, maximum: number): boolean =>
  value >= minimum && value <= maximum;
