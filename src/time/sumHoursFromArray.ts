/**
 * Sums an array of time strings (hours).
 * Formats accepted: HH:mm, HH:mm:ss, large totals like 158:58.
 * Invalid entries are ignored.
 * @param values - Array of hour strings to sum.
 * @param includeSeconds - Whether to include seconds in output.
 * @returns Formatted sum string.
 * @example
 * ```ts
 * const result = sumHoursFromArray(["10:30", "05:45", "02:15"]);
 * console.log(result);
 * // Output: "18:30"
 * ```
 * @example
 * ```ts
 * const result = sumHoursFromArray(["100:00", "50:00"], true);
 * console.log(result);
 * // Output: "150:00:00"
 * ```
 */
export const sumHoursFromArray = (values: string[], includeSeconds: boolean = false): string => {
  let totalMinutesAccumulated = 0;

  for (const hourStringValue of values) {
    const parsedMinutes = parseHourStringToMinutes(hourStringValue, false);

    if (parsedMinutes !== undefined) {
      totalMinutesAccumulated += parsedMinutes;
    }
  }

  const totalHours = Math.floor(totalMinutesAccumulated / 60);
  const remainingMinutes = totalMinutesAccumulated % 60;

  if (includeSeconds) {
    return `${String(totalHours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}:00`;
  }

  return `${String(totalHours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}`;
};

/**
 * Parses a single hour string to total minutes.
 */
const parseHourStringToMinutes = (
  hourStringValue: string,
  includeSecondsFlag: boolean,
): number | undefined => {
  const trimmedValue = hourStringValue.trim();

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

    if (Number.isNaN(hoursParsed) || Number.isNaN(minutesParsed)) {
      return undefined;
    }

    return hoursParsed * 60 + minutesParsed;
  }

  if (splitParts.length === 3 && includeSecondsFlag) {
    const hoursPart = splitParts[0];
    const minutesPart = splitParts[1];
    const secondsPart = splitParts[2];

    if (hoursPart === undefined || minutesPart === undefined || secondsPart === undefined) {
      return undefined;
    }

    const hoursParsed = Number.parseInt(hoursPart, 10);
    const minutesParsed = Number.parseInt(minutesPart, 10);
    const secondsParsed = Number.parseInt(secondsPart, 10);

    if (Number.isNaN(hoursParsed) || Number.isNaN(minutesParsed) || Number.isNaN(secondsParsed)) {
      return undefined;
    }

    return hoursParsed * 60 + minutesParsed;
  }

  if (splitParts.length === 1) {
    const totalPart = splitParts[0];

    if (totalPart === undefined) {
      return undefined;
    }

    const totalParsed = Number.parseInt(totalPart, 10);

    if (Number.isNaN(totalParsed)) {
      return undefined;
    }

    return totalParsed;
  }

  return undefined;
};
