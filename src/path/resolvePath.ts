/**
 * Resolves a path relative to a base path, handling ".." and "." segments.
 * @param basePath - The base path.
 * @param relativePath - The relative path to resolve.
 * @returns The resolved absolute path.
 * @example
 * ```ts
 * resolvePath("/home/user/documents", "../pictures");
 * // Output: "/home/user/pictures"
 * ```
 * @example
 * ```ts
 * resolvePath("/home/user", "./documents/file.txt");
 * // Output: "/home/user/documents/file.txt"
 * ```
 */
export const resolvePath = (basePath: string, relativePath: string): string => {
  if (!basePath || typeof basePath !== "string") {
    return relativePath || "";
  }

  if (!relativePath || typeof relativePath !== "string") {
    return basePath;
  }

  const baseNormalized = basePath.replace(/\\/g, "/");
  const relativeNormalized = relativePath.replace(/\\/g, "/");

  if (relativeNormalized.startsWith("/")) {
    return relativeNormalized;
  }

  const segments = [...baseNormalized.split("/"), ...relativeNormalized.split("/")];

  const resolvedSegments: string[] = [];

  for (const segment of segments) {
    if (segment === "" || segment === ".") {
      continue;
    }

    if (segment === "..") {
      if (resolvedSegments.length > 0 && resolvedSegments[resolvedSegments.length - 1] !== "..") {
        resolvedSegments.pop();
      } else {
        resolvedSegments.push(segment);
      }
    } else {
      resolvedSegments.push(segment);
    }
  }

  let result = resolvedSegments.join("/");

  if (baseNormalized.startsWith("/")) {
    result = "/" + result;
  }

  return result || "/";
};
