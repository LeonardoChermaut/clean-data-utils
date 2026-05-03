/**
 * Pads a string to a specified length with a character.
 * @param sourceString - The string to pad.
 * @param targetLength - The target length to pad to.
 * @param padCharacter - The character to use for padding (default: space).
 * @returns The padded string.
 * @example
 * ```ts
 * const result = padString("hello", 10);
 * console.log(result);
 * // Output: "hello     "
 * ```
 * @example
 * ```ts
 * const result = padString("42", 5, "0");
 * console.log(result);
 * // Output: "00042"
 * ```
 */
export const padString = (
  sourceString: string,
  targetLength: number,
  padCharacter: string = " ",
): string => {
  if (sourceString.length >= targetLength) {
    return sourceString;
  }

  const charsToAdd = targetLength - sourceString.length;
  return sourceString + padCharacter.repeat(charsToAdd);
};
