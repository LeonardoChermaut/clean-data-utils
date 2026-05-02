/**
 * Generates a random number between a minimum and maximum value.
 * @param minimum The minimum value (inclusive).
 * @param maximum The maximum value (inclusive).
 * @returns A random number between minimum and maximum.
 * @example
 * ```ts
 * const result = randomNumberBetween(1, 10);
 * console.log(result);
 * // Output: random number between 1 and 10
 * ```
 */
export const randomNumberBetween = (minimum: number, maximum: number): number =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
