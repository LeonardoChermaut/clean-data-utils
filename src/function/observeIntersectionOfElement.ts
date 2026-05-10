/**
 * Observes the intersection of a DOM element with the viewport or a specified root.
 * @param targetElement The DOM element to observe.
 * @param callback The function to call when intersection occurs.
 * @param options The IntersectionObserver options.
 * @returns A function to disconnect the observer.
 */
export const observeIntersectionOfElement = (
  targetElement: HTMLElement | null | undefined,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
): (() => void) => {
  if (!targetElement || typeof window === "undefined" || !window.IntersectionObserver) {
    return () => {};
  }

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetElement);

  return () => observer.disconnect();
};
