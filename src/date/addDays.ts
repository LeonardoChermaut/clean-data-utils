import { isValidDate } from "./isValidDate";

/**
 * Adds a specified number of days to a date.
 * @param sourceDate - The date to add days to.
 * @param numberOfDays - Number of days to add (can be negative for subtraction).
 * @returns A new Date object with the days added, or null if the input is invalid.
 * @example
 * ```ts
 * addDays(new Date("2024-01-10"), 5);
 * // Output: Date object for Jan 15, 2024
 * ```
 * @example
 * ```ts
 * addDays(new Date("2024-01-10"), -3);
 * // Output: Date object for Jan 7, 2024
 * ```
 */
export const addDays = (sourceDate: Date, numberOfDays: number): Date | null => {
  if (!isValidDate(sourceDate)) {
    return null;
  }

  const result = new Date(sourceDate);
  result.setDate(result.getDate() + numberOfDays);

  return result;
};
