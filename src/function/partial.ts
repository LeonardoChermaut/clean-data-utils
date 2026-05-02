/**
 * Creates a partially applied version of a function.
 * @param fn - The function to partially apply.
 * @param initialArgs - Arguments to apply partially.
 * @returns A partially applied version of the function.
 * @example
 * ```ts
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const addFive = partial(add, [5]);
 * addFive(1, 2); // Output: 8 (5 + 1 + 2)
 * ```
 */
export const partial = <TArgs extends unknown[], TInitial extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
  initialArgs: TInitial,
): ((...args: TArgs extends [...TInitial, ...infer TRest] ? TRest : never[]) => TResult) => {
  return (...restArgs: unknown[]): TResult => {
    const allArgs = [...initialArgs, ...restArgs] as TArgs;
    return fn(...allArgs);
  };
};
