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
const isTruthyValue = <ValueType>(
  value: ValueType | null | undefined | false | 0 | "",
): value is NonNullable<ValueType> => {
  return Boolean(value);
};

export { isTruthyValue };
