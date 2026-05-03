/**
 * Converts minutes to hours.
 * @param minutesValue - The minutes value to convert.
 * @returns The equivalent in hours.
 * @example
 * ```ts
 * const result = convertMinutesToHours(120);
 * console.log(result);
 * // Output: 2
 * ```
 * @example
 * ```ts
 * const result = convertMinutesToHours(90);
 * console.log(result);
 * // Output: 1.5
 * ```
 */
export const convertMinutesToHours = (minutesValue: number): number => minutesValue / 60;
