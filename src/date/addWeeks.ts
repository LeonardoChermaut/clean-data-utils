import { addDays } from "./addDays";

/**
 * Adds or subtracts weeks from a date.
 * @param sourceDate - The date to modify.
 * @param weeks - Number of weeks to add (positive) or subtract (negative).
 * @returns A new date with weeks added.
 * @example
 * ```ts
 * const result = addWeeks(new Date("2024-01-10"), 1);
 * console.log(result);
 * // Output: Date for Jan 17, 2024
 * ```
 * @example
 * ```ts
 * const result = addWeeks(new Date("2024-01-10"), -2);
 * console.log(result);
 * // Output: Date for Dec 27, 2023
 * ```
 */
export const addWeeks = (sourceDate: Date, weeks: number): Date | null =>
  addDays(sourceDate, weeks * 7);
