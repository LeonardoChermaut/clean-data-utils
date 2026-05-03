/**
 * Normalizes a time string to HH:mm or HH:mm:ss format.
 * Invalid input returns undefined.
 * @param sourceString - The time string to normalize.
 * @param includeSeconds - Whether to include seconds in output.
 * @returns Normalized time string or undefined.
 * @example
 * ```ts
 * const result = formatHourString("10:30");
 * console.log(result);
 * // Output: "10:30"
 * ```
 * @example
 * ```ts
 * const result = formatHourString("10:30:45", true);
 * console.log(result);
 * // Output: "10:30:45"
 * ```
 * @example
 * ```ts
 * const result = formatHourString("invalid");
 * console.log(result);
 * // Output: undefined
 * ```
 */
export const formatHourString = (
  sourceString: string,
  includeSeconds: boolean = false,
): string | undefined => {
  const trimmedValue = sourceString.trim();

  if (trimmedValue === "") {
    return undefined;
  }

  const splitParts = trimmedValue.split(":");

  if (splitParts.length === 2) {
    const hoursPart = splitParts[0];
    const minutesPart = splitParts[1];

    if (hoursPart === undefined || minutesPart === undefined) {
      return undefined;
    }

    const hoursParsed = Number.parseInt(hoursPart, 10);
    const minutesParsed = Number.parseInt(minutesPart, 10);

    if (
      Number.isNaN(hoursParsed) ||
      Number.isNaN(minutesParsed) ||
      hoursParsed < 0 ||
      minutesParsed < 0 ||
      minutesParsed >= 60
    ) {
      return undefined;
    }

    return includeSeconds
      ? `${String(hoursParsed).padStart(2, "0")}:${String(minutesParsed).padStart(2, "0")}:00`
      : `${String(hoursParsed).padStart(2, "0")}:${String(minutesParsed).padStart(2, "0")}`;
  }

  if (splitParts.length === 3) {
    const hoursPart = splitParts[0];
    const minutesPart = splitParts[1];
    const secondsPart = splitParts[2];

    if (hoursPart === undefined || minutesPart === undefined || secondsPart === undefined) {
      return undefined;
    }

    const hoursParsed = Number.parseInt(hoursPart, 10);
    const minutesParsed = Number.parseInt(minutesPart, 10);
    const secondsParsed = Number.parseInt(secondsPart, 10);

    if (
      Number.isNaN(hoursParsed) ||
      Number.isNaN(minutesParsed) ||
      Number.isNaN(secondsParsed) ||
      hoursParsed < 0 ||
      minutesParsed < 0 ||
      minutesParsed >= 60 ||
      secondsParsed < 0 ||
      secondsParsed >= 60
    ) {
      return undefined;
    }

    return `${String(hoursParsed).padStart(2, "0")}:${String(minutesParsed).padStart(2, "0")}:${String(secondsParsed).padStart(2, "0")}`;
  }

  return undefined;
};
