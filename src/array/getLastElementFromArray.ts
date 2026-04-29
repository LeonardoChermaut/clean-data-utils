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
const getLastElementFromArray = <ElementType>(
  values: ElementType[],
): ElementType | undefined => {
  return values[values.length - 1];
};

export { getLastElementFromArray };
