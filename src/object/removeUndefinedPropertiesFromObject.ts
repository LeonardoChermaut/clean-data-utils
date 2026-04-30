import { isUndefined } from "@/predicates";
/**
 * Removes all properties with undefined values from an object.
 * @param sourceObject - The object to process.
 * @returns A new object with all undefined properties removed.
 * @example
 * ```ts
 * removeUndefinedPropertiesFromObject({ a: 1, b: undefined, c: 3 }); // { a: 1, c: 3 }
 * ```
 */
export const removeUndefinedPropertiesFromObject = <
  TObject extends Record<string, unknown>,
>(
  sourceObject: TObject,
): Partial<TObject> => {
  const entries = Object.entries(sourceObject) as [
    keyof TObject,
    TObject[keyof TObject],
  ][];

  return entries.reduce((accumulator, [key, value]) => {
    if (!isUndefined(value)) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {} as Partial<TObject>);
};
