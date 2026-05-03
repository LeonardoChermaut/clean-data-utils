/**
 * Makes all properties of T recursively readonly.
 */
export type DeepReadonly<TData> = {
  readonly [P in keyof TData]: DeepReadonly<TData[P]>;
};
