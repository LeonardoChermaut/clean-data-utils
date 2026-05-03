/**
 * Splits an array into chunks of a specified size.
 * @param values The array to chunk.
 * @param chunkSize The size of each chunk.
 * @returns An array of chunks.
 * @example
 * ```ts
 * const values = [1, 2, 3, 4, 5, 6, 7];
 * const chunks = chunkArray(values, 3);
 * console.log(chunks);
 * // Output: [[1, 2, 3], [4, 5, 6], [7]]
 * ```
 */
export const chunkArray = <TData>(values: TData[], chunkSize: number): TData[][] => {
  if (chunkSize <= 0) {
    return [];
  }

  const result: TData[][] = [];
  for (let index = 0; index < values.length; index += chunkSize) {
    result.push(values.slice(index, index + chunkSize));
  }

  return result;
};
