/**
 * Sets a nested value in an object using a dot-notation path, returning a new object.
 * @param sourceObject The object to set the value in.
 * @param path The dot-notation path to the value (e.g., "user.address.city").
 * @param value The value to set.
 * @returns A new object with the value set at the path.
 * @example
 * ```ts
 * const obj = { user: { name: "Alice" } };
 * const result = setNestedValue(obj, "user.address", { city: "London" });
 * console.log(result);
 * // Output: { user: { name: "Alice", address: { city: "London" } } }
 * ```
 */
export const setNestedValue = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  path: string,
  value: unknown,
): TObject => {
  if (path === "") {
    return sourceObject;
  }

  const keys = path.split(".") as string[];
  const result = structuredClone(sourceObject);
  let current: Record<string, unknown> = result;

  for (let index = 0; index < keys.length - 1; index += 1) {
    const key = keys[index] as string;
    const nextValue = current[key];

    if (typeof nextValue !== "object" || nextValue === null) {
      current[key] = {};
    }

    const newCurrent = current[key];
    if (typeof newCurrent === "object" && newCurrent !== null) {
      current = newCurrent as Record<string, unknown>;
    }
  }

  const lastKey = keys[keys.length - 1] as string;
  current[lastKey] = value;

  return result;
};
