/**
 * Returns the date with time set to 00:00:00.000.
 * @param sourceDate - The date to modify.
 * @returns A new date with time at start of day.
 * @example
 * ```ts
 * const result = startOfDay(new Date("2024-01-15T10:30:00Z"));
 * console.log(result);
 * // Output: Date for 2024-01-15T00:00:00.000Z
 * ```
 */
export const startOfDay = (sourceDate: Date): Date => {
  const result = new Date(sourceDate);
  result.setHours(0, 0, 0, 0);

  return result;
};
