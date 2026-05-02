/**
 * Converts a camelCase string to kebab-case.
 * @param sourceString The camelCase string to convert.
 * @returns The kebab-case string.
 * @example
 * ```ts
 * const result = camelToKebabString("helloWorld");
 * console.log(result);
 * // Output: "hello-world"
 * ```
 */
export const camelToKebabString = (sourceString: string): string => {
  const step1 = sourceString.replace(/_/g, "-");
  const step2 = step1.replace(/([a-z0-9])([A-Z])/g, "$1-$2");
  const step3 = step2.replace(/([a-zA-Z])([0-9])/g, "$1-$2");
  const step4 = step3.replace(/([0-9])([a-zA-Z])/g, "$1-$2");
  return step4.toLowerCase();
};
