import { isValidDate } from "./isValidDate";

/**
 * Calculates the difference in days between two dates.
 * @param firstDate - The first date.
 * @param secondDate - The second date.
 * @returns The absolute difference in days, or null if either date is invalid.
 * @example
 * ```ts
 * differenceInDays(new Date("2024-01-15"), new Date("2024-01-10"));
 * // Output: 5
 * ```
 * @example
 * ```ts
 * differenceInDays(new Date("2024-01-10"), new Date("2024-01-15"));
 * // Output: 5
 * ```
 */
export const differenceInDays = (firstDate: Date, secondDate: Date): number | null => {
  if (!isValidDate(firstDate) || !isValidDate(secondDate)) {
    return null;
  }

  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = firstDate.getTime() - secondDate.getTime();

  return Math.floor(Math.abs(differenceInMilliseconds) / oneDayInMilliseconds);
};
