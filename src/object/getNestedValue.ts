import { isUndefined } from "@/predicates";

/**
 * Gets a nested value from an object using a dot-notation path.
 * @param sourceObject The object to retrieve the value from.
 * @param path The dot-notation path to the value (e.g., "user.address.city").
 * @returns The value at the path, or undefined if not found.
 * @example
 * ```ts
 * const obj = { user: { address: { city: "London" } } };
 * const result = getNestedValue(obj, "user.address.city");
 * console.log(result);
 * // Output: "London"
 * ```
 */
export const getNestedValue = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  path: string,
): unknown => {
  const keys = path.split(".");

  let current: unknown = sourceObject;

  for (const key of keys) {
    if (typeof current === "object" && current !== null && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return isUndefined(current) ? undefined : current;
};
