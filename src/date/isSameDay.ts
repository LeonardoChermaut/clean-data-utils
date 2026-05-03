/**
 * Checks if two dates are the same day (ignoring time).
 * @param firstDate - The first date to compare.
 * @param secondDate - The second date to compare.
 * @returns True if same day, false otherwise.
 * @example
 * ```ts
 * const result = isSameDay(new Date("2024-01-15T10:00:00Z"), new Date("2024-01-15T22:00:00Z"));
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isSameDay(new Date("2024-01-15"), new Date("2024-01-16"));
 * console.log(result);
 * // Output: false
 * ```
 */
export const isSameDay = (firstDate: Date, secondDate: Date): boolean =>
  firstDate.getFullYear() === secondDate.getFullYear() &&
  firstDate.getMonth() === secondDate.getMonth() &&
  firstDate.getDate() === secondDate.getDate();
