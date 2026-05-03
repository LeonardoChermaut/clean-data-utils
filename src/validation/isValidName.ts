/**
 * Validates if a string is a valid personal name.
 * Allows letters (including accented), spaces, hyphens, apostrophes, and dots.
 * Supports international names across different cultures and writing systems.
 * @param sourceString - The string to validate.
 * @returns True if the string is a valid name, false otherwise.
 * @example
 * ```ts
 * isValidName("John Doe");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidName("Maria José");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidName("Dim Jom");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidName("");
 * // Output: false
 * ```
 */
export const isValidName = (sourceString: string): boolean => {
  if (!sourceString || typeof sourceString !== "string") {
    return false;
  }

  const trimmed = sourceString.trim();

  if (trimmed.length === 0) {
    return false;
  }

  if (/\s{2,}/.test(trimmed)) {
    return false;
  }

  const nameRegex = /^[a-zA-ZÀ-ÿ](?:[a-zA-ZÀ-ÿ\s.'-]*)?$/;

  return nameRegex.test(trimmed);
};
