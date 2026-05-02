import { parsePath } from "./parsePath";

/**
 * Returns the filename portion of a path, optionally with the extension removed.
 * @param sourcePath - The path to get the basename from.
 * @param fileExtension - Optional extension to strip from the filename.
 * @returns The basename of the file.
 * @example
 * ```ts
 * basename("/home/user/documents/file.txt");
 * // Output: "file.txt"
 * ```
 * @example
 * ```ts
 * basename("/home/user/documents/file.txt", ".txt");
 * // Output: "file"
 * ```
 */
export const basename = (sourcePath: string, fileExtension?: string): string => {
  if (!sourcePath || typeof sourcePath !== "string") {
    return "";
  }

  const { basename } = parsePath(sourcePath);

  if (fileExtension && basename.endsWith(fileExtension)) {
    return basename.slice(0, -fileExtension.length);
  }

  return basename;
};
