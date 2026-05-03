/**
 * Type that represents T or T[]. Useful for functions that accept single value or list.
 * @example
 * ```ts
 * type MaybeArray<string> = string | string[];
 * ```
 */
export type MaybeArray<T> = T | T[];
