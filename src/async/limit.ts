/**
 * Executes an array of async tasks with a specified level of concurrency.
 *
 * This function is useful for rate-limiting operations that shouldn't all run at once,
 * such as API requests, file operations, or database queries.
 *
 * @template T - The expected type of the resolved value of the promises.
 * @param {Array<() => Promise<T>>} tasks - An array of functions that return a Promise. Each function is executed independently.
 * @param {number} concurrency - The maximum number of tasks to run at the same time.
 * @returns {Promise<T[]>} A Promise that resolves to an array containing the results of all tasks in their original order.
 *
 * @example
 * const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
 *
 * const tasks = [
 *   async () => { await delay(100); return 'Task 1'; },
 *   async () => { await delay(50);  return 'Task 2'; },
 *   async () => { await delay(200); return 'Task 3'; },
 * ];
 *
 * const results = await limit(tasks, 2);
 * console.log(results); // ['Task 1', 'Task 2', 'Task 3']
 * // Note: 'Task 2' finishes first, but the results are ordered according to the input array.
 */
export const limit = async <T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number,
): Promise<T[]> => {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return [];
  }

  if (concurrency <= 0) {
    return Promise.all(tasks.map((task) => task()));
  }

  const results: T[] = [] as T[];
  let currentIndex = 0;

  const run = async (): Promise<void> => {
    while (currentIndex < tasks.length) {
      const index = currentIndex++;
      const task = tasks[index];

      if (task) {
        results[index] = await task();
      }
    }
  };

  const workerCount = Math.min(concurrency, tasks.length);
  const workers: Promise<void>[] = [];

  for (let idx = 0; idx < workerCount; idx++) {
    workers.push(run());
  }

  await Promise.all(workers);

  return results;
};
