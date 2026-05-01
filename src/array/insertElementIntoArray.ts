/**
 * Inserts an element into an array at a specific index.
 * Returns a new array; does not mutate the original.
 * @param values - The array to insert into.
 * @param index - The index at which to insert the element.
 * @param element - The element to insert.
 * @returns A new array with the element inserted.
 * @example
 * ```ts
 * const result = insertElementIntoArray([1, 2, 3], 1, 99);
 * console.log(result);
 * // Output: [1, 99, 2, 3]
 * ```
 * @example
 * ```ts
 * const result = insertElementIntoArray(["a", "b"], 0, "z");
 * console.log(result);
 * // Output: ["z", "a", "b"]
 * ```
 */
export const insertElementIntoArray = <TElement>(
  values: TElement[],
  index: number,
  element: TElement,
): TElement[] => {
  const safeIndex = Math.max(0, Math.min(index, values.length));
  const result = [...values];

  result.splice(safeIndex, 0, element);

  return result;
};
