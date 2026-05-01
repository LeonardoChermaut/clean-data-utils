/**
 * Creates a throttled version of a callback function.
 * @param callback - The function to throttle.
 * @param limit - The time limit in milliseconds.
 * @returns A throttled function.
 * @example
 * ```ts
 * const throttled = throttle(() => console.log("hi"), 100);
 * throttled();
 * throttled();
 * // Only logs "hi" once, then again after 100ms
 * ```
 */
export const throttle = <TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  limit: number,
): ((...args: TArgs) => void) => {
  let lastCall = 0;

  return (...args: TArgs) => {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      callback(...args);
    }
  };
};
