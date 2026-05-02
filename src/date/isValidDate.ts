/**
 * Validates if a value is a valid Date object or can be parsed into one.
 * @param value - The value to validate.
 * @returns True if the value is a valid date, false otherwise.
 * @example
 * ```ts
 * isValidDate(new Date("2024-01-01"));
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidDate("invalid-date");
 * // Output: false
 * ```
 */
export const isValidDate = (value: unknown): value is Date => {
  if (value instanceof Date) {
    return !Number.isNaN(value.getTime());
  }

  if (typeof value === "string" || typeof value === "number") {
    const timestamp = new Date(value).getTime();
    return !Number.isNaN(timestamp);
  }

  return false;
};
