/**
 * Returns a promise that resolves after the specified milliseconds.
 * @param milliseconds - The delay in milliseconds.
 * @returns A promise that resolves after the delay.
 * @example
 * ```ts
 * await delay(100);
 * // Resolves after 100ms
 * ```
 */
export const delay = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
