/**
 * Ensures a string ends with the given suffix.
 * @param sourceString The string to modify.
 * @param suffix The suffix to add if missing.
 * @returns The string with suffix added.
 * @example
 * ```ts
 * const result = ensureSuffix("filename", ".txt");
 * console.log(result);
 * // Output: "filename.txt"
 * ```
 * @example
 * ```ts
 * const result = ensureSuffix("filename.txt", ".txt");
 * console.log(result);
 * // Output: "filename.txt" (unchanged)
 * ```
 */
export const ensureSuffix = (sourceString: string, suffix: string): string =>
  sourceString.endsWith(suffix) ? sourceString : sourceString + suffix;
