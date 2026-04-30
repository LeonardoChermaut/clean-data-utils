/**
 * Normalizes whitespace in a string: trims and collapses internal whitespace.
 * @param sourceString The string to normalize.
 * @returns The normalized string.
 * @example
 * ```ts
 * const result = normalizeWhitespace('  hello    world  ');
 * console.log(result);
 * // Output: 'hello world'
 * ```
 */
export const normalizeWhitespace = (sourceString: string): string =>
  sourceString.trim().replace(/\s+/g, " ");
