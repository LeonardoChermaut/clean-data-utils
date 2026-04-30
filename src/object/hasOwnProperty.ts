/**
 * Checks if an object has a property (regardless of its value).
 * @param sourceObject The object to check.
 * @param key The key to check.
 * @returns True if the object has the key.
 * @example
 * ```ts
 * const obj = { a: 42 };
 * console.log(hasOwnProperty(obj, 'a'));
 * // Output: true
 * ```
 */
export const hasOwnProperty = <TObject extends Record<string, unknown>, TKey extends PropertyKey>(
  sourceObject: TObject,
  key: TKey,
): key is Extract<TKey, keyof TObject> => key in sourceObject;
