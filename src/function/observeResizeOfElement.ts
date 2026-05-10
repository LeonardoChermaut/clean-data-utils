/**
 * Observes size changes of a DOM element.
 * @param targetElement The DOM element to observe.
 * @param callback The function to call when resize occurs.
 * @param options The ResizeObserver options.
 * @returns A function to disconnect the observer.
 */
export const observeResizeOfElement = (
  targetElement: HTMLElement | null | undefined,
  callback: ResizeObserverCallback,
  options?: ResizeObserverOptions,
): (() => void) => {
  if (!targetElement || typeof window === "undefined" || !window.ResizeObserver) {
    return () => {};
  }

  const observer = new ResizeObserver(callback);
  observer.observe(targetElement, options);

  return () => {
    observer.disconnect();
  };
};
