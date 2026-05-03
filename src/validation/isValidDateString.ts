/**
 * Validates if a string is a valid date.
 * Supports multiple separators and date order formats for global use.
 * @param sourceString - The string to validate.
 * @param options - Optional configuration for date validation.
 * @returns True if the string is a valid date, false otherwise.
 * @example
 * ```ts
 * isValidDateString("2024-01-15");
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidDateString("2024-01-15T10:30:00Z", { mode: "date-time" });
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidDateString("15/01/2024", { separator: "/", dayFirst: true });
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidDateString("01/15/2024", { separator: "/", monthFirst: true });
 * // Output: true
 * ```
 * @example
 * ```ts
 * isValidDateString("15.01.2024", { separator: ".", dayFirst: true });
 * // Output: true
 * ```
 */
export const isValidDateString = (
  sourceString: string,
  options?: {
    mode?: "date" | "date-time";
    separator?: string;
    dayFirst?: boolean;
    monthFirst?: boolean;
  },
): boolean => {
  if (!sourceString || typeof sourceString !== "string") {
    return false;
  }

  const config = {
    mode: options?.mode ?? "date",
    separator: options?.separator ?? "-",
    dayFirst: options?.dayFirst ?? false,
    monthFirst: options?.monthFirst ?? false,
  };

  if (config.mode === "date-time") {
    const date = new Date(sourceString);
    return !Number.isNaN(date.getTime());
  }

  const separator = config.separator;
  const dayPattern = "(0[1-9]|[12]\\d|3[01])";
  const monthPattern = "(0[1-9]|1[0-2])";
  const yearPattern = "\\d{4}";

  let regexPattern: string;

  if (config.monthFirst) {
    regexPattern = `^${monthPattern}${separator}${dayPattern}${separator}${yearPattern}$`;
  } else if (config.dayFirst) {
    regexPattern = `^${dayPattern}${separator}${monthPattern}${separator}${yearPattern}$`;
  } else {
    regexPattern = `^${yearPattern}${separator}${monthPattern}${separator}${dayPattern}$`;
  }

  const regex = new RegExp(regexPattern);
  if (!regex.test(sourceString)) {
    return false;
  }

  const [yearValue, monthValue, dayValue] = sourceString.split(separator).map(Number);

  let year: number;
  let month: number;
  let day: number;

  if (config.monthFirst) {
    month = yearValue!;
    day = monthValue!;
    year = dayValue!;
  } else if (config.dayFirst) {
    day = yearValue!;
    month = monthValue!;
    year = dayValue!;
  } else {
    year = yearValue!;
    month = monthValue!;
    day = dayValue!;
  }

  if (year < 1000 || year > 9999) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  if (day < 1 || day > 31) {
    return false;
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const maxDay = month === 2 && isLeapYear ? 29 : daysInMonth[month - 1]!;

  if (day > maxDay) {
    return false;
  }

  return true;
};
