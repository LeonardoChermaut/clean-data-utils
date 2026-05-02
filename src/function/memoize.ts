/**
 * Creates a memoized version of a function that caches results based on arguments.
 * @param fn - The function to memoize.
 * @returns A memoized version of the function.
 * @example
 * ```ts
 * const expensive = memoize((n: number) => n * 2);
 * expensive(5); // Computes and caches
 * expensive(5); // Returns cached result
 * ```
 */
export const memoize = <TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
): ((...args: TArgs) => TResult) => {
  const cache = new Map<string, TResult>();

  return (...args: TArgs): TResult => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as TResult;
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
};
