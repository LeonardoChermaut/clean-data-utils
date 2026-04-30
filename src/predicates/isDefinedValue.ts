/**
 * Checks if a value is defined (not null or undefined).
 * This is the inverse of isNullOrUndefined.
 * @param value The value to check.
 * @returns True if the value is defined, false otherwise.
 * @example
 * ```ts
 * const value = 42;
 * const isDefined = isDefinedValue(value);
 * console.log(isDefined);
 * // Output: true
 * ```
 */
import { isNullOrUndefined } from "./isNullOrUndefined";

export const isDefinedValue = <T>(value: T | null | undefined): value is T =>
  !isNullOrUndefined(value);
