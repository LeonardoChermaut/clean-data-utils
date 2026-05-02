/**
 * Joins multiple path segments into a single normalized path.
 * @param pathSegments - Array of path segments to join.
 * @returns The joined and normalized path string.
 * @example
 * ```ts
 * joinPath(["/home", "user", "documents"]);
 * // Output: "/home/user/documents"
 * ```
 * @example
 * ```ts
 * joinPath(["/home", "../home/user"]);
 * // Output: "/home/user"
 * ```
 */
export const joinPath = (...pathSegments: string[]): string => {
  if (pathSegments.length === 0) {
    return "";
  }

  const filteredSegments = pathSegments.filter((segment) => segment.length > 0);

  if (filteredSegments.length === 0) {
    return "";
  }

  let result = filteredSegments.join("/");

  result = result.replace(/\/+/g, "/");

  return result;
};
