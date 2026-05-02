/**
 * Flattens a nested object into a single-level object with dot-notation keys.
 * @param sourceObject - The object to flatten.
 * @param prefix - Optional prefix for the keys.
 * @returns A flattened object with dot-notation keys.
 * @example
 * ```ts
 * flattenObject({ user: { name: "Alice", address: { city: "London" } } });
 * // Output: { "user.name": "Alice", "user.address.city": "London" }
 * ```
 * @example
 * ```ts
 * flattenObject({ a: 1, b: { c: 2 } }, "prefix");
 * // Output: { "prefix.a": 1, "prefix.b.c": 2 }
 * ```
 */
export const flattenObject = (
  sourceObject: Record<string, unknown>,
  prefix?: string,
): Record<string, unknown> => {
  if (!sourceObject || typeof sourceObject !== "object") {
    return {};
  }

  const result: Record<string, unknown> = {};

  const processObject = (objectToProcess: Record<string, unknown>, currentPrefix: string): void => {
    for (const key of Object.keys(objectToProcess)) {
      const value = objectToProcess[key];
      const newKey = currentPrefix ? `${currentPrefix}.${key}` : key;

      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        !(value instanceof Date) &&
        !(value instanceof RegExp)
      ) {
        processObject(value as Record<string, unknown>, newKey);
      } else {
        result[newKey] = value;
      }
    }
  };

  processObject(sourceObject, prefix || "");

  return result;
};
