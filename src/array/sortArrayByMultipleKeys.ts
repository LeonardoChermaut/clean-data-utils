import { sortArrayByKey } from "./sortArrayByKey";

/**
 * Sorts an array by multiple keys with direction per key.
 * @param values - The array to sort.
 * @param criteria - Array of sort criteria with key extractor and direction.
 * @returns A new sorted array.
 * @example
 * ```ts
 * const result = sortArrayByMultipleKeys(
 *   [
 *     { name: "Charlie", age: 30 },
 *     { name: "Alice", age: 30 },
 *     { name: "Bob", age: 25 }
 *   ],
 *   [
 *     { getComparable: (item) => item.age, direction: "desc" },
 *     { getComparable: (item) => item.name, direction: "asc" }
 *   ]
 * );
 * console.log(result);
 * // Output: [{ name: "Alice", age: 30 }, { name: "Charlie", age: 30 }, { name: "Bob", age: 25 }]
 * ```
 * @example
 * ```ts
 * const result = sortArrayByMultipleKeys(
 *   [3, 1, 2, 1],
 *   [{ getComparable: (n) => n, direction: "asc" }]
 * );
 * console.log(result);
 * // Output: [1, 1, 2, 3]
 * ```
 */
export const sortArrayByMultipleKeys = <TData>(
  values: TData[],
  criteria: Array<{
    getComparable: (element: TData) => number | string | bigint;
    direction: "asc" | "desc";
  }>,
): TData[] => {
  if (criteria.length === 0 || values.length === 0) {
    return [...values];
  }

  return sortArrayByKey(
    values,
    (element) => {
      const results = criteria.map((criterion) =>
        criterion.direction === "asc"
          ? criterion.getComparable(element)
          : criterion.getComparable(element),
      );

      return results as unknown as number | string | bigint;
    },
    "asc",
  );
};
