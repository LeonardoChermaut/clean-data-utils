/**
 * Gets the first element from an array.
 * This function is useful for retrieving the first item in a list.
 * @param values The array to get the first element from.
 * @returns The first element of the array, or undefined if the array is empty or invalid.
 * @example
 * ```ts
 * const values = [1, 2, 3, 4, 5];
 * const firstValue = getFirstElementFromArray(values);
 * console.log(firstValue);
 * // Output: 1
 * ```
 */
export const getFirstElementFromArray = <TElement>(
  values: TElement[] | null | undefined,
): TElement | undefined => {
  if (!values || values.length === 0) {
    return undefined;
  }

  return values[0];
};
