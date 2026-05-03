/**
 * Returns duplicate values from an array.
 * @param values The array to check for duplicates.
 * @returns A new array containing only the duplicate values.
 * @example
 * ```ts
 * const values = [1, 2, 2, 3, 3, 3, 4];
 * const result = findDuplicatesFromArray(values);
 * console.log(result);
 * // Output: [2, 3]
 * ```
 */
export const findDuplicatesFromArray = <TData>(values: TData[]): TData[] => {
  const seen: TData[] = [];
  const duplicates: TData[] = [];

  for (const value of values) {
    if (seen.some((item) => item === value) && !duplicates.some((item) => item === value)) {
      duplicates.push(value);
    }

    seen.push(value);
  }

  return duplicates;
};
