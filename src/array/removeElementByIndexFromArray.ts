/**
 * Removes element(s) from an array by index or indices.
 * Returns a new array; does not mutate the original.
 * @param values - The array to remove from.
 * @param index - The index or indices to remove.
 * @returns A new array with the element(s) removed.
 * @example
 * ```ts
 * const result = removeElementByIndexFromArray([1, 2, 3, 4], 1);
 * console.log(result);
 * // Output: [1, 3, 4]
 * ```
 * @example
 * ```ts
 * const result = removeElementByIndexFromArray([1, 2, 3, 4], [0, 2]);
 * console.log(result);
 * // Output: [2, 4]
 * ```
 */
export const removeElementByIndexFromArray = <TData>(
  values: TData[],
  index: number | number[],
): TData[] => {
  const indices = Array.isArray(index) ? index : [index];
  const sortedIndices = [...indices].sort((leftIndex, rightIndex) => rightIndex - leftIndex);
  const result = [...values];

  for (const idx of sortedIndices) {
    if (idx >= 0 && idx < result.length) {
      result.splice(idx, 1);
    }
  }

  return result;
};
