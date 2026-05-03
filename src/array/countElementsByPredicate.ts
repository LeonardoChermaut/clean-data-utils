/**
 * Counts elements that satisfy a predicate.
 * @param values - The array to count elements in.
 * @param predicate - The predicate function to test each element.
 * @returns The count of elements that satisfy the predicate.
 * @example
 * ```ts
 * const result = countElementsByPredicate([1, 2, 3, 4, 5], (n) => n > 2);
 * console.log(result);
 * // Output: 3
 * ```
 * @example
 * ```ts
 * const result = countElementsByPredicate(
 *   [{ active: true }, { active: false }, { active: true }],
 *   (item) => item.active
 * );
 * console.log(result);
 * // Output: 2
 * ```
 */
export const countElementsByPredicate = <TData>(
  values: TData[],
  predicate: (value: TData) => boolean,
): number => values.filter(predicate).length;
