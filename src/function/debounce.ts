/**
 * Creates a debounced version of a callback function.
 * @param callback - The function to debounce.
 * @param delay - The delay in milliseconds.
 * @returns A debounced function.
 * @example
 * ```ts
 * const debounced = debounce(() => console.log("hi"), 100);
 * debounced();
 * debounced();
 * // Only logs "hi" once after 100ms
 * ```
 */
export const debounce = <TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delay: number,
): ((...args: TArgs) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: TArgs) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
};
