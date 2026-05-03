import { sumNumbersFromArray } from "./sumNumbersFromArray";

/**
 * Sums numeric values extracted from an array of objects using a key extractor.
 * Composes with sumNumbersFromArray.
 * @param values - The array of objects to extract values from.
 * @param getKey - Function to extract the numeric value from each element.
 * @returns The sum of all extracted values.
 * @example
 * ```ts
 * const result = sumNumbersFromArrayByKey(
 *   [{ amount: 10 }, { amount: 20 }, { amount: 30 }],
 *   (item) => item.amount
 * );
 * console.log(result);
 * // Output: 60
 * ```
 * @example
 * ```ts
 * const result = sumNumbersFromArrayByKey(
 *   [{ price: 100.5 }, { price: 50.5 }],
 *   (item) => item.price
 * );
 * console.log(result);
 * // Output: 151
 * ```
 */
export const sumNumbersFromArrayByKey = <TData>(
  values: TData[],
  getKey: (element: TData) => number,
): number => {
  const extractedNumbers = values
    .map(getKey)
    .filter((extractedNumber) => Number.isFinite(extractedNumber));

  return sumNumbersFromArray(extractedNumbers);
};
