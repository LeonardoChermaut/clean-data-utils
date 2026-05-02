/**
 * Performs a deep equality comparison between two values.
 * @param firstObject - The first value to compare.
 * @param secondObject - The second value to compare.
 * @returns True if the values are deeply equal, false otherwise.
 * @example
 * ```ts
 * deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });
 * // Output: true
 * ```
 * @example
 * ```ts
 * deepEqual([1, 2, 3], [1, 2, 3]);
 * // Output: true
 * ```
 * @example
 * ```ts
 * deepEqual({ a: 1 }, { a: 2 });
 * // Output: false
 * ```
 */
export const deepEqual = (firstObject: unknown, secondObject: unknown): boolean => {
  if (firstObject === secondObject) {
    return true;
  }

  if (
    firstObject === null ||
    secondObject === null ||
    typeof firstObject !== "object" ||
    typeof secondObject !== "object"
  ) {
    return false;
  }

  if (firstObject instanceof Date && secondObject instanceof Date) {
    return firstObject.getTime() === secondObject.getTime();
  }

  if (firstObject instanceof RegExp && secondObject instanceof RegExp) {
    return firstObject.toString() === secondObject.toString();
  }

  if (!Array.isArray(firstObject) || !Array.isArray(secondObject)) {
    if (firstObject instanceof Set && secondObject instanceof Set) {
      if (firstObject.size !== secondObject.size) {
        return false;
      }

      for (const item of firstObject) {
        if (!secondObject.has(item)) {
          return false;
        }
      }

      return true;
    }

    if (firstObject instanceof Map && secondObject instanceof Map) {
      if (firstObject.size !== secondObject.size) {
        return false;
      }

      for (const [key, value] of firstObject) {
        if (!deepEqual(value, secondObject.get(key))) {
          return false;
        }
      }

      return true;
    }
  }

  const firstKeys = Object.keys(firstObject);
  const secondKeys = Object.keys(secondObject);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (const key of firstKeys) {
    if (!secondKeys.includes(key)) {
      return false;
    }

    if (
      !deepEqual(
        (firstObject as Record<string, unknown>)[key],
        (secondObject as Record<string, unknown>)[key],
      )
    ) {
      return false;
    }
  }

  return true;
};
