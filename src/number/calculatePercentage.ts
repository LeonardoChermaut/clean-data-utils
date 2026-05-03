/**
 * Calculates a value as a percentage of a total.
 * @param value - The value to calculate percentage for.
 * @param total - The total value.
 * @param useAbsoluteValue - Whether to use absolute values for the calculation.
 * @returns The percentage value.
 * @example
 * ```ts
 * const result = calculatePercentage(10, 20);
 * console.log(result);
 * // Output: 50
 * ```
 * @example
 * ```ts
 * const result = calculatePercentage(-10, 20, true);
 * console.log(result);
 * // Output: 50
 * ```
 */
export const calculatePercentage = (
  value: number,
  total: number,
  useAbsoluteValue: boolean = false,
): number => {
  if (total === 0) {
    return 0;
  }

  const calculatedValue = useAbsoluteValue ? Math.abs(value) : value;
  const absoluteTotal = Math.abs(total);

  return (calculatedValue / absoluteTotal) * 100;
};
