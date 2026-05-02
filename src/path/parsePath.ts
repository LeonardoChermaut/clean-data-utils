/**
 * Parses a path string into its component parts.
 * @param sourcePath - The path to parse.
 * @returns An object with directory, filename, extension, and basename.
 * @example
 * ```ts
 * parsePath("/home/user/documents/file.txt");
 * // Output: { directory: "/home/user/documents", basename: "file.txt", extension: "txt", filename: "file" }
 * ```
 */
export const parsePath = (
  sourcePath: string,
): {
  directory: string;
  basename: string;
  extension: string;
  filename: string;
} => {
  if (!sourcePath || typeof sourcePath !== "string") {
    return {
      directory: "",
      basename: "",
      extension: "",
      filename: "",
    };
  }

  const normalizedPath = sourcePath.replace(/\\/g, "/");

  const lastSlashIndex = normalizedPath.lastIndexOf("/");

  let directory = "";
  let basename = "";

  if (lastSlashIndex === -1) {
    basename = normalizedPath;
  } else if (lastSlashIndex === normalizedPath.length - 1) {
    directory = normalizedPath;
    basename = "";
  } else {
    directory = normalizedPath.slice(0, lastSlashIndex);
    basename = normalizedPath.slice(lastSlashIndex + 1);
  }

  const lastDotIndex = basename.lastIndexOf(".");
  let filename = basename;
  let extension = "";

  if (lastDotIndex > 0) {
    filename = basename.slice(0, lastDotIndex);
    extension = basename.slice(lastDotIndex + 1);
  }

  return {
    directory,
    basename,
    extension,
    filename,
  };
};
