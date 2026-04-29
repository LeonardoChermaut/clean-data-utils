import { isNullOrUndefined } from "@/predicates";

/**
 * Removes all null and undefined values from an array.
 * @param values - The array to filter.
 * @returns A new array with all null and undefined values removed.
 * @example
 * removeNullOrUndefinedValuesFromArray([1, null, 2, undefined, 3]); // [1, 2, 3]
 */
const removeNullOrUndefinedValuesFromArray = <ElementType>(
  values: (ElementType | null | undefined)[],
): ElementType[] =>
  values.filter((value): value is ElementType => !isNullOrUndefined(value));

export { removeNullOrUndefinedValuesFromArray };
