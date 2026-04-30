import { uniqueValuesFromArray } from "@/array";

/**
 * Returns elements that are in the base array but not in the compare array.
 * @param base The base array.
 * @param compare The array to compare against.
 * @returns A new array with elements only in base.
 * @example
 * ```ts
 * const base = [1, 2, 3, 4, 5];
 * const compare = [2, 4];
 * const result = differenceBetweenArrays(base, compare);
 * console.log(result);
 * // Output: [1, 3, 5]
 * ```
 */
export const differenceBetweenArrays = <TElement>(
  base: TElement[],
  compare: TElement[],
): TElement[] =>
  uniqueValuesFromArray(base.filter((element) => !compare.some((other) => other === element)));
