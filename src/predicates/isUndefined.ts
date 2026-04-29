/**
 * Checks if the passed value is undefined.
 * @param value - The value to check.
 * @returns True if the value is undefined, false otherwise.
 * @example
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * isUndefined("42"); // false
 */
const isUndefined = <ValueType>(
  value: ValueType | undefined,
): value is undefined => value === undefined;

export { isUndefined };
