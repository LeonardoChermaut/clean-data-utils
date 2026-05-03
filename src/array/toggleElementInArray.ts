import { isTruthyValue } from "@/predicates";

/**
 * Toggles an element in an array - removes it if present, adds it if not.
 * @param values - The array to modify.
 * @param element - The element to toggle.
 * @param comparator - Optional comparator function for custom equality.
 * @returns A new array with the element toggled.
 * @example
 * ```ts
 * const result = toggleElementInArray([1, 2, 3], 2);
 * console.log(result);
 * // Output: [1, 2, 3] (already exists, removed)
 * ```
 * @example
 * ```ts
 * const result = toggleElementInArray([1, 2], 3);
 * console.log(result);
 * // Output: [1, 2, 3] (added)
 * ```
 * @example
 * ```ts
 * const result = toggleElementInArray(
 *   [{ id: 1 }, { id: 2 }],
 *   { id: 1 },
 *   (a, b) => a.id === b.id
 * );
 * console.log(result);
 * // Output: [{ id: 2 }] (removed by custom comparator)
 * ```
 */
export const toggleElementInArray = <TData>(
  values: TData[],
  element: TData,
  comparator?: (a: TData, b: TData) => boolean,
): TData[] => {
  if (comparator) {
    const existsIndex = values.findIndex((item) => comparator(item, element));

    if (existsIndex !== -1) {
      return values.filter((currentElement, index) => index !== existsIndex);
    }

    return [...values, element];
  }

  const existsIndex = values.findIndex((item) =>
    item === element ? true : isTruthyValue(item) && item === element,
  );

  if (existsIndex !== -1) {
    return values.filter((currentElement, index) => index !== existsIndex);
  }

  return [...values, element];
};
