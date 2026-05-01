/**
 * Capitalizes the first letter of a string.
 * @param sourceString - The string to capitalize.
 * @returns The string with the first letter capitalized.
 * @example
 * ```ts
 * const result = capitalizeString("hello");
 * console.log(result);
 * // Output: "Hello"
 * ```
 * @example
 * ```ts
 * const result = capitalizeString("world");
 * console.log(result);
 * // Output: "World"
 * ```
 */
export const capitalizeString = (sourceString: string): string => {
  if (sourceString.length === 0) {
    return sourceString;
  }

  return sourceString.charAt(0).toUpperCase() + sourceString.slice(1);
};
