export type PasswordOptions = {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
  requireSpecialChar?: boolean;
};

const defaultOptions: PasswordOptions = {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
  requireSpecialChar: true,
};

/**
 * Validates if a string is a valid password based on security requirements.
 * @param sourceString - The string to validate.
 * @param options - Optional configuration for password requirements.
 * @returns True if the password meets all requirements, false otherwise.
 * @example
 * ```ts
 * isValidPassword("SecureP@ss1");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidPassword("weak");
 * // Output: false
 * ```
 * @example
 * ```ts
 * isValidPassword("password123", { minLength: 10 });
 * // Output: false
 * ```
 */
export const isValidPassword = (sourceString: string, options?: PasswordOptions): boolean => {
  if (!sourceString || typeof sourceString !== "string") {
    return false;
  }

  const config = { ...defaultOptions, ...options };
  const { minLength, requireUppercase, requireLowercase, requireNumber, requireSpecialChar } =
    config;

  if (sourceString.length < (minLength ?? 8)) {
    return false;
  }

  if (requireUppercase && !/[A-Z]/.test(sourceString)) {
    return false;
  }

  if (requireLowercase && !/[a-z]/.test(sourceString)) {
    return false;
  }

  if (requireNumber && !/\d/.test(sourceString)) {
    return false;
  }

  if (requireSpecialChar && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(sourceString)) {
    return false;
  }

  return true;
};
