/**
 * Transforms the values of an object while preserving its keys.
 * @param sourceObject The object to transform.
 * @param transformer Function to transform each value.
 * @returns A new object with transformed values.
 * @example
 * ```ts
 * const source = { a: 1, b: 2, c: 3 };
 * const result = mapObjectValues(source, (value) => value * 2);
 * console.log(result);
 * // Output: { a: 2, b: 4, c: 6 }
 * ```
 */
export const mapObjectValues = <TObject extends Record<string, unknown>, TResult>(
  sourceObject: TObject,
  transformer: (value: TObject[keyof TObject], key: keyof TObject) => TResult,
): Record<keyof TObject, TResult> => {
  const result = {} as Record<keyof TObject, TResult>;

  for (const key of Object.keys(sourceObject) as (keyof TObject)[]) {
    result[key] = transformer(sourceObject[key], key);
  }

  return result;
};
