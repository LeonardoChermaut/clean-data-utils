/**
 * Validates a UUID v4 string.
 * @param value - The UUID string to validate.
 * @returns True if valid UUID v4, false otherwise.
 * @example
 * ```ts
 * const result = isValidUuid("550e8400-e29b-41d4-a716-446655440000");
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isValidUuid("not-a-uuid");
 * console.log(result);
 * // Output: false
 * ```
 */
export const isValidUuid = (value: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return uuidRegex.test(value);
};
