import { isUndefined } from "@/predicates";
/**
 * Returns a new object containing only the properties that are not undefined.
 * @param sourceObject The object to filter.
 * @returns A new object with only non-undefined properties.
 * @example
 * ```ts
 * const obj = { a: 1, b: undefined, c: "hello" };
 * const result = getDefinedPropertiesFromObject(obj);
 * // result is { a: 1, c: "hello" }
 * ```
 */
export const getDefinedPropertiesFromObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
): Partial<{ [K in keyof TObject]: Exclude<TObject[K], undefined> }> => {
  const entries = Object.entries(sourceObject) as [keyof TObject, TObject[keyof TObject]][];

  return entries.reduce(
    (accumulator, [key, value]) => {
      if (!isUndefined(value)) {
        accumulator[key as keyof TObject] = value as Exclude<TObject[keyof TObject], undefined>;
      }

      return accumulator;
    },
    {} as Partial<{ [K in keyof TObject]: Exclude<TObject[K], undefined> }>,
  );
};
