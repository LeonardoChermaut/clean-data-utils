/**
 * Recursively flattens an array of arbitrarily nested arrays.
 * @param values - The array to flatten deeply.
 * @returns A new flat array.
 * @example
 * ```ts
 * const result = flattenDeepArray([1, [2, [3, [4]]]]);
 * console.log(result);
 * // Output: [1, 2, 3, 4]
 * ```
 * @example
 * ```ts
 * const result = flattenDeepArray([["a", "b"], [["c"]]]);
 * console.log(result);
 * // Output: ["a", "b", "c"]
 * ```
 */
export const flattenDeepArray = <TData>(
  values: ReadonlyArray<TData | ReadonlyArray<unknown>>,
): TData[] => {
  const result: TData[] = [];
  const stack: unknown[] = [...values];

  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      stack.push(...(item as unknown[]));
    } else {
      result.push(item as TData);
    }
  }

  return result.reverse();
};
