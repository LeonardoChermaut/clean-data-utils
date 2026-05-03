/**
 * NonEmptyArray - guarantees at compile time that array has at least one element.
 * @example
 * ```ts
 * type NonEmptyArray<string> = [string, ...string[]];
 * ```
 */
export type NonEmptyArray<T> = [T, ...T[]];
