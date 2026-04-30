/**
 * Ensures a string starts with the given prefix.
 * @param sourceString The string to modify.
 * @param prefix The prefix to add if missing.
 * @returns The string with prefix added.
 * @example
 * ```ts
 * const result = ensurePrefix("hello", "prefix:");
 * console.log(result);
 * // Output: "prefix:hello"
 * ```
 * @example
 * ```ts
 * const result = ensurePrefix("prefix:hello", "prefix:");
 * console.log(result);
 * // Output: "prefix:hello" (unchanged)
 * ```
 */
export const ensurePrefix = <TSource extends string>(
  sourceString: TSource,
  prefix: string,
): TSource =>
  sourceString.startsWith(prefix) ? sourceString : ((prefix + sourceString) as TSource);
