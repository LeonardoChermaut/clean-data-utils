/**
 * Truncates a string to a maximum content length with a configurable suffix.
 * @param sourceString The string to truncate.
 * @param maxContentLength The maximum length of the content before adding the suffix.
 * @param suffix Optional suffix to append. Defaults to '...'.
 * @returns The truncated string with suffix.
 * @example
 * ```ts
 * const result = truncateString('hello world', 5);
 * console.log(result);
 * // Output: 'hello...'
 * ```
 */
export const truncateString = (
  sourceString: string,
  maxContentLength: number,
  suffix = "...",
): string => {
  if (sourceString.length <= maxContentLength) return sourceString;
  return sourceString.slice(0, maxContentLength) + suffix;
};