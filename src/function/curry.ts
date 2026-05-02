/**
 * Creates a curried version of a function.
 * @param fn - The function to curry.
 * @returns A curried version of the function.
 * @example
 * ```ts
 * const add = (a: number, b: number, c: number) => a + b + c;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3); // Output: 6
 * curriedAdd(1, 2)(3); // Output: 6
 * ```
 */
export const curry = <TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
): (<T extends TArgs>(
  ...args: T extends [] ? [] : TArgs
) => TArgs extends [] ? TResult : (...args: Partial<TArgs>) => TResult) => {
  return function curried(...args: unknown[]): unknown {
    if (args.length >= fn.length) {
      return fn(...(args as TArgs));
    }

    return (...nextArgs: unknown[]): unknown => curried(...[...args, ...nextArgs]);
  } as <T extends TArgs>(
    ...args: T extends [] ? [] : TArgs
  ) => TArgs extends [] ? TResult : (...args: Partial<TArgs>) => TResult;
};
