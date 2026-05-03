/**
 * Moves an element from one index to another without mutating the original array.
 * @param values - The array to modify.
 * @param fromIndex - The source index of the element to move.
 * @param toIndex - The destination index where the element should be moved.
 * @returns A new array with the element moved.
 * @example
 * ```ts
 * const result = moveElementInArray([1, 2, 3, 4, 5], 0, 2);
 * console.log(result);
 * // Output: [2, 3, 1, 4, 5]
 * ```
 * @example
 * ```ts
 * const result = moveElementInArray(["a", "b", "c", "d"], 3, 1);
 * console.log(result);
 * // Output: ["a", "d", "b", "c"]
 * ```
 */
export const moveElementInArray = <TData>(
  values: TData[],
  fromIndex: number,
  toIndex: number,
): TData[] => {
  if (values.length === 0) {
    return [];
  }

  const clampedFrom = Math.max(0, Math.min(fromIndex, values.length - 1));
  const clampedTo = Math.max(0, Math.min(toIndex, values.length - 1));

  if (clampedFrom === clampedTo) {
    return [...values];
  }

  const result = [...values];
  const [removedElement] = result.splice(clampedFrom, 1);
  const elementToInsert = removedElement as TData;
  result.splice(clampedTo, 0, elementToInsert);

  return result;
};
