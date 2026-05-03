/**
 * Checks if a date is before another date.
 * @param sourceDate - The date to check.
 * @param referenceDate - The reference date to compare against.
 * @returns True if source is before reference, false otherwise.
 * @example
 * ```ts
 * const result = isDateBefore(new Date("2024-01-10"), new Date("2024-01-15"));
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isDateBefore(new Date("2024-01-15"), new Date("2024-01-10"));
 * console.log(result);
 * // Output: false
 * ```
 */
export const isDateBefore = (sourceDate: Date, referenceDate: Date): boolean =>
  sourceDate.getTime() < referenceDate.getTime();
