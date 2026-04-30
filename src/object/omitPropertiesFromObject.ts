/**
 * Omits specified properties from an object.
 * @param sourceObject The object to process.
 * @param excludedKeys The keys to omit.
 * @returns A new object without the specified keys.
 * @example
 * ```ts
 * const source = { a: 1, b: 2, c: 3 };
 * const result = omitPropertiesFromObject(source, ['b']);
 * console.log(result);
 * // Output: { a: 1, c: 3 }
 * ```
 */
export const omitPropertiesFromObject = <
  TObject extends Record<string, unknown>,
  TKey extends keyof TObject,
>(
  sourceObject: TObject,
  excludedKeys: TKey[],
): Omit<TObject, TKey> => {
  const result = { ...sourceObject } as unknown as Omit<TObject, TKey>;

  for (const key of excludedKeys) {
    delete result[key as unknown as keyof Omit<TObject, TKey>];
  }

  return result;
};
