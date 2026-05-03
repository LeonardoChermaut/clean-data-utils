/**
 * Converts hours to minutes.
 * @param hoursValue - The hours value to convert.
 * @returns The equivalent in minutes.
 * @example
 * ```ts
 * const result = convertHoursToMinutes(2);
 * console.log(result);
 * // Output: 120
 * ```
 * @example
 * ```ts
 * const result = convertHoursToMinutes(1.5);
 * console.log(result);
 * // Output: 90
 * ```
 */
export const convertHoursToMinutes = (hoursValue: number): number => Math.round(hoursValue * 60);
