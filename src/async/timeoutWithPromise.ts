import { timeout } from "./timeout";

/**
 * Adds a timeout to a promise. Rejects if the timeout is reached before the promise resolves.
 * @param promise - The promise to add timeout to.
 * @param milliseconds - Timeout duration in milliseconds.
 * @returns The result of the original promise, or a timeout error.
 * @example
 * ```ts
 * const result = await timeoutWithPromise(fetchData(), 5000);
 * // Throws if fetchData takes more than 5 seconds
 * ```
 */
export const timeoutWithPromise = <T>(promise: Promise<T>, milliseconds: number): Promise<T> => {
  if (milliseconds <= 0) {
    return promise;
  }

  return Promise.race([
    promise,
    timeout(milliseconds).then(() => {
      throw new Error(`Operation timed out after ${milliseconds}ms`);
    }),
  ]);
};
