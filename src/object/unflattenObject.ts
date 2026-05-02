/**
 * Unflattens a dot-notation flattened object back into a nested object.
 * @param sourceObject - The flattened object to unflatten.
 * @returns A nested object.
 * @example
 * ```ts
 * unflattenObject({ "user.name": "Alice", "user.address.city": "London" });
 * // Output: { user: { name: "Alice", address: { city: "London" } } }
 * ```
 * @example
 * ```ts
 * unflattenObject({ "a.b.c": 1, "a.b.d": 2 });
 * // Output: { a: { b: { c: 1, d: 2 } } }
 * ```
 */
export const unflattenObject = (sourceObject: Record<string, unknown>): Record<string, unknown> => {
  if (!sourceObject || typeof sourceObject !== "object") {
    return {};
  }

  const result: Record<string, unknown> = {};

  for (const key of Object.keys(sourceObject)) {
    const value = sourceObject[key];
    const segments = key.split(".");

    let current = result;

    for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {
      const segment = segments[segmentIndex];
      if (!segment) {
        continue;
      }
      const isLastSegment = segmentIndex === segments.length - 1;

      if (isLastSegment) {
        current[segment] = value;
      } else {
        if (!(segment in current)) {
          current[segment] = {};
        }

        current = current[segment] as Record<string, unknown>;
      }
    }
  }

  return result;
};
