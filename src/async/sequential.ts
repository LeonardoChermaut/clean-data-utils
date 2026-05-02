/**
 * Executes promises sequentially (one after another).
 * @param tasks - Array of async functions to execute.
 * @returns Array of results in the same order as the input tasks.
 * @example
 * ```ts
 * const results = await sequential([
 *   () => fetch('/api/step1'),
 *   () => fetch('/api/step2'),
 *   () => fetch('/api/step3'),
 * ]);
 * // Executes one after another, in order
 * ```
 */
export const sequential = async <T>(tasks: Array<() => Promise<T>>): Promise<T[]> => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return [];
  }

  const results: T[] = [];

  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }

  return results;
};
