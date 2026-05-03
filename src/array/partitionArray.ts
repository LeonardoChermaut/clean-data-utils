/**
 * Partitions an array into two arrays based on a predicate.
 * @param values The array to partition.
 * @param predicate The predicate function to determine partition.
 * @returns A tuple where the first element contains items that match the predicate and the second contains items that don't.
 * @example
 * ```ts
 * const result = partitionArray([1, 2, 3, 4, 5], (value) => value > 2);
 * console.log(result);
 * // Output: [[3, 4, 5], [1, 2]]
 * ```
 */
export const partitionArray = <TData>(
  values: TData[],
  predicate: (value: TData) => boolean,
): [TData[], TData[]] => {
  const matching: TData[] = [];
  const nonMatching: TData[] = [];

  for (const value of values) {
    if (predicate(value)) {
      matching.push(value);
    } else {
      nonMatching.push(value);
    }
  }

  return [matching, nonMatching];
};
