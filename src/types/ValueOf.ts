/**
 * ValueOf - extracts the value types from an object.
 * @example
 * ```ts
 * type ValueOf<{ a: string; b: number }> = string | number
 * ```
 */
export type ValueOf<T> = T[keyof T];
