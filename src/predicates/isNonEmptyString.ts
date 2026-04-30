/**
 * Checks if a value is a non-empty string.
 * @param value The value to check.
 * @returns True if the value is a non-empty string, false otherwise.
 * @example
 * ```ts
 * const value = "hello";
 * const isNonEmpty = isNonEmptyString(value);
 * console.log(isNonEmpty);
 * // Output: true
 * ```
 */
export const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;
