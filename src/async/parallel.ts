/**
 * Executes promises in parallel with a concurrency limit.
 * @param tasks - Array of async functions to execute.
 * @param limit - Maximum number of concurrent executions.
 * @returns Array of results in the same order as the input tasks.
 * @example
 * ```ts
 * const results = await parallel([
 *   () => fetch('/api/users'),
 *   () => fetch('/api/posts'),
 *   () => fetch('/api/comments'),
 * ], 2);
 * // Executes at most 2 at a time
 * ```
 */
export const parallel = async <T>(tasks: Array<() => Promise<T>>, limit: number): Promise<T[]> => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return [];
  }

  if (limit <= 0) {
    return Promise.all(tasks.map((task) => task()));
  }

  const results: T[] = [] as T[];
  let currentIndex = 0;

  const executeTask = async (index: number): Promise<void> => {
    const task = tasks[index];
    if (task && index < tasks.length) {
      const result = await task();
      results[index] = result;

      const nextIndex = currentIndex++;
      if (nextIndex < tasks.length) {
        await executeTask(nextIndex);
      }
    }
  };

  const initialBatch = Math.min(limit, tasks.length);

  await Promise.all(Array.from({ length: initialBatch }, (unused, idx) => executeTask(idx)));

  return results;
};
