/**
 * Removes a prefix from a string if present.
 * @param sourceString The string to modify.
 * @param prefix The prefix to remove.
 * @returns The string with prefix removed.
 * @example
 * ```ts
 * const result = removePrefix("prefix:hello", "prefix:");
 * console.log(result);
 * // Output: "hello"
 * ```
 * @example
 * ```ts
 * const result = removePrefix("hello", "prefix:");
 * console.log(result);
 * // Output: "hello" (unchanged)
 * ```
 */
export const removePrefix = <TSource extends string>(
  sourceString: TSource,
  prefix: string,
): TSource =>
  sourceString.startsWith(prefix) ? (sourceString.slice(prefix.length) as TSource) : sourceString;
