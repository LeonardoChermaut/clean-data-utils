/**
 * Returns the date with time set to 23:59:59.999.
 * @param sourceDate - The date to modify.
 * @returns A new date with time at end of day.
 * @example
 * ```ts
 * const result = endOfDay(new Date("2024-01-15T10:30:00Z"));
 * console.log(result);
 * // Output: Date for 2024-01-15T23:59:59.999Z
 * ```
 */
export const endOfDay = (sourceDate: Date): Date => {
  const result = new Date(sourceDate);
  result.setHours(23, 59, 59, 999);

  return result;
};
