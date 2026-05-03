/**
 * Checks if a date is after another date.
 * @param sourceDate - The date to check.
 * @param referenceDate - The reference date to compare against.
 * @returns True if source is after reference, false otherwise.
 * @example
 * ```ts
 * const result = isDateAfter(new Date("2024-01-15"), new Date("2024-01-10"));
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isDateAfter(new Date("2024-01-10"), new Date("2024-01-15"));
 * console.log(result);
 * // Output: false
 * ```
 */
export const isDateAfter = (sourceDate: Date, referenceDate: Date): boolean =>
  sourceDate.getTime() > referenceDate.getTime();
