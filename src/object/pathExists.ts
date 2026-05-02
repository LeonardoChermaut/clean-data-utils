/**
 * Checks if a path exists in an object (using dot notation).
 * @param sourceObject - The object to check.
 * @param pathString - The path to check (e.g., "user.address.city").
 * @returns True if the path exists and is not undefined, false otherwise.
 * @example
 * ```ts
 * pathExists({ user: { address: { city: "London" } } }, "user.address.city");
 * // Output: true
 * ```
 * @example
 * ```ts
 * pathExists({ user: { address: null } }, "user.address.city");
 * // Output: false
 * ```
 */
export const pathExists = (sourceObject: Record<string, unknown>, pathString: string): boolean => {
  if (!sourceObject || typeof sourceObject !== "object") {
    return false;
  }

  if (!pathString || typeof pathString !== "string") {
    return false;
  }

  const segments = pathString.split(".");

  let current: unknown = sourceObject;

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return false;
    }

    if (typeof current !== "object") {
      return false;
    }

    current = (current as Record<string, unknown>)[segment];
  }

  return current !== undefined;
};
