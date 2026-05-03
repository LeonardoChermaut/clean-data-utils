/**
 * DeepPartial - recursive partial type.
 * Makes all properties optional at all levels.
 * @example
 * ```ts
 * type PartialUser = DeepPartial<{
 *   name: string;
 *   address: { city: string; zip: number };
 * }>;
 * // { name?: string; address?: { city?: string; zip?: number } }
 * ```
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
