/**
 * Filters object keys using a predicate function.
 * @param sourceObject The object to filter keys from.
 * @param predicate The function to test each key.
 * @returns A new object containing only the keys that pass the test.
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3, ab: 4 };
 * const result = filterObjectKeys(obj, (key) => key.length === 1);
 * console.log(result);
 * // Output: { a: 1, b: 2, c: 3 }
 * ```
 */
export const filterObjectKeys = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  predicate: (key: string) => boolean,
): Partial<TObject> => {
  const entries = Object.entries(sourceObject) as Array<[keyof TObject, TObject[keyof TObject]]>;
  const result: Partial<TObject> = {};

  for (const [key, value] of entries) {
    if (predicate(key as string)) {
      result[key] = value as TObject[keyof TObject];
    }
  }

  return result;
};
