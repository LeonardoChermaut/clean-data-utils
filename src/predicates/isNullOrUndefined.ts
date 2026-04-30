/**
 * Checks if a value is null or undefined.
 * This function is useful for filtering out null or undefined values from an array or object.
 * @param value The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 * @example
 * ```ts
 * const value = null;
 * const isNull = isNullOrUndefined(value);
 * console.log(isNull);
 * // Output: true
 * ```
 */
export const isNullOrUndefined = <ValueType>(
  value: ValueType | null | undefined,
): value is null | undefined => value === null || value === undefined;
