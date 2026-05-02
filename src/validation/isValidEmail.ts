/**
 * Validates if a string is a valid email address (RFC 5322 compliant).
 * @param sourceString - The string to validate.
 * @returns True if the string is a valid email address, false otherwise.
 * @example
 * ```ts
 * isValidEmail("user@example.com");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidEmail("invalid-email");
 * // Output: false
 * ```
 */
export const isValidEmail = (sourceString: string): boolean => {
  if (!sourceString || typeof sourceString !== "string") {
    return false;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return emailRegex.test(sourceString);
};
