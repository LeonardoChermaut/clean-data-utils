/**
 * Composes functions from right to left.
 * @param fns - The functions to compose.
 * @returns A composed function.
 * @example
 * ```ts
 * const composed = compose(
 *   (x: number) => x + 1,
 *   (x: number) => x * 2
 * );
 * const result = composed(3);
 * // (3 * 2) + 1 = 7
 * ```
 * @example
 * ```ts
 * const composed = compose(
 *   (x: string) => x.toUpperCase(),
 *   (x: string) => x.trim()
 * );
 * const result = composed("  hello  ");
 * // "HELLO"
 * ```
 */
export const compose =
  <T>(...fns: Array<(arg: T) => T>) =>
  (value: T): T =>
    fns.reduce((acc, fn) => fn(acc), value);
