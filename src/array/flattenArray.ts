/**
 * Flattens a nested array by one level.
 * @param values The nested array to flatten.
 * @returns A new flattened array.
 * @example
 * ```ts
 * const nested = [[1, 2], [3, 4], [5]];
 * const flattened = flattenArray(nested);
 * console.log(flattened);
 * // Output: [1, 2, 3, 4, 5]
 * ```
 */
export const flattenArray = <TElement>(
  values: TElement[][],
): TElement[] => values.flat();