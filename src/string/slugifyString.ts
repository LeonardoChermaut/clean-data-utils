/**
 * Converts a string into a URL-friendly slug.
 * @param sourceString - The string to slugify.
 * @param separator - The separator to use (default: "-").
 * @returns The slugified string.
 * @example
 * ```ts
 * const result = slugifyString("Hello World");
 * console.log(result);
 * // Output: "hello-world"
 * ```
 * @example
 * ```ts
 * const result = slugifyString("My Blog Post", "_");
 * console.log(result);
 * // Output: "my_blog_post"
 * ```
 */
export const slugifyString = (sourceString: string, separator: string = "-"): string => {
  return sourceString
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, separator)
    .replace(new RegExp(`[${separator}]+`, "g"), separator)
    .replace(new RegExp(`^${separator}|${separator}$`, "g"), "");
};
