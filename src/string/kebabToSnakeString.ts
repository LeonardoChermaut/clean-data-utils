/**
 * Converts a kebab-case string to snake_case.
 * @param sourceString - The kebab-case string to convert.
 * @returns The snake_case string.
 * @example
 * ```ts
 * const result = kebabToSnakeString("hello-world");
 * console.log(result);
 * // Output: "hello_world"
 * ```
 * @example
 * ```ts
 * const result = kebabToSnakeString("user-id");
 * console.log(result);
 * // Output: "user_id"
 * ```
 */
export const kebabToSnakeString = (sourceString: string): string => {
  return sourceString.replace(/-/g, "_").toLowerCase();
};
