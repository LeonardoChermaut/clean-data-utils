/**
 * Validates if a string is a valid URL (RFC 3986 compliant).
 * @param sourceString - The string to validate.
 * @returns True if the string is a valid URL, false otherwise.
 * @example
 * ```ts
 * isValidUrl("https://example.com");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidUrl("not-a-url");
 * // Output: false
 * ```
 */
export const isValidUrl = (sourceString: string): boolean => {
  if (!sourceString || typeof sourceString !== "string") {
    return false;
  }

  try {
    new URL(sourceString);
    return true;
  } catch {
    return false;
  }
};
