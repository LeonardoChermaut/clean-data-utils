/**
 * Validates a hexadecimal color code (#RGB or #RRGGBB).
 * @param value - The color string to validate.
 * @returns True if valid hex color, false otherwise.
 * @example
 * ```ts
 * const result = isValidHexColor("#FF0000");
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isValidHexColor("#F00");
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isValidHexColor("#GGGGGG");
 * console.log(result);
 * // Output: false
 * ```
 */
export const isValidHexColor = (value: string): boolean => {
  if (!value.startsWith("#")) {
    return false;
  }

  const hex = value.slice(1);

  if (hex.length !== 3 && hex.length !== 6) {
    return false;
  }

  return /^[0-9A-Fa-f]+$/.test(hex);
};
