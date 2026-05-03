import { isNullOrUndefined } from "./isNullOrUndefined";
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

export const isDefinedValue = <TValue>(value: TValue | null | undefined): value is TValue =>
  !isNullOrUndefined(value);
