/**
 * Sorts an array of elements by the value extracted with the given getter.
 * Returns a new sorted array; does not mutate the original.
 * @param values - The array to sort.
 * @param getComparable - Function that extracts a comparable value from each element.
 * @param direction - 'asc' (default) or 'desc'.
 * @returns New sorted array.
 * @example
 * ```ts
 * const result = sortArrayByKey(
 *   [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }],
 *   (item) => item.name
 * );
 * console.log(result);
 * // Output: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
 * ```
 * @example
 * ```ts
 * const result = sortArrayByKey(
 *   [3, 1, 2],
 *   (x) => x,
 *   "desc"
 * );
 * console.log(result);
 * // Output: [3, 2, 1]
 * ```
 */
export const sortArrayByKey = <TData>(
  values: TData[],
  getComparable: (element: TData) => number | string | bigint,
  direction: "asc" | "desc" = "asc",
): TData[] => {
  const sorted = [...values].sort((leftElement, rightElement) => {
    const leftValue = getComparable(leftElement);
    const rightValue = getComparable(rightElement);

    if (leftValue < rightValue) {
      return direction === "asc" ? -1 : 1;
    }

    if (leftValue > rightValue) {
      return direction === "asc" ? 1 : -1;
    }

    return 0;
  });

  return sorted;
};
