/**
 * Checks if an object has a property with a defined value.
 * @param sourceObject The object to check.
 * @param key The key to check.
 * @returns True if the object has the key and the value is defined (not null or undefined).
 * @example
 * ```ts
 * const obj = { a: 42 };
 * console.log(hasDefinedProperty(obj, 'a'));
 * // Output: true
 * ```
 */
import { isDefinedValue } from "@/predicates";

export const hasDefinedProperty = <
  TObject extends Record<string, unknown>,
  TKey extends keyof TObject,
>(
  sourceObject: TObject,
  key: TKey,
): boolean => key in sourceObject && isDefinedValue(sourceObject[key]);