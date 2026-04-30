/**
 * Removes duplicate values from an array.
 * @param values The array to process.
 * @param comparator Optional function to compare values. Defaults to strict equality.
 * @returns A new array with unique values.
 * @example
 * ```ts
 * const values = [1, 2, 2, 3, 3, 4];
 * const unique = uniqueValuesFromArray(values);
 * console.log(unique);
 * // Output: [1, 2, 3, 4]
 * ```
 */
export const uniqueValuesFromArray = <TElement>(
  values: TElement[],
  comparator: (elementOne: TElement, elementTwo: TElement) => boolean = (
    elementOne,
    elementTwo,
  ) => elementOne === elementTwo,
): TElement[] =>
  values.filter(
    (value, index, array) =>
      array.findIndex((other) => comparator(value, other)) === index,
  );
