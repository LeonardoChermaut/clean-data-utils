/**
 * Masks a string by hiding characters while keeping visible ones at start/end.
 * @param sourceString - The string to mask.
 * @param visibleChars - Number of characters to keep visible at start and end.
 * @param maskCharacter - The character to use for masking (default: "*").
 * @returns The masked string.
 * @example
 * ```ts
 * const result = maskString("1234567890123", 4);
 * console.log(result);
 * // Output: "1234********53"
 * ```
 * @example
 * ```ts
 * const result = maskString("user@example.com", 2);
 * console.log(result);
 * // Output: "us**@example.com"
 * ```
 */
export const maskString = (
  sourceString: string,
  visibleChars: number,
  maskCharacter: string = "*",
): string => {
  if (sourceString.length <= visibleChars * 2) {
    return sourceString;
  }

  const start = sourceString.slice(0, visibleChars);
  const end = sourceString.slice(-visibleChars);
  const middleLength = sourceString.length - visibleChars * 2;

  return start + maskCharacter.repeat(middleLength) + end;
};
