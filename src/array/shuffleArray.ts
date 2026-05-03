/**
 * Shuffles an array randomly using Fisher-Yates algorithm.
 * Returns a new shuffled array; does not mutate the original.
 * @param values - The array to shuffle.
 * @returns A new shuffled array.
 * @example
 * ```ts
 * const result = shuffleArray([1, 2, 3, 4, 5]);
 * console.log(result);
 * // Output: [3, 1, 5, 2, 4] (random order)
 * ```
 * @example
 * ```ts
 * const result = shuffleArray(["a", "b", "c"]);
 * console.log(result);
 * // Output: ["c", "a", "b"] (random order)
 * ```
 */
export const shuffleArray = <TData>(values: TData[]): TData[] => {
  const result = [...values];
  let currentIndex = result.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    const currentElement = result[currentIndex] as TData;
    const randomElement = result[randomIndex] as TData;
    result[currentIndex] = randomElement;
    result[randomIndex] = currentElement;
  }

  return result;
};
