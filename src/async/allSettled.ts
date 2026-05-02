/**
 * Executes promises and returns an array of results (fulfilled or rejected).
 * @param tasks - Array of promises to execute.
 * @returns Array of results with status and value/error.
 * @example
 * ```ts
 * const results = await allSettled([
 *   Promise.resolve('success'),
 *   Promise.reject('error'),
 * ]);
 * // [{ status: 'fulfilled', value: 'success' }, { status: 'rejected', reason: 'error' }]
 * ```
 */
export const allSettled = async <T>(
  tasks: Array<Promise<T>>,
): Promise<Array<{ status: "fulfilled"; value: T } | { status: "rejected"; reason: unknown }>> => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return [];
  }

  return Promise.allSettled(tasks);
};
