/**
 * Flips an object, swapping keys and values.
 * @param sourceObject The object to flip.
 * @returns A new object with keys as values and values as keys.
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = flipObject(obj);
 * console.log(result);
 * // Output: { 1: "a", 2: "b", 3: "c" }
 * ```
 */
export const flipObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(sourceObject)) {
    result[String(value)] = key;
  }

  return result;
};
