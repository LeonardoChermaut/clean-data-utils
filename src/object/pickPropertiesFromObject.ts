/**
 * Picks properties from an object based on a list of keys.
 * This function is useful for extracting specific properties from an object.
 * @param sourceObject The object to pick properties from.
 * @param selectedKeys The keys to pick properties from.
 * @returns An object with the picked properties.
 * @example
 * ```ts
 * const object = { name: 'John', age: 30, city: 'New York' };
 * const pickedObject = pickPropertiesFromObject(object, ['name', 'city']);
 * console.log(pickedObject);
 * // Output: { name: 'John', city: 'New York' }
 * ```
 */
export const pickPropertiesFromObject = <
  ObjectType extends Record<string, unknown>,
  KeyType extends keyof ObjectType,
>(
  sourceObject: ObjectType,
  selectedKeys: KeyType[],
): Pick<ObjectType, KeyType> => {
  const result = {} as Pick<ObjectType, KeyType>;

  for (const key of selectedKeys) {
    if (key in sourceObject) {
      result[key] = sourceObject[key];
    }
  }

  return result;
};
