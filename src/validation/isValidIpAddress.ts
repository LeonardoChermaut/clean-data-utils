/**
 * Validates an IPv4 or IPv6 address.
 * @param value - The IP address string.
 * @param version - "v4", "v6", or "any" (default).
 * @returns True if valid, false otherwise.
 * @example
 * ```ts
 * const result = isValidIpAddress("192.168.1.1");
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isValidIpAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334", "v6");
 * console.log(result);
 * // Output: true
 * ```
 */
export const isValidIpAddress = (value: string, version: "v4" | "v6" | "any" = "any"): boolean => {
  if (version === "any" || version === "v4") {
    const ipv4Regex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (ipv4Regex.test(value)) {
      return true;
    }
  }

  if (version === "any" || version === "v6") {
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

    if (ipv6Regex.test(value)) {
      return true;
    }
  }

  return false;
};
