import { parsePath } from "./parsePath";

/**
 * Returns the directory portion of a path.
 * @param sourcePath - The path to get the directory from.
 * @returns The directory portion of the path.
 * @example
 * ```ts
 * dirname("/home/user/documents/file.txt");
 * // Output: "/home/user/documents"
 * ```
 * @example
 * ```ts
 * dirname("file.txt");
 * // Output: "."
 * ```
 */
export const dirname = (sourcePath: string): string => {
  if (!sourcePath || typeof sourcePath !== "string") {
    return ".";
  }

  const { directory } = parsePath(sourcePath);

  return directory || ".";
};
