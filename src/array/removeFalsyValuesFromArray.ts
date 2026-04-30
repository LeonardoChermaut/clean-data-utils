import { isTruthyValue } from "@/predicates";
/**
 * Removes all falsy values from an array.
 * @param values - The array to filter.
 * @returns A new array with all falsy values removed.
 * @example
 * removeFalsyValuesFromArray([0, 1, 2, false, true, null, undefined, "", "hello"]); // [1, 2, true, "hello"]
 */
export const removeFalsyValuesFromArray = <TElement>(
  values: TElement[],
): TElement[] => values.filter(isTruthyValue);
