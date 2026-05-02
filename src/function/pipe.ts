/**
 * Composes functions from left to right (opposite of compose).
 * The output of each function becomes the input of the next.
 * @param fns - Functions to compose.
 * @returns A composed function.
 * @example
 * ```ts
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const pipeline = pipe(addOne, double);
 * pipeline(2);
 * // Output: (2 + 1) * 2 = 6
 * ```
 */
export const pipe = <TArgs extends unknown[], TResult>(
  ...fns: Array<(arg: unknown) => unknown>
): ((...args: TArgs) => TResult) => {
  return (...args: TArgs): TResult => {
    return fns.reduce((acc, fn) => fn(acc), args[0] as unknown) as TResult;
  };
};
