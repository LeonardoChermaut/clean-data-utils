import { removeFalsyValuesFromArray } from "@/array";

/**
 * Splits a string by a separator and removes empty segments from the resulting array.
 * @param sourceString The string to split.
 * @param separator The separator to split the string by.
 * @returns An array of non-empty strings.
 * @example
 * ```ts
 * splitStringAndRemoveEmptySegments('a,b,,c', ','); // ['a', 'b', 'c']
 * ```
 */
export const splitStringAndRemoveEmptySegments = (
  sourceString: string,
  separator: string,
): string[] => removeFalsyValuesFromArray(sourceString.split(separator));
