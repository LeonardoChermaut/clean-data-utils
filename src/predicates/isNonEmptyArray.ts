/**
 * Checks if a value is a non-empty array.
 * @param value The value to check.
 * @returns True if the value is a non-empty array, false otherwise.
 * @example
 * ```ts
 * const value = [1, 2, 3];
 * const isNonEmpty = isNonEmptyArray(value);
 * console.log(isNonEmpty);
 * // Output: true
 * ```
 */
export const isNonEmptyArray = <TValue>(value: unknown): value is TValue[] =>
  Array.isArray(value) && value.length > 0;
