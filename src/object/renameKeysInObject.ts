/**
 * Renames keys in an object according to a mapping.
 * @param sourceObject The object whose keys will be renamed.
 * @param keyMap A record mapping old keys to new keys.
 * @returns A new object with renamed keys.
 * @example
 * ```ts
 * const obj = { name: "Alice", age: 30 };
 * const result = renameKeysInObject(obj, { name: "fullName", age: "userAge" });
 * console.log(result);
 * // Output: { fullName: "Alice", userAge: 30 }
 * ```
 */
export const renameKeysInObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  keyMap: Record<string, string>,
): Record<string, unknown> => {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(sourceObject)) {
    const newKey = keyMap[key] ?? key;
    result[newKey] = value;
  }

  return result;
};
