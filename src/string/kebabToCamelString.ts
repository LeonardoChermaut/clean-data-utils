/**
 * Converts a kebab-case string to camelCase.
 * @param sourceString The kebab-case string to convert.
 * @returns The camelCase string.
 * @example
 * ```ts
 * const result = kebabToCamelString("hello-world");
 * console.log(result);
 * // Output: "helloWorld"
 * ```
 */
export const kebabToCamelString = (sourceString: string): string => {
  if (!sourceString.includes("-")) {
    return sourceString;
  }

  const parts = sourceString.split("-").filter((part) => part.length > 0);

  return parts
    .map((part, index) => {
      if (index === 0) {
        return part.toLowerCase();
      }

      return part[0]?.toUpperCase() + part.slice(1).toLowerCase();
    })
    .join("");
};
