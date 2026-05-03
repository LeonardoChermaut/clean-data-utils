/**
 * Groups array elements by a key extracted from each element.
 * @param values The array to group.
 * @param keyExtractor Function to extract the grouping key from each element.
 * @returns An object with keys mapping to arrays of elements.
 * @example
 * ```ts
 * const items = [{ category: 'a', value: 1 }, { category: 'a', value: 2 }, { category: 'b', value: 3 }];
 * const grouped = groupArrayByKey(items, (item) => item.category);
 * console.log(grouped);
 * // Output: { a: [{ category: 'a', value: 1 }, { category: 'a', value: 2 }], b: [{ category: 'b', value: 3 }] }
 * ```
 */
export const groupArrayByKey = <TData, TKey extends string | number | symbol>(
  values: TData[],
  keyExtractor: (element: TData) => TKey,
): Record<TKey, TData[]> => {
  const result = {} as Record<TKey, TData[]>;

  for (const element of values) {
    const key = keyExtractor(element);
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(element);
  }

  return result;
};
