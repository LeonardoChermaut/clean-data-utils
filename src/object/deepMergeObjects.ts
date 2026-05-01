/**
 * Deeply merges two or more objects. Arrays are replaced, not concatenated.
 * Returns a new object; does not mutate the originals.
 * @param firstObject - The first object to merge.
 * @param secondObject - The second object to merge.
 * @returns A new object with the merged properties.
 * @example
 * ```ts
 * const result = deepMergeObjects({ a: 1 }, { b: 2 });
 * console.log(result);
 * // Output: { a: 1, b: 2 }
 * ```
 * @example
 * ```ts
 * const result = deepMergeObjects({ a: { b: 1 } }, { a: { c: 2 } });
 * console.log(result);
 * // Output: { a: { b: 1, c: 2 } }
 * ```
 * @example
 * ```ts
 * const result = deepMergeObjects({ a: [1, 2] }, { a: [3] });
 * console.log(result);
 * // Output: { a: [3] } (arrays replaced, not concatenated)
 * ```
 */
export const deepMergeObjects = <
  TFirst extends Record<string, unknown>,
  TSecond extends Record<string, unknown>,
>(
  firstObject: TFirst,
  secondObject: TSecond,
): TFirst & TSecond => {
  const result = { ...firstObject } as Record<string, unknown>;

  for (const key of Object.keys(secondObject)) {
    const firstValue = result[key];
    const secondValue = secondObject[key as keyof TSecond];

    if (
      firstValue !== null &&
      secondValue !== null &&
      typeof firstValue === "object" &&
      typeof secondValue === "object" &&
      !Array.isArray(firstValue) &&
      !Array.isArray(secondValue)
    ) {
      result[key] = deepMergeObjects(
        firstValue as Record<string, unknown>,
        secondValue as Record<string, unknown>,
      );
    } else {
      result[key] = secondValue;
    }
  }

  return result as TFirst & TSecond;
};
