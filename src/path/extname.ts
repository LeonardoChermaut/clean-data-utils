import { parsePath } from "./parsePath";

/**
 * Returns the file extension (including the dot) from a path.
 * @param sourcePath - The path to get the extension from.
 * @returns The file extension including the dot, or empty string if none.
 * @example
 * ```ts
 * extname("/home/user/documents/file.txt");
 * // Output: ".txt"
 * ```
 * @example
 * ```ts
 * extname("/home/user/documents/file");
 * // Output: ""
 * ```
 */
export const extname = (sourcePath: string): string => {
  if (!sourcePath || typeof sourcePath !== "string") {
    return "";
  }

  const { extension } = parsePath(sourcePath);

  return extension ? "." + extension : "";
};
