/**
 * Observes mutations in a DOM element and calls the callback when they occur.
 * @param targetElement The DOM element to observe.
 * @param callback The function to call when mutations occur.
 * @param options The MutationObserver options.
 * @returns A function to disconnect the observer.
 */
export const observeMutationsInElement = (
  targetElement: HTMLElement | null | undefined,
  callback: MutationCallback,
  options?: MutationObserverInit,
): (() => void) => {
  if (!targetElement || typeof window === "undefined" || !window.MutationObserver) {
    return () => {};
  }

  const defaultOptions: MutationObserverInit = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetElement, options || defaultOptions);

  return () => observer.disconnect();
};
