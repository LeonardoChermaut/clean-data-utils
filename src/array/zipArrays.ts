/**
 * Combines two arrays into an array of tuples.
 * @param first The first array.
 * @param second The second array.
 * @returns An array of tuples where each tuple contains elements from both arrays.
 * @example
 * ```ts
 * const result = zipArrays([1, 2, 3], ["a", "b", "c"]);
 * console.log(result);
 * // Output: [[1, "a"], [2, "b"], [3, "c"]]
 * ```
 */
export const zipArrays = <TFirst, TSecond>(
  first: TFirst[],
  second: TSecond[],
): Array<[TFirst, TSecond]> => {
  const length = Math.min(first.length, second.length);
  const result: Array<[TFirst, TSecond]> = [];

  for (let index = 0; index < length; index += 1) {
    const firstElement = first[index];
    const secondElement = second[index];

    if (firstElement !== undefined && secondElement !== undefined) {
      result.push([firstElement, secondElement]);
    }
  }

  return result;
};
