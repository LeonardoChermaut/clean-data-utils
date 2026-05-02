import { isValidDate } from "./isValidDate";

/**
 * Formats a Date object to a string using ISO 8601 format.
 * @param sourceDate - The date to format.
 * @returns Formatted date string in ISO format or empty string if invalid.
 * @example
 * ```ts
 * formatDate(new Date("2024-01-15T10:30:00Z"));
 * // Output: "2024-01-15"
 * ```
 * @example
 * ```ts
 * formatDate(new Date("2024-12-25T00:00:00Z"));
 * // Output: "2024-12-25"
 * ```
 */
export const formatDate = (sourceDate: Date): string => {
  if (!isValidDate(sourceDate)) {
    return "";
  }

  const year = sourceDate.getFullYear();
  const month = String(sourceDate.getMonth() + 1).padStart(2, "0");
  const day = String(sourceDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
