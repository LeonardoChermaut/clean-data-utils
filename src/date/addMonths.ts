import { isValidDate } from "./isValidDate";

/**
 * Adds a specified number of months to a date.
 * @param sourceDate - The date to add months to.
 * @param numberOfMonths - Number of months to add (can be negative for subtraction).
 * @returns A new Date object with the months added, or null if the input is invalid.
 * @example
 * ```ts
 * addMonths(new Date("2024-01-15"), 2);
 * // Output: Date object for Mar 15, 2024
 * ```
 * @example
 * ```ts
 * addMonths(new Date("2024-12-15"), 1);
 * // Output: Date object for Jan 15, 2025
 * ```
 */
export const addMonths = (sourceDate: Date, numberOfMonths: number): Date | null => {
  if (!isValidDate(sourceDate)) {
    return null;
  }

  const result = new Date(sourceDate);
  result.setMonth(result.getMonth() + numberOfMonths);

  return result;
};
