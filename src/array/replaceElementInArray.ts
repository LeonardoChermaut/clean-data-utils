/**
 * Replaces an element at a specific index in an array.
 * Returns a new array; does not mutate the original.
 * @param values - The array to replace in.
 * @param index - The index of the element to replace.
 * @param newElement - The new element to place at the index.
 * @returns A new array with the element replaced.
 * @example
 * ```ts
 * const result = replaceElementInArray([1, 2, 3], 1, 99);
 * console.log(result);
 * // Output: [1, 99, 3]
 * ```
 * @example
 * ```ts
 * const result = replaceElementInArray(["a", "b", "c"], 0, "z");
 * console.log(result);
 * // Output: ["z", "b", "c"]
 * ```
 */
export const replaceElementInArray = <TElement>(
  values: TElement[],
  index: number,
  newElement: TElement,
): TElement[] => {
  if (index < 0 || index >= values.length) {
    return [...values];
  }

  const result = [...values];
  result[index] = newElement;

  return result;
};
