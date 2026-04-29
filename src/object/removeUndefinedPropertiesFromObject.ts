import { isUndefined } from "@/predicates";

/**
 * Removes all properties with undefined values from an object.
 * @param sourceObject - The object to process.
 * @returns A new object with all undefined properties removed.
 * @example
 * removeUndefinedPropertiesFromObject({ a: 1, b: undefined, c: 3 }); // { a: 1, c: 3 }
 */
const removeUndefinedPropertiesFromObject = <
  ObjectType extends Record<string, unknown>,
>(
  sourceObject: ObjectType,
): Partial<ObjectType> => {
  const entries = Object.entries(sourceObject) as [
    keyof ObjectType,
    ObjectType[keyof ObjectType],
  ][];

  return entries.reduce((accumulator, [key, value]) => {
    if (!isUndefined(value)) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {} as Partial<ObjectType>);
};

export { removeUndefinedPropertiesFromObject };
