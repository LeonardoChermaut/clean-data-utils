import { isNullOrUndefined } from "@/predicates";

/**
 * Recursively removes null and undefined values from an object.
 * @param sourceObject - The object to compact.
 * @returns A new object with null and undefined values removed.
 * @example
 * ```ts
 * const result = compactObject({ a: 1, b: null, c: undefined, d: 2 });
 * console.log(result);
 * // Output: { a: 1, d: 2 }
 * ```
 * @example
 * ```ts
 * const result = compactObject({
 *   user: { name: "Alice", age: null },
 *   active: true,
 *   data: { nested: undefined }
 * });
 * console.log(result);
 * // Output: { user: { name: "Alice" }, active: true, data: {} }
 * ```
 */
export const compactObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
): TObject => {
  const result = {} as Record<string, unknown>;

  for (const key of Object.keys(sourceObject)) {
    const value = sourceObject[key];

    if (isNullOrUndefined(value)) {
      continue;
    }

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const compacted = compactObject(value as Record<string, unknown>);

      if (Object.keys(compacted).length > 0) {
        result[key] = compacted;
      }
    } else {
      result[key] = value;
    }
  }

  return result as TObject;
};
