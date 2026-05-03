/**
 * Converts a snake_case string to camelCase.
 * @param sourceString - The snake_case string to convert.
 * @returns The camelCase string.
 * @example
 * ```ts
 * const result = snakeToCamelString("hello_world");
 * console.log(result);
 * // Output: "helloWorld"
 * ```
 * @example
 * ```ts
 * const result = snakeToCamelString("user_id");
 * console.log(result);
 * // Output: "userId"
 * ```
 */
export const snakeToCamelString = (sourceString: string): string => {
  return sourceString
    .split("_")
    .map((part, index) => {
      if (index === 0) {
        return part.toLowerCase();
      }

      return part[0]?.toUpperCase() + part.slice(1).toLowerCase();
    })
    .join("");
};
