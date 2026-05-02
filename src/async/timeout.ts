/**
 * Creates a promise that resolves after a specified timeout.
 * @param milliseconds - Timeout duration in milliseconds.
 * @returns A promise that resolves after the timeout.
 * @example
 * ```ts
 * await timeout(1000);
 * // Resolves after 1 second
 * ```
 */
export const timeout = (milliseconds: number): Promise<void> => {
  if (milliseconds <= 0) {
    return Promise.resolve();
  }

  return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
};
