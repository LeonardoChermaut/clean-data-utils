/**
 * Checks if a string contains only numeric characters.
 * @param sourceString The string to check.
 * @returns True if the string contains only digits, false otherwise.
 * @example
 * ```ts
 * const result = isNumericString("12345");
 * console.log(result);
 * // Output: true
 * ```
 */
export const isNumericString = (sourceString: string): boolean =>
  sourceString.length > 0 && /^\d+$/.test(sourceString);
