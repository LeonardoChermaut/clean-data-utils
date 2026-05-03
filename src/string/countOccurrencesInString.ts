/**
 * Counts occurrences of a substring in a string.
 * @param sourceString - The string to search in.
 * @param searchValue - The substring to search for.
 * @returns The count of occurrences.
 * @example
 * ```ts
 * const result = countOccurrencesInString("hello hell", "ll");
 * console.log(result);
 * // Output: 2
 * ```
 * @example
 * ```ts
 * const result = countOccurrencesInString("aaaa", "aa");
 * console.log(result);
 * // Output: 2 (overlapping not counted)
 * ```
 */
export const countOccurrencesInString = (sourceString: string, searchValue: string): number => {
  if (searchValue.length === 0) {
    return 0;
  }

  return sourceString.split(searchValue).length - 1;
};
