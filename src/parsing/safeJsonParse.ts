/**
 * Parses a JSON string safely.
 * @param jsonString - The JSON string to parse.
 * @returns The parsed value or undefined if parsing fails.
 * @example
 * ```ts
 * const result = safeJsonParse('{"key": "value"}');
 * console.log(result);
 * // Output: { key: "value" }
 * ```
 * @example
 * ```ts
 * const result = safeJsonParse("invalid json");
 * console.log(result);
 * // Output: undefined
 * ```
 */
export const safeJsonParse = (jsonString: string): unknown => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return undefined;
  }
};
