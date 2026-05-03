/**
 * KeysOf - semantic shortcut for keyof T.
 * @example
 * ```ts
 * type KeysOf<{ a: string; b: number }> = "a" | "b"
 * ```
 */
export type KeysOf<T> = keyof T;
