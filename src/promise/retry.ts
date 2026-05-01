/**
 * Retries an async operation with exponential backoff.
 * @param operation - The async operation to retry.
 * @param options - The retry options.
 * @returns The result of the operation.
 * @example
 * ```ts
 * const result = await retry(() => fetch("/api").then(r => r.json()));
 * ```
 * @example
 * ```ts
 * const result = await retry(() => fetch("/api"), { maxRetries: 3, baseDelay: 100 });
 * ```
 */
export const retry = async <T>(
  operation: () => Promise<T>,
  options?: { maxRetries?: number; baseDelay?: number },
): Promise<T> => {
  const maxRetries = options?.maxRetries ?? 3;
  const baseDelay = options?.baseDelay ?? 100;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;

      if (attempt < maxRetries) {
        const delayMs = baseDelay * 2 ** attempt;

        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  }

  throw lastError;
};
