/**
 * Rotates an array by a specified number of positions.
 * Positive steps rotate to the right, negative to the left.
 * @param values - The array to rotate.
 * @param steps - Number of positions to rotate (positive = right, negative = left).
 * @returns A new rotated array.
 * @example
 * ```ts
 * const result = rotateArray([1, 2, 3, 4, 5], 2);
 * console.log(result);
 * // Output: [4, 5, 1, 2, 3]
 * ```
 * @example
 * ```ts
 * const result = rotateArray([1, 2, 3, 4, 5], -1);
 * console.log(result);
 * // Output: [2, 3, 4, 5, 1]
 * ```
 * @example
 * ```ts
 * const result = rotateArray([1, 2, 3], 5);
 * console.log(result);
 * // Output: [3, 1, 2] (5 % 3 = 2)
 * ```
 */
export const rotateArray = <TData>(values: TData[], steps: number): TData[] => {
  if (values.length === 0) {
    return [];
  }

  const normalizedSteps = ((steps % values.length) + values.length) % values.length;

  if (normalizedSteps === 0) {
    return [...values];
  }

  const result = [...values];
  const pivot = result.length - normalizedSteps;

  return [...result.slice(pivot), ...result.slice(0, pivot)];
};
