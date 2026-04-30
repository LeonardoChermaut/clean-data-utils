/**
 * Merges two objects without mutation.
 * @param baseObject The base object.
 * @param overrideObject The object to merge on top.
 * @returns A new merged object.
 * @example
 * ```ts
 * const base = { a: 1, b: 2 };
 * const override = { b: 3, c: 4 };
 * const result = mergeObjects(base, override);
 * console.log(result);
 * // Output: { a: 1, b: 3, c: 4 }
 * ```
 */
export const mergeObjects = <
  TBase extends Record<string, unknown>,
  TOverride extends Record<string, unknown>,
>(
  baseObject: TBase,
  overrideObject: TOverride,
): Omit<TBase, keyof TOverride> & TOverride => ({
  ...baseObject,
  ...overrideObject,
});
