/**
 * Gets the last element from an array.
 * This function is useful for retrieving the last item in a list.
 * @param values The array to get the last element from.
 * @returns The last element of the array, or undefined if the array is empty.
 * @example
 * ```ts
 * const values = [1, 2, 3, 4, 5];
 * const lastValue = getLastElementFromArray(values);
 * console.log(lastValue);
 * // Output: 5
 * ```
 */
export const getLastElementFromArray = <TElement>(
  values: TElement[],
): TElement | undefined =>
  values.length > 0 ? values[values.length - 1] : undefined;
