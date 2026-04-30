/**
 * Checks if a value is truthy.
 * This function is useful for filtering out falsy values from an array or object.
 * @param value The value to check.
 * @returns True if the value is truthy, false otherwise.
 * @example
 * ```ts
 * const value = 1;
 * const isTruthy = isTruthyValue(value);
 * console.log(isTruthy);
 * // Output: true
 * ```
 */
export const isTruthyValue = <T>(
  value: T | null | undefined | false | 0 | "",
): value is NonNullable<T> => Boolean(value);