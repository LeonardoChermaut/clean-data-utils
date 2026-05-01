/**
 * Creates a deep clone of an object using structuredClone with fallback.
 * @param sourceObject - The object to clone.
 * @returns A deep clone of the object.
 * @example
 * ```ts
 * const original = { a: { b: 1 } };
 * const cloned = deepClone(original);
 * console.log(cloned);
 * // Output: { a: { b: 1 } }
 * console.log(cloned !== original);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const original = [{ a: 1 }, { b: 2 }];
 * const cloned = deepClone(original);
 * console.log(cloned);
 * // Output: [{ a: 1 }, { b: 2 }]
 * ```
 */
export const deepClone = <TObject>(sourceObject: TObject): TObject => {
  try {
    return structuredClone(sourceObject);
  } catch {
    return JSON.parse(JSON.stringify(sourceObject)) as TObject;
  }
};
