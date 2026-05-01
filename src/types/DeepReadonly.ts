/**
 * Makes all properties of T recursively readonly.
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
