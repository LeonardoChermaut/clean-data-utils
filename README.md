# clean-data-utils

> Utility functions for predictable data normalization and transformation.

Zero runtime dependencies. No mutation. Fully typed TypeScript generics.
Every function composes with others — predicates flow into transformers, transformers into pipelines.

[![npm](https://img.shields.io/npm/v/clean-data-utils)](https://www.npmjs.com/package/clean-data-utils)
[![license](https://img.shields.io/npm/l/clean-data-utils)](./LICENSE)
[![types](https://img.shields.io/npm/types/clean-data-utils)](https://www.npmjs.com/package/clean-data-utils)

---

## Installation

```bash
yarn add clean-data-utils
# or
npm install clean-data-utils
```

Requires **Node.js ≥ 18**. Ships with ESM, CJS, and `.d.ts` declaration files.
Tree-shaking is fully supported — import only what you use.

---

## Quick start

```typescript
import {
  removeFalsyValuesFromArray,
  removeNullOrUndefinedValuesFromArray,
  getFirstElementFromArray,
  getLastElementFromArray,
  flattenArray,
  uniqueValuesFromArray,
  groupArrayByKey,
  chunkArray,
  partitionArray,
  differenceBetweenArrays,
  removeUndefinedPropertiesFromObject,
  pickPropertiesFromObject,
  omitPropertiesFromObject,
  mapObjectValues,
  mergeObjects,
  hasDefinedProperty,
  hasOwnProperty,
  getDefinedPropertiesFromObject,
  splitStringAndRemoveEmptySegments,
  normalizeWhitespace,
  truncateString,
  ensurePrefix,
  ensureSuffix,
  removePrefix,
  isTruthyValue,
  isNullOrUndefined,
  isUndefined,
  isDefinedValue,
  isNonEmptyArray,
  isNonEmptyString,
} from "clean-data-utils";
```

---

## API Reference

### Array

---

#### `removeFalsyValuesFromArray<TElement>`

```typescript
const removeFalsyValuesFromArray = <TElement>(
  values: TElement[]
): TElement[] => ...
```

Removes all falsy values from an array. Internally uses `isTruthyValue` for type-safe narrowing.

**Removes:** `null`, `undefined`, `""`, `0`, `false`, `NaN`

> If you need to preserve `0`, `false`, or `""`, use `removeNullOrUndefinedValuesFromArray` instead.

```typescript
removeFalsyValuesFromArray(["a", "", null, "b", 0, false]);
// → ["a", "b"]

removeFalsyValuesFromArray([]);
// → []
```

---

#### `removeNullOrUndefinedValuesFromArray<TElement>`

```typescript
const removeNullOrUndefinedValuesFromArray = <TElement>(
  values: (TElement | null | undefined)[]
): TElement[] => ...
```

Removes only `null` and `undefined`. Preserves `0`, `false`, and `""`.

```typescript
removeNullOrUndefinedValuesFromArray([null, 0, "a", undefined, false]);
// → [0, "a", false]
```

---

#### `getFirstElementFromArray<TElement>`

```typescript
const getFirstElementFromArray = <TElement>(
  values: TElement[]
): TElement | undefined => ...
```

Returns the first element of an array, or `undefined` if empty.

```typescript
getFirstElementFromArray([10, 20, 30]);
// → 10

getFirstElementFromArray([]);
// → undefined
```

---

#### `getLastElementFromArray<TElement>`

```typescript
const getLastElementFromArray = <TElement>(
  values: TElement[]
): TElement | undefined => ...
```

Returns the last element of an array, or `undefined` if empty.

```typescript
getLastElementFromArray([10, 20, 30]);
// → 30

getLastElementFromArray([]);
// → undefined
```

---

#### `flattenArray<TElement>`

```typescript
const flattenArray = <TElement>(
  values: TElement[][]
): TElement[] => ...
```

Flattens one level of nesting. Typed end-to-end — no widening to `unknown`.

```typescript
flattenArray([[1, 2], [3, 4], [5]]);
// → [1, 2, 3, 4, 5]

flattenArray([]);
// → []
```

---

#### `uniqueValuesFromArray<TElement>`

```typescript
const uniqueValuesFromArray = <TElement>(
  values: TElement[],
  comparator?: (a: TElement, b: TElement) => boolean
): TElement[] => ...
```

Returns an array with duplicate values removed. Accepts an optional comparator for custom equality — useful for objects and non-primitive types.

```typescript
uniqueValuesFromArray([1, 2, 2, 3, 1]);
// → [1, 2, 3]

uniqueValuesFromArray([{ id: 1 }, { id: 2 }, { id: 1 }], (a, b) => a.id === b.id);
// → [{ id: 1 }, { id: 2 }]
```

---

#### `groupArrayByKey<TElement, TKey>`

```typescript
const groupArrayByKey = <TElement, TKey extends string | number | symbol>(
  values: TElement[],
  getKey: (element: TElement) => TKey
): Record<TKey, TElement[]> => ...
```

Groups array elements by a key extracted from each element. The key extractor is injected — no hardcoded field access.

```typescript
groupArrayByKey(
  [
    { role: "admin", name: "Alice" },
    { role: "user", name: "Bob" },
    { role: "admin", name: "Carol" },
  ],
  (person) => person.role,
);
// → { admin: [{ role: "admin", name: "Alice" }, { role: "admin", name: "Carol" }], user: [{ role: "user", name: "Bob" }] }
```

---

#### `chunkArray<TElement>`

```typescript
const chunkArray = <TElement>(
  values: TElement[],
  chunkSize: number
): TElement[][] => ...
```

Splits an array into chunks of the specified size. The last chunk may be smaller.
Returns `[]` for non-positive `chunkSize`.

```typescript
chunkArray([1, 2, 3, 4, 5], 2);
// → [[1, 2], [3, 4], [5]]

chunkArray([], 3);
// → []
```

---

#### `partitionArray<TElement>`

```typescript
const partitionArray = <TElement>(
  values: TElement[],
  predicate: (value: TElement) => boolean
): [TElement[], TElement[]] => ...
```

Partitions an array into two arrays based on a predicate. The first array contains elements that match, the second contains elements that don't.

```typescript
partitionArray([1, 2, 3, 4, 5], (n) => n > 2);
// → [[3, 4, 5], [1, 2]]

partitionArray([1, 2, 3], () => false);
// → [[], [1, 2, 3]]
```

---

#### `differenceBetweenArrays<TElement>`

```typescript
const differenceBetweenArrays = <TElement>(
  base: TElement[],
  compare: TElement[]
): TElement[] => ...
```

Returns elements that are in the base array but not in the compare array.

```typescript
differenceBetweenArrays([1, 2, 3, 4, 5], [2, 4]);
// → [1, 3, 5]

differenceBetweenArrays([1, 2, 3], [1, 2, 3]);
// → []
```

---

### Object

---

#### `removeUndefinedPropertiesFromObject<TObject>`

```typescript
const removeUndefinedPropertiesFromObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject
): Partial<TObject> => ...
```

Returns a new object with all keys whose value is `undefined` removed.
Preserves `null`, `0`, `false`, and `""`.

```typescript
removeUndefinedPropertiesFromObject({ name: "Alice", age: undefined, active: false });
// → { name: "Alice", active: false }
```

---

#### `pickPropertiesFromObject<TObject, KeyType>`

```typescript
const pickPropertiesFromObject = <
  TObject extends Record<string, unknown>,
  KeyType extends keyof TObject
>(
  sourceObject: TObject,
  selectedKeys: KeyType[]
): Pick<TObject, KeyType> => ...
```

Returns a new object containing only the specified keys. Keys not present in the source are silently ignored.

```typescript
pickPropertiesFromObject({ name: "Alice", age: 30, role: "admin" }, ["name", "role"]);
// → { name: "Alice", role: "admin" }
```

---

#### `omitPropertiesFromObject<TObject, KeyType>`

```typescript
const omitPropertiesFromObject = <
  TObject extends Record<string, unknown>,
  KeyType extends keyof TObject
>(
  sourceObject: TObject,
  omittedKeys: KeyType[]
): Omit<TObject, KeyType> => ...
```

Returns a new object with the specified keys removed. Inverse of `pickPropertiesFromObject`.

```typescript
omitPropertiesFromObject({ name: "Alice", age: 30, role: "admin" }, ["age"]);
// → { name: "Alice", role: "admin" }
```

---

#### `mapObjectValues<TObject, TResult>`

```typescript
const mapObjectValues = <TObject extends Record<string, unknown>, TResult>(
  sourceObject: TObject,
  transform: (value: TObject[keyof TObject], key: keyof TObject) => TResult
): Record<keyof TObject, TResult> => ...
```

Transforms the values of an object while preserving its keys. The transform function receives both the value and the key.

```typescript
mapObjectValues({ a: 1, b: 2, c: 3 }, (value) => value * 10);
// → { a: 10, b: 20, c: 30 }

mapObjectValues({ name: "alice", role: "admin" }, (value) => String(value).toUpperCase());
// → { name: "ALICE", role: "ADMIN" }
```

---

#### `mergeObjects<TFirst, TSecond>`

```typescript
const mergeObjects = <
  TFirst extends Record<string, unknown>,
  TSecond extends Record<string, unknown>
>(
  firstObject: TFirst,
  secondObject: TSecond
): TFirst & TSecond => ...
```

Returns a new object merging both inputs. Properties from `secondObject` override `firstObject`. Neither input is mutated.

```typescript
mergeObjects({ name: "Alice", age: 30 }, { age: 31, role: "admin" });
// → { name: "Alice", age: 31, role: "admin" }
```

---

#### `hasDefinedProperty<TObject, KeyType>`

```typescript
const hasDefinedProperty = <
  TObject extends Record<string, unknown>,
  KeyType extends keyof TObject
>(
  sourceObject: TObject,
  key: KeyType
): sourceObject is TObject & Record<KeyType, NonNullable<TObject[KeyType]>> => ...
```

Type-safe check that a key exists on an object and its value is not `undefined`. Narrows the type at the callsite.

```typescript
const user = { name: "Alice", age: undefined };

if (hasDefinedProperty(user, "age")) {
  user.age; // narrowed: not undefined
}

hasDefinedProperty(user, "name"); // → true
hasDefinedProperty(user, "age"); // → false
```

---

#### `hasOwnProperty<TObject, TKey>`

```typescript
const hasOwnProperty = <TObject extends Record<string, unknown>, TKey extends PropertyKey>(
  sourceObject: TObject,
  key: TKey
): key is Extract<TKey, keyof TObject> => ...
```

Type-safe check that a key exists on an object (regardless of its value). Unlike `hasDefinedProperty`, this returns `true` even for `undefined` values.

```typescript
const user = { name: "Alice", age: undefined };

hasOwnProperty(user, "name"); // → true
hasOwnProperty(user, "age"); // → true
hasOwnProperty(user, "role"); // → false
```

---

#### `getDefinedPropertiesFromObject<TObject>`

```typescript
const getDefinedPropertiesFromObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject
): Partial<{ [K in keyof TObject]: Exclude<TObject[K], undefined> }> => ...
```

Returns a new object containing only properties that are not `undefined`. Preserves `null` values.

```typescript
getDefinedPropertiesFromObject({ a: 1, b: undefined, c: "hello" });
// → { a: 1, c: "hello" }

getDefinedPropertiesFromObject({ a: null, b: undefined });
// → { a: null }
```

---

### String

---

#### `splitStringAndRemoveEmptySegments`

```typescript
const splitStringAndRemoveEmptySegments = (
  sourceString: string,
  separator: string
): string[] => ...
```

Splits a string by separator and removes empty segments. Internally delegates to `removeFalsyValuesFromArray`.

```typescript
splitStringAndRemoveEmptySegments("a,,b,,c", ",");
// → ["a", "b", "c"]

splitStringAndRemoveEmptySegments("", ",");
// → []
```

---

#### `normalizeWhitespace`

```typescript
const normalizeWhitespace = (
  sourceString: string
): string => ...
```

Trims leading and trailing whitespace and collapses internal consecutive whitespace into a single space.

```typescript
normalizeWhitespace("  hello   world  ");
// → "hello world"

normalizeWhitespace("");
// → ""
```

---

#### `truncateString`

```typescript
const truncateString = (
  sourceString: string,
  maxContentLength: number,
  suffix?: string
): string => ...
```

Truncates a string to `maxContentLength` characters and appends `suffix` (default `"..."`).
Returns the original string if it fits within the limit.

```typescript
truncateString("Hello, world!", 5);
// → "Hello..."

truncateString("Hi", 10);
// → "Hi"

truncateString("Hello, world!", 5, " →");
// → "Hello →"
```

---

#### `ensurePrefix<TSource>`

```typescript
const ensurePrefix = <TSource extends string>(
  sourceString: TSource,
  prefix: string
): TSource => ...
```

Ensures a string starts with the given prefix. If the prefix is already present, returns the string unchanged.

```typescript
ensurePrefix("hello", "prefix:");
// → "prefix:hello"

ensurePrefix("prefix:hello", "prefix:");
// → "prefix:hello" (unchanged)
```

---

#### `ensureSuffix<TSource>`

```typescript
const ensureSuffix = <TSource extends string>(
  sourceString: TSource,
  suffix: string
): TSource => ...
```

Ensures a string ends with the given suffix. If the suffix is already present, returns the string unchanged.

```typescript
ensureSuffix("filename", ".txt");
// → "filename.txt"

ensureSuffix("filename.txt", ".txt");
// → "filename.txt" (unchanged)
```

---

#### `removePrefix<TSource>`

```typescript
const removePrefix = <TSource extends string>(
  sourceString: TSource,
  prefix: string
): TSource => ...
```

Removes a prefix from a string if present. If the prefix is not at the start, returns the string unchanged.

```typescript
removePrefix("prefix:hello", "prefix:");
// → "hello"

removePrefix("hello", "prefix:");
// → "hello" (unchanged)
```

---

### Predicates

---

#### `isTruthyValue<T>`

```typescript
const isTruthyValue = <T>(
  value: T | null | undefined | false | 0 | ""
): value is NonNullable<T> => ...
```

Type guard. Returns `true` if the value is truthy. Designed to be passed directly to `.filter()` for type-safe narrowing.

```typescript
const values = ["a", null, "b", undefined, 0];
values.filter(isTruthyValue);
// → ["a", "b"]

isTruthyValue(0); // → false
isTruthyValue("a"); // → true
```

---

#### `isNullOrUndefined<T>`

```typescript
const isNullOrUndefined = <T>(
  value: T | null | undefined
): value is null | undefined => ...
```

Type guard. Returns `true` if the value is `null` or `undefined`.

```typescript
isNullOrUndefined(null); // → true
isNullOrUndefined(undefined); // → true
isNullOrUndefined(0); // → false
isNullOrUndefined(false); // → false
isNullOrUndefined(""); // → false
```

---

#### `isUndefined<T>`

```typescript
const isUndefined = <T>(
  value: T | undefined
): value is undefined => ...
```

Type guard. Returns `true` only for `undefined`. `null` returns `false`.

```typescript
isUndefined(undefined); // → true
isUndefined(null); // → false
isUndefined(0); // → false
```

---

#### `isDefinedValue<T>`

```typescript
const isDefinedValue = <T>(
  value: T | null | undefined
): value is T => ...
```

Type guard. Returns `true` if the value is neither `null` nor `undefined`. Positive counterpart to `isNullOrUndefined`.

```typescript
isDefinedValue(null); // → false
isDefinedValue(undefined); // → false
isDefinedValue(0); // → true
isDefinedValue(""); // → true
isDefinedValue("hello"); // → true
```

---

#### `isNonEmptyArray<T>`

```typescript
const isNonEmptyArray = <T>(
  value: unknown
): value is [T, ...T[]] => ...
```

Type guard. Returns `true` if the value is an array with at least one element.

```typescript
isNonEmptyArray([]); // → false
isNonEmptyArray([1]); // → true
isNonEmptyArray(null); // → false
isNonEmptyArray("string"); // → false
```

---

#### `isNonEmptyString`

```typescript
const isNonEmptyString = (
  value: unknown
): value is string => ...
```

Type guard. Returns `true` if the value is a string with at least one character.

```typescript
isNonEmptyString(""); // → false
isNonEmptyString("hello"); // → true
isNonEmptyString(null); // → false
isNonEmptyString(0); // → false
```

---

## Composition map

Functions in this library compose with each other. The dependency graph is explicit and enforced:

```
predicates/isTruthyValue
  └─ consumed by → array/removeFalsyValuesFromArray

predicates/isNullOrUndefined
  ├─ consumed by → array/removeNullOrUndefinedValuesFromArray (negated)
  ├─ consumed by → object/removeUndefinedPropertiesFromObject
  └─ consumed by → predicates/isDefinedValue (negated)

predicates/isUndefined
  ├─ consumed by → object/removeUndefinedPropertiesFromObject
  ├─ consumed by → object/getDefinedPropertiesFromObject
  └─ consumed by → object/hasDefinedProperty

predicates/isDefinedValue
  └─ consumed by → object/hasDefinedProperty

array/removeFalsyValuesFromArray
  └─ consumed by → string/splitStringAndRemoveEmptySegments

array/uniqueValuesFromArray
  └─ consumed by → array/differenceBetweenArrays
```

No function re-implements logic that already exists elsewhere in the codebase.

---

## Design decisions

**No mutation.** Every function returns a new value. Original inputs are never modified. All functions are safe to use with `Object.freeze`d values.

**Explicit naming over brevity.** Function names follow the pattern `<verb><Target><Domain>` — `removeFalsyValuesFromArray`, `pickPropertiesFromObject`. No abbreviations. No single-letter variables.

**Composition over duplication.** Predicates flow into transformers. `removeFalsyValuesFromArray` calls `isTruthyValue`. `splitStringAndRemoveEmptySegments` calls `removeFalsyValuesFromArray`. Logic lives in exactly one place.

**No hidden behavior.** Each function does one thing. Edge cases (`[]`, `{}`, `""`, `null`, `undefined`) are handled defensively — no thrown exceptions.

**Encapsulated predicates.** `.filter(Boolean)` is never used directly. Predicates carry their return type — `value is T` — so TypeScript narrows correctly at the callsite without casts.

**No default exports.** All exports are named. IDE auto-import and tree-shaking work correctly.

**Strict generics.** Every collection function preserves element types through transformations. `any` does not exist in this codebase.

**Dependency injection.** Functions whose behavior can vary by predicate or comparator accept one as the last parameter with a sensible default — `uniqueValuesFromArray`, `groupArrayByKey`.

**Maximum 3 parameters.** No function takes more than three parameters. If a function needs more, it has too many concerns.

---

## Contributing

```bash
git clone https://github.com/LeonardoChermaut/clean-data-utils
cd clean-data-utils
yarn install
yarn build
yarn test:coverage
```

Before submitting:

```bash
yarn typecheck   # zero type errors
yarn lint        # zero warnings or errors
yarn test:coverage  # 100% on all metrics
```

---

## License

MIT
