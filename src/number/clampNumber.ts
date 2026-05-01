/**
 * Clamps a number between a minimum and maximum value.
 * @param value - The number to clamp.
 * @param minimum - The minimum value.
 * @param maximum - The maximum value.
 * @returns The clamped number.
 * @example
 * ```ts
 * const result = clampNumber(5, 0, 10);
 * console.log(result);
 * // Output: 5
 * ```
 * @example
 * ```ts
 * const result = clampNumber(-5, 0, 10);
 * console.log(result);
 * // Output: 0
 * ```
 * @example
 * ```ts
 * const result = clampNumber(15, 0, 10);
 * console.log(result);
 * // Output: 10
 * ```
 */
export const clampNumber = (value: number, minimum: number, maximum: number): number =>
  Math.max(minimum, Math.min(maximum, value));
