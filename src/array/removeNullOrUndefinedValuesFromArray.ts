import { isNullOrUndefined } from "@/predicates";
/**
 * Removes all null and undefined values from an array.
 * @param values - The array to filter.
 * @returns A new array with all null and undefined values removed.
 * @example
 * removeNullOrUndefinedValuesFromArray([1, null, 2, undefined, 3]); // [1, 2, 3]
 */
export const removeNullOrUndefinedValuesFromArray = <TElement>(
  values: (TElement | null | undefined)[],
): TElement[] => values.filter((value): value is TElement => !isNullOrUndefined(value));
