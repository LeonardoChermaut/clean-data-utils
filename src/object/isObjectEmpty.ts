/**
 * Checks if an object has no own properties.
 * @param sourceObject - The object to check.
 * @returns True if the object has no own properties.
 * @example
 * ```ts
 * const result = isObjectEmpty({});
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isObjectEmpty({ a: 1 });
 * console.log(result);
 * // Output: false
 * ```
 */
export const isObjectEmpty = (sourceObject: object): sourceObject is Record<string, never> =>
  Object.keys(sourceObject).length === 0;
