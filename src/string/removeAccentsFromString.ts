/**
 * Removes accents and diacritics from a string, normalizing to ASCII.
 * @param sourceString - The string to remove accents from.
 * @returns The string without accents.
 * @example
 * ```ts
 * const result = removeAccentsFromString("Héllo Wörld");
 * console.log(result);
 * // Output: "Hello World"
 * ```
 * @example
 * ```ts
 * const result = removeAccentsFromString("Ça me fait sourire");
 * console.log(result);
 * // Output: "Ca me fait sourire"
 * ```
 */
export const removeAccentsFromString = (sourceString: string): string =>
  sourceString
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u064b-\u0652]/g, "");
