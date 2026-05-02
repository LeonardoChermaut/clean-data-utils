/**
 * Converts a camelCase string to snake_case.
 * @param sourceString The camelCase string to convert.
 * @returns The snake_case string.
 * @example
 * ```ts
 * const result = camelToSnakeString("helloWorld");
 * console.log(result);
 * // Output: "hello_world"
 * ```
 */
export const camelToSnakeString = (sourceString: string): string => {
  const step1 = sourceString.replace(/-/g, "_");
  const step2 = step1.replace(/([a-z0-9])([A-Z])/g, "$1_$2");
  const step3 = step2.replace(/([a-zA-Z])([0-9])/g, "$1_$2");
  const step4 = step3.replace(/([0-9])([a-zA-Z])/g, "$1_$2");
  return step4.toLowerCase();
};
