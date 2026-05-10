/**
 * Executes a function and measures its synchronous execution time.
 * @param callback The function to execute.
 * @param callbackArgs The arguments to pass to the function.
 * @returns A tuple containing the function's result and the execution duration in milliseconds.
 */
export const measurePerformanceOfFunction = <TArgs extends unknown[], TResult>(
  callback: (...args: TArgs) => TResult,
  callbackArgs: TArgs,
): [TResult, number] => {
  const isPerformanceSupported = typeof performance !== "undefined";
  const startTime = isPerformanceSupported ? performance.now() : Date.now();

  const result = callback(...callbackArgs);

  const endTime = isPerformanceSupported ? performance.now() : Date.now();
  const duration = endTime - startTime;

  return [result, duration];
};
