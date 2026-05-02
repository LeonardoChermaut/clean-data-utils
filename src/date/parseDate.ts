import { isValidDate } from "./isValidDate";

/**
 * Parses a string or number into a Date object.
 * @param source - The value to parse (string, number, or Date).
 * @returns A valid Date object or null if parsing fails.
 * @example
 * ```ts
 * parseDate("2024-01-15");
 * // Output: Date object for Jan 15, 2024
 * ```
 * @example
 * ```ts
 * parseDate("invalid");
 * // Output: null
 * ```
 */
export const parseDate = (source: string | number | Date): Date | null => {
  if (source instanceof Date) {
    return isValidDate(source) ? source : null;
  }

  if (typeof source === "number") {
    const date = new Date(source);
    return isValidDate(date) ? date : null;
  }

  if (typeof source === "string") {
    const date = new Date(source);
    return isValidDate(date) ? date : null;
  }

  return null;
};
