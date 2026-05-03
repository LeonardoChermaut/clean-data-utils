/**
 * Counts the number of own properties in an object.
 * @param sourceObject - The object to count properties from.
 * @returns The number of own properties.
 * @example
 * ```ts
 * const result = countObjectKeys({ a: 1, b: 2, c: 3 });
 * console.log(result);
 * // Output: 3
 * ```
 * @example
 * ```ts
 * const result = countObjectKeys({});
 * console.log(result);
 * // Output: 0
 * ```
 */
export const countObjectKeys = (sourceObject: object): number => {
  return Object.keys(sourceObject).length;
};
