/**
 * Checks if a date is on a weekend (Saturday or Sunday).
 * Uses Gregorian calendar week.
 * @param sourceDate - The date to check.
 * @returns True if weekend, false otherwise.
 * @example
 * ```ts
 * const saturday = new Date("2024-01-13");
 * const result = isWeekend(saturday);
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const wednesday = new Date("2024-01-10");
 * const result = isWeekend(wednesday);
 * console.log(result);
 * // Output: false
 * ```
 */
export const isWeekend = (sourceDate: Date): boolean =>
  sourceDate.getDay() === 0 || sourceDate.getDay() === 6;
