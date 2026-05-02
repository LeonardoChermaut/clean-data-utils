import { uniqueValuesFromArray } from "@/array";

/**
 * Returns elements that exist in both arrays.
 * @param first The first array.
 * @param second The second array.
 * @returns A new array with elements present in both arrays.
 * @example
 * ```ts
 * const first = [1, 2, 3, 4, 5];
 * const second = [3, 4, 5, 6, 7];
 * const result = intersectionBetweenArrays(first, second);
 * console.log(result);
 * // Output: [3, 4, 5]
 * ```
 */
export const intersectionBetweenArrays = <TElement>(
  first: TElement[],
  second: TElement[],
): TElement[] =>
  uniqueValuesFromArray(first.filter((element) => second.some((other) => other === element)));
