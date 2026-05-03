/**
 * Reverses a string with unicode support using spread operator.
 * @param sourceString - The string to reverse.
 * @returns The reversed string.
 * @example
 * ```ts
 * const result = reverseString("hello");
 * console.log(result);
 * // Output: "olleh"
 * ```
 * @example
 * ```ts
 * const result = reverseString("𝌆ćóẃ");
 * console.log(result);
 * // Output: "ẃóć𝌆"
 * ```
 */
export const reverseString = (sourceString: string): string => {
  return [...sourceString].reverse().join("");
};
