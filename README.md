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
  flattenDeepArray,
  uniqueValuesFromArray,
  groupArrayByKey,
  chunkArray,
  partitionArray,
  differenceBetweenArrays,
  sortArrayByKey,
  shuffleArray,
  insertElementIntoArray,
  removeElementByIndexFromArray,
  replaceElementInArray,
  removeUndefinedPropertiesFromObject,
  pickPropertiesFromObject,
  omitPropertiesFromObject,
  mapObjectValues,
  mergeObjects,
  hasDefinedProperty,
  hasOwnProperty,
  getDefinedPropertiesFromObject,
  deepClone,
  isObjectEmpty,
  deepMergeObjects,
  getNestedValue,
  setNestedValue,
  renameKeysInObject,
  flipObject,
  filterObjectKeys,
  deepEqual,
  pathExists,
  flattenObject,
  unflattenObject,
  safeJsonParse,
  splitStringAndRemoveEmptySegments,
  normalizeWhitespace,
  truncateString,
  ensurePrefix,
  ensureSuffix,
  removePrefix,
  capitalizeString,
  slugifyString,
  camelToKebabString,
  kebabToCamelString,
  camelToSnakeString,
  isNumericString,
  isTruthyValue,
  isNullOrUndefined,
  isUndefined,
  isDefinedValue,
  isNonEmptyArray,
  isNonEmptyString,
  debounce,
  throttle,
  compose,
  pipe,
  memoize,
  curry,
  partial,
  clampNumber,
  roundNumber,
  isEvenNumber,
  randomNumberBetween,
  sumNumbersFromArray,
  intersectionBetweenArrays,
  findDuplicatesFromArray,
  zipArrays,
  delay,
  retry,
  isValidEmail,
  isValidUrl,
  isValidName,
  isValidPassword,
  isValidDateString,
  isValidDate,
  parseDate,
  formatDate,
  addDays,
  addMonths,
  addWeeks,
  differenceInDays,
  isSameDay,
  isDateBefore,
  isDateAfter,
  isWeekend,
  startOfDay,
  endOfDay,
  joinPath,
  parsePath,
  resolvePath,
  dirname,
  basename,
  extname,
  getEnvVariable,
  getEnvVariableAsNumber,
  getEnvVariableAsBoolean,
  requireEnvVariable,
  timeout,
  timeoutWithPromise,
  parallel,
  sequential,
  allSettled,
  moveElementInArray,
  toggleElementInArray,
  rotateArray,
  countElementsByPredicate,
  sortArrayByMultipleKeys,
  compactObject,
  countObjectKeys,
  padString,
  reverseString,
  maskString,
  removeAccentsFromString,
  countOccurrencesInString,
  snakeToCamelString,
  kebabToSnakeString,
  isOddNumber,
  isNumberInRange,
  calculatePercentage,
  sumNumbersFromArrayByKey,
  isValidCreditCard,
  isValidHexColor,
  isValidIpAddress,
  isValidUuid,
  sumHoursFromArray,
  formatHourString,
  convertHoursToMinutes,
  convertMinutesToHours,
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

#### `flattenDeepArray<TElement>`

```typescript
const flattenDeepArray = <TElement>(
  values: ReadonlyArray<TElement | ReadonlyArray<unknown>>
): TElement[] => ...
```

Recursively flattens an array of arbitrarily nested arrays. Uses an iterative approach to avoid stack overflow on deeply nested structures.

```typescript
flattenDeepArray([1, [2, [3, [4]]]]);
// → [1, 2, 3, 4]

flattenDeepArray([["a", "b"], [["c"]], "d"]);
// → ["a", "b", "c", "d"]

flattenDeepArray([]);
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

#### `shuffleArray<TElement>`

```typescript
const shuffleArray = <TElement>(values: TElement[]): TElement[] => ...
```

Shuffles an array randomly using Fisher-Yates algorithm. Returns a new array; does not mutate the original.

```typescript
shuffleArray([1, 2, 3, 4, 5]);
// → [3, 1, 5, 2, 4] (random order)
```

---

#### `sortArrayByMultipleKeys<TElement>`

```typescript
const sortArrayByMultipleKeys = <TElement>(
  values: TElement[],
  criteria: Array<{
    key: (element: TElement) => number | string;
    direction?: "asc" | "desc";
  }>
): TElement[] => ...
```

Sorts an array by multiple keys with direction per key. Useful for compound sorting in tables.

```typescript
sortArrayByMultipleKeys(
  [
    { name: "bob", age: 30 },
    { name: "alice", age: 25 },
    { name: "bob", age: 25 },
  ],
  [
    { key: (u) => u.name, direction: "asc" },
    { key: (u) => u.age, direction: "desc" },
  ]
);
// → [{ name: "alice", age: 25 }, { name: "bob", age: 30 }, { name: "bob", age: 25 }]
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

#### `sortArrayByKey<TElement>`

```typescript
const sortArrayByKey = <TElement>(
  values: TElement[],
  getComparable: (element: TElement) => number | string | bigint,
  direction?: "asc" | "desc"
): TElement[] => ...
```

Sorts an array of elements by the value extracted with the given getter. Returns a new sorted array; does not mutate the original. The direction defaults to `"asc"`.

```typescript
sortArrayByKey([3, 1, 2], (x) => x);
// → [1, 2, 3]

sortArrayByKey([1, 3, 2], (x) => x, "desc");
// → [3, 2, 1]

sortArrayByKey(
  [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }],
  (item) => item.name
);
// → [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
```

---

#### `intersectionBetweenArrays<TElement>`

```typescript
const intersectionBetweenArrays = <TElement>(
  first: TElement[],
  second: TElement[]
): TElement[] => ...
```

Returns elements that exist in both arrays.

```typescript
intersectionBetweenArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// → [3, 4, 5]
```

---

#### `findDuplicatesFromArray<TElement>`

```typescript
const findDuplicatesFromArray = <TElement>(
  values: TElement[]
): TElement[] => ...
```

Returns duplicate values from an array.

```typescript
findDuplicatesFromArray([1, 2, 2, 3, 3, 3, 4]);
// → [2, 3]
```

---

#### `zipArrays<TFirst, TSecond>`

```typescript
const zipArrays = <TFirst, TSecond>(
  first: TFirst[],
  second: TSecond[]
): Array<[TFirst, TSecond]> => ...
```

Combines two arrays into an array of tuples.

```typescript
zipArrays([1, 2, 3], ["a", "b", "c"]);
// → [[1, "a"], [2, "b"], [3, "c"]]
```

---

#### `moveElementInArray<TElement>`

```typescript
const moveElementInArray = <TElement>(
  values: TElement[],
  fromIndex: number,
  toIndex: number
): TElement[] => ...
```

Moves an element from one index to another without mutating. Use case: drag-and-drop, list reordering.

```typescript
moveElementInArray([1, 2, 3, 4], 0, 2);
// → [2, 3, 1, 4]
```

---

#### `toggleElementInArray<TElement>`

```typescript
const toggleElementInArray = <TElement>(
  values: TElement[],
  element: TElement,
  comparator?: (a: TElement, b: TElement) => boolean
): TElement[] => ...
```

Removes element if it exists, adds if it doesn't. Use case: filter selection, tags, checkboxes.

```typescript
toggleElementInArray([1, 2, 3], 2);
// → [1, 3]

toggleElementInArray([1, 3], 2);
// → [1, 3, 2]
```

---

#### `rotateArray<TElement>`

```typescript
const rotateArray = <TElement>(
  values: TElement[],
  steps: number
): TElement[] => ...
```

Rotates array by n positions. Positive steps → right, negative → left. Use case: carousels, round-robin.

```typescript
rotateArray([1, 2, 3, 4, 5], 2);
// → [4, 5, 1, 2, 3]

rotateArray([1, 2, 3, 4, 5], -1);
// → [2, 3, 4, 5, 1]
```

---

#### `countElementsByPredicate<TElement>`

```typescript
const countElementsByPredicate = <TElement>(
  values: TElement[],
  predicate: (element: TElement) => boolean
): number => ...
```

Counts elements that satisfy a predicate.

```typescript
countElementsByPredicate([1, 2, 3, 4, 5], (n) => n > 3);
// → 2
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

#### `getNestedValue<TObject>`

```typescript
const getNestedValue = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  path: string
): unknown => ...
```

Gets a nested value from an object using a dot-notation path.

```typescript
getNestedValue({ user: { address: { city: "London" } } }, "user.address.city");
// → "London"
```

---

#### `setNestedValue<TObject>`

```typescript
const setNestedValue = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  path: string,
  value: unknown
): TObject => ...
```

Sets a nested value in an object using a dot-notation path, returning a new object.

```typescript
setNestedValue({ user: { name: "Alice" } }, "user.address.city", "London");
// → { user: { name: "Alice", address: { city: "London" } } }
```

---

#### `renameKeysInObject<TObject>`

```typescript
const renameKeysInObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  keyMap: Record<string, string>
): Record<string, unknown> => ...
```

Renames keys in an object according to a mapping.

```typescript
renameKeysInObject({ name: "Alice", age: 30 }, { name: "fullName", age: "userAge" });
// → { fullName: "Alice", userAge: 30 }
```

---

#### `flipObject<TObject>`

```typescript
const flipObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject
): Record<string, string> => ...
```

Flips an object, swapping keys and values.

```typescript
flipObject({ a: 1, b: 2, c: 3 });
// → { 1: "a", 2: "b", 3: "c" }
```

---

#### `filterObjectKeys<TObject>`

```typescript
const filterObjectKeys = <TObject extends Record<string, unknown>>(
  sourceObject: TObject,
  predicate: (key: string) => boolean
): Partial<TObject> => ...
```

Filters object keys using a predicate function.

```typescript
filterObjectKeys({ a: 1, b: 2, c: 3, ab: 4 }, (key) => key.length === 1);
// → { a: 1, b: 2, c: 3 }
```

---

#### `compactObject`

```typescript
const compactObject = <TObject extends Record<string, unknown>>(
  sourceObject: TObject
): Record<string, unknown> => ...
```

Recursively removes null and undefined values from nested objects.

```typescript
compactObject({ a: 1, b: null, c: { d: undefined, e: 2 } });
// → { a: 1, c: { e: 2 } }
```

---

#### `countObjectKeys`

```typescript
const countObjectKeys = (sourceObject: object): number => ...
```

Counts the number of own properties on an object.

```typescript
countObjectKeys({ a: 1, b: 2, c: 3 });
// → 3
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

#### `camelToKebabString`

```typescript
const camelToKebabString = (sourceString: string): string => ...
```

Converts a camelCase string to kebab-case.

```typescript
camelToKebabString("helloWorld");
// → "hello-world"
```

---

#### `kebabToCamelString`

```typescript
const kebabToCamelString = (sourceString: string): string => ...
```

Converts a kebab-case string to camelCase.

```typescript
kebabToCamelString("hello-world");
// → "helloWorld"
```

---

#### `camelToSnakeString`

```typescript
const camelToSnakeString = (sourceString: string): string => ...
```

Converts a camelCase string to snake_case.

```typescript
camelToSnakeString("helloWorld");
// → "hello_world"
```

---

#### `isNumericString`

```typescript
const isNumericString = (sourceString: string): boolean => ...
```

Checks if a string contains only numeric characters.

```typescript
isNumericString("12345");
// → true

isNumericString("123abc");
// → false
```

---

#### `padString`

```typescript
const padString = (
  sourceString: string,
  targetLength: number,
  padCharacter?: string
): string => ...
```

Pads a string to a specified length with a character (default: space).

```typescript
padString("hello", 10);
// → "hello     "

padString("42", 5, "0");
// → "00042"
```

---

#### `reverseString`

```typescript
const reverseString = (sourceString: string): string => ...
```

Reverses a string with unicode support.

```typescript
reverseString("hello");
// → "olleh"
```

---

#### `maskString`

```typescript
const maskString = (
  sourceString: string,
  visibleChars: number,
  maskCharacter?: string
): string => ...
```

Masks a string by hiding characters while keeping visible ones at start/end.

```typescript
maskString("1234567890123", 4);
// → "1234********53"

maskString("user@example.com", 2);
// → "us**@example.com"
```

---

#### `removeAccentsFromString`

```typescript
const removeAccentsFromString = (sourceString: string): string => ...
```

Removes accents and diacritics, normalizing to ASCII.

```typescript
removeAccentsFromString("Héllo Wörld");
// → "Hello World"
```

---

#### `countOccurrencesInString`

```typescript
const countOccurrencesInString = (
  sourceString: string,
  searchValue: string
): number => ...
```

Counts occurrences of a substring in a string.

```typescript
countOccurrencesInString("hello hell", "ll");
// → 2
```

---

#### `snakeToCamelString`

```typescript
const snakeToCamelString = (sourceString: string): string => ...
```

Converts a snake_case string to camelCase.

```typescript
snakeToCamelString("hello_world");
// → "helloWorld"
```

---

#### `kebabToSnakeString`

```typescript
const kebabToSnakeString = (sourceString: string): string => ...
```

Converts a kebab-case string to snake_case.

```typescript
kebabToSnakeString("hello-world");
// → "hello_world"
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

### Parsing

---

#### `safeJsonParse`

```typescript
const safeJsonParse = (
  jsonString: string
): unknown => ...
```

Parses a JSON string safely. Returns the parsed value on success, or `undefined` if parsing fails. Never throws exceptions.

```typescript
safeJsonParse('{"key": "value"}');
// → { key: "value" }

safeJsonParse("[1, 2, 3]");
// → [1, 2, 3]

safeJsonParse("invalid json");
// → undefined

safeJsonParse("");
// → undefined
```

---

### Function

---

#### `debounce<TFunc>`

```typescript
const debounce = <TFunc extends (...args: any[]) => void>(
  callback: TFunc,
  delay: number,
): (...args: Parameters<TFunc>) => void => ...
```

Creates a debounced version of a function. The returned function delays execution until `delay` milliseconds have passed without being called again.

```typescript
const debouncedSearch = debounce((query: string) => {
  console.log("Searching:", query);
}, 300);

debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");
// Only "Searching: abc" executes after 300ms
```

---

#### `throttle<TFunc>`

```typescript
const throttle = <TFunc extends (...args: any[]) => void>(
  callback: TFunc,
  limit: number,
): (...args: Parameters<TFunc>) => void => ...
```

Creates a throttled version of a function. The returned function executes at most once per `limit` milliseconds.

```typescript
const throttledScroll = throttle(() => {
  console.log("Scroll event");
}, 100);

window.addEventListener("scroll", throttledScroll);
```

---

#### `compose<TArgs, TResult>`

```typescript
const compose = <TArgs extends unknown[], TResult>(
  ...fns: Array<(arg: any) => any>
): (...args: TArgs) => TResult => ...
```

Composes functions from right to left. The output of each function becomes the input of the next.

```typescript
const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
const square = (x: number) => x * x;

const pipeline = compose(square, double, addOne);
pipeline(2);
// → ((2 + 1) * 2)² = 36
```

---

### Number

---

#### `clampNumber`

```typescript
const clampNumber = (
  value: number,
  minimum: number,
  maximum: number,
): number => ...
```

Restricts a number to be within the range [minimum, maximum]. Returns the clamped value.

```typescript
clampNumber(5, 0, 10);
// → 5

clampNumber(-5, 0, 10);
// → 0

clampNumber(15, 0, 10);
// → 10
```

---

#### `roundNumber`

```typescript
const roundNumber = (
  value: number,
  decimalPlaces: number,
): number => ...
```

Rounds a number to a specified number of decimal places. Avoids floating-point precision issues.

```typescript
roundNumber(1.005, 2);
// → 1.01

roundNumber(2.1749, 2);
// → 2.17

roundNumber(0.1 + 0.2, 1);
// → 0.3
```

---

#### `isEvenNumber`

```typescript
const isEvenNumber = (value: number): boolean => ...
```

Checks if a number is even.

```typescript
isEvenNumber(4);
// → true

isEvenNumber(5);
// → false
```

---

#### `randomNumberBetween`

```typescript
const randomNumberBetween = (
  minimum: number,
  maximum: number
): number => ...
```

Generates a random number between a minimum and maximum value (inclusive).

```typescript
randomNumberBetween(1, 10);
// → random number between 1 and 10
```

---

#### `sumNumbersFromArray`

```typescript
const sumNumbersFromArray = (values: number[]): number => ...
```

Sums all numbers in an array.

```typescript
sumNumbersFromArray([1, 2, 3, 4, 5]);
// → 15
```

---

#### `isOddNumber`

```typescript
const isOddNumber = (value: number): boolean => ...
```

Checks if a number is odd.

```typescript
isOddNumber(5);
// → true

isOddNumber(4);
// → false
```

---

#### `isNumberInRange`

```typescript
const isNumberInRange = (
  value: number,
  minimum: number,
  maximum: number
): boolean => ...
```

Checks if a number is within a range (inclusive).

```typescript
isNumberInRange(5, 1, 10);
// → true

isNumberInRange(0, 1, 10);
// → false
```

---

#### `calculatePercentage`

```typescript
const calculatePercentage = (
  value: number,
  total: number,
  useAbsoluteValue?: boolean
): number => ...
```

Calculates a value as a percentage of a total.

```typescript
calculatePercentage(10, 20);
// → 50

calculatePercentage(-10, 20, true);
// → 50
```

---

#### `sumNumbersFromArrayByKey`

```typescript
const sumNumbersFromArrayByKey = <TData>(
  values: TData[],
  getKey: (element: TData) => number
): number => ...
```

Sums numeric values extracted from an array of objects using a key extractor. Composes with sumNumbersFromArray.

```typescript
sumNumbersFromArrayByKey(
  [{ amount: 10 }, { amount: 20 }, { amount: 30 }],
  (item) => item.amount
);
// → 60
```

---

### Promise

---

#### `delay`

```typescript
const delay = (milliseconds: number): Promise<void> => ...
```

Returns a promise that resolves after the specified milliseconds. Useful for simulations, visual delays, and testing.

```typescript
await delay(500);
console.log("500ms later");

delay(1000).then(() => console.log("Done"));
```

---

#### `retry<T>`

```typescript
const retry = async <T>(
  operation: () => Promise<T>,
  options?: { maxRetries?: number; baseDelay?: number },
): Promise<T> => ...
```

Executes an async operation with exponential backoff retry. Retries up to `maxRetries` (default 3) times with increasing delays.

```typescript
const fetchWithRetry = retry(() => fetch("/api/data"), {
  maxRetries: 3,
  baseDelay: 1000,
});

const data = await fetchWithRetry;
```

---

### Types

---

#### `DeepReadonly<T>`

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
```

Recursive readonly type. Makes all properties and nested properties immutable.

```typescript
type User = DeepReadonly<{
  name: string;
  address: {
    city: string;
    zip: number;
  };
}>;
// User.name is readonly
// User.address is readonly
// User.address.city is readonly
```

---

#### `Nullable<T>`

```typescript
type Nullable<T> = T | null | undefined;
```

Type alias for nullable values. Shorthand for `T | null | undefined`.

```typescript
type OptionalName = Nullable<string>;
// → string | null | undefined
```

---

#### `MaybeArray<T>`

```typescript
type MaybeArray<T> = T | T[];
```

Union type useful for functions that accept a single value or an array.

```typescript
type Items = MaybeArray<string>;
// → string | string[]
```

---

#### `DeepPartial<T>`

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

Recursive partial type. Makes all properties and nested properties optional.

```typescript
type User = DeepPartial<{
  name: string;
  address: { city: string; zip: number };
}>;
// All properties are optional, including nested ones
```

---

#### `ValueOf<T>`

```typescript
type ValueOf<T> = T[keyof T];
```

Extracts the type of values from an object type.

```typescript
type User = { name: string; age: number };
type UserValue = ValueOf<User>;
// → string | number
```

---

#### `KeysOf<T>`

```typescript
type KeysOf<T> = keyof T;
```

Semantic shortcut for `keyof T`. Improves readability in complex generics.

```typescript
type User = { name: string; age: number };
type UserKey = KeysOf<User>;
// → "name" | "age"
```

---

#### `NonEmptyArray<T>`

```typescript
type NonEmptyArray<T> = [T, ...T[]];
```

Tuple type that guarantees at least one element at compile time.

```typescript
type Users = NonEmptyArray<string>;
// → [string, ...string[]] - at least one string required

function processUsers(users: NonEmptyArray<string>) {
  // TypeScript guarantees at least one element exists
}
```

---

### Validation

---

#### `isValidEmail`

```typescript
const isValidEmail = (sourceString: string): boolean => ...
```

Validates if a string is a valid email address (RFC 5322 compliant).

```typescript
isValidEmail("user@example.com");
// → true

isValidEmail("invalid-email");
// → false
```

---

#### `isValidUrl`

```typescript
const isValidUrl = (sourceString: string): boolean => ...
```

Validates if a string is a valid URL (RFC 3986 compliant).

```typescript
isValidUrl("https://example.com");
// → true

isValidUrl("not-a-url");
// → false
```

---

#### `isValidName`

```typescript
const isValidName = (sourceString: string): boolean => ...
```

Validates if a string is a valid personal name. Supports international names across different cultures and writing systems. Allows letters (including accented), spaces, hyphens, apostrophes, and dots.

```typescript
isValidName("John Doe");
// → true

isValidName("Maria José");
// → true

isValidName("Dim Jom");
// → true

isValidName("");
// → false
```

---

#### `isValidPassword`

```typescript
const isValidPassword = (
  sourceString: string,
  options?: {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecialChar?: boolean;
  }
): boolean => ...
```

Validates if a string is a valid password based on security requirements.

```typescript
isValidPassword("SecureP@ss1");
// → true

isValidPassword("weak");
// → false

isValidPassword("password123", { minLength: 10 });
// → false
```

---

#### `isValidDateString`

```typescript
const isValidDateString = (
  sourceString: string,
  options?: {
    mode?: "date" | "date-time";
    separator?: string;
    dayFirst?: boolean;
    monthFirst?: boolean;
  }
): boolean => ...
```

Validates if a string is a valid date. Supports multiple separators and date order formats for global use.

```typescript
isValidDateString("2024-01-15");
// → true

isValidDateString("2024-01-15T10:30:00Z", { mode: "date-time" });
// → true

isValidDateString("15/01/2024", { separator: "/", dayFirst: true });
// → true

isValidDateString("01/15/2024", { separator: "/", monthFirst: true });
// → true

isValidDateString("invalid-date");
// → false
```

---

#### `isValidCreditCard`

```typescript
const isValidCreditCard = (value: string): boolean => ...
```

Validates a credit card number using the Luhn algorithm. Universal — works for Visa, Mastercard, Amex, etc.

```typescript
isValidCreditCard("4532015112830366");
// → true

isValidCreditCard("1234567890123456");
// → false
```

---

#### `isValidHexColor`

```typescript
const isValidHexColor = (value: string): boolean => ...
```

Validates a hexadecimal color code (#RGB or #RRGGBB).

```typescript
isValidHexColor("#FF0000");
// → true

isValidHexColor("#F00");
// → true

isValidHexColor("#GGGGGG");
// → false
```

---

#### `isValidIpAddress`

```typescript
const isValidIpAddress = (
  value: string,
  version?: "v4" | "v6" | "any"
): boolean => ...
```

Validates an IPv4 or IPv6 address.

```typescript
isValidIpAddress("192.168.1.1");
// → true

isValidIpAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334", "v6");
// → true
```

---

#### `isValidUuid`

```typescript
const isValidUuid = (value: string): boolean => ...
```

Validates a UUID v4.

```typescript
isValidUuid("550e8400-e29b-41d4-a716-446655440000");
// → true

isValidUuid("not-a-uuid");
// → false
```

---

### Date

---

#### `isValidDate`

```typescript
const isValidDate = (value: unknown): value is Date => ...
```

Validates if a value is a valid Date object or can be parsed into one.

```typescript
isValidDate(new Date("2024-01-01"));
// → true

isValidDate("invalid-date");
// → false
```

---

#### `parseDate`

```typescript
const parseDate = (source: string | number | Date): Date | null => ...
```

Parses a string or number into a Date object.

```typescript
parseDate("2024-01-15");
// → Date object for Jan 15, 2024

parseDate("invalid");
// → null
```

---

#### `formatDate`

```typescript
const formatDate = (sourceDate: Date): string => ...
```

Formats a Date object to ISO 8601 format (YYYY-MM-DD).

```typescript
formatDate(new Date("2024-01-15T10:30:00Z"));
// → "2024-01-15"
```

---

#### `addDays`

```typescript
const addDays = (sourceDate: Date, numberOfDays: number): Date | null => ...
```

Adds a specified number of days to a date.

```typescript
addDays(new Date("2024-01-10"), 5);
// → Date object for Jan 15, 2024
```

---

#### `addMonths`

```typescript
const addMonths = (sourceDate: Date, numberOfMonths: number): Date | null => ...
```

Adds a specified number of months to a date.

```typescript
addMonths(new Date("2024-01-15"), 2);
// → Date object for Mar 15, 2024
```

---

#### `differenceInDays`

```typescript
const differenceInDays = (firstDate: Date, secondDate: Date): number | null => ...
```

Calculates the difference in days between two dates.

```typescript
differenceInDays(new Date("2024-01-15"), new Date("2024-01-10"));
// → 5
```

---

#### `isSameDay`

```typescript
const isSameDay = (firstDate: Date, secondDate: Date): boolean => ...
```

Checks if two dates are the same day, ignoring time.

```typescript
isSameDay(new Date("2024-01-15T10:00:00Z"), new Date("2024-01-15T22:00:00Z"));
// → true
```

---

#### `isDateBefore`

```typescript
const isDateBefore = (sourceDate: Date, referenceDate: Date): boolean => ...
```

Checks if a date is before another date.

```typescript
isDateBefore(new Date("2024-01-10"), new Date("2024-01-15"));
// → true
```

---

#### `isDateAfter`

```typescript
const isDateAfter = (sourceDate: Date, referenceDate: Date): boolean => ...
```

Checks if a date is after another date.

```typescript
isDateAfter(new Date("2024-01-15"), new Date("2024-01-10"));
// → true
```

---

#### `isWeekend`

```typescript
const isWeekend = (sourceDate: Date): boolean => ...
```

Checks if a date is on a weekend (Saturday or Sunday).

```typescript
isWeekend(new Date("2024-01-13"));
// → true (Saturday)
```

---

#### `addWeeks`

```typescript
const addWeeks = (sourceDate: Date, weeks: number): Date => ...
```

Adds or subtracts weeks from a date.

```typescript
addWeeks(new Date("2024-01-01"), 2);
// → Date for Jan 15, 2024
```

---

#### `startOfDay`

```typescript
const startOfDay = (sourceDate: Date): Date => ...
```

Returns the date with time set to 00:00:00.

```typescript
startOfDay(new Date("2024-01-15T14:30:00Z"));
// → Date for 2024-01-15T00:00:00Z
```

---

#### `endOfDay`

```typescript
const endOfDay = (sourceDate: Date): Date => ...
```

Returns the date with time set to 23:59:59.

```typescript
endOfDay(new Date("2024-01-15T14:30:00Z"));
// → Date for 2024-01-15T23:59:59Z
```

---

### Path

---

#### `joinPath`

```typescript
const joinPath = (...pathSegments: string[]): string => ...
```

Joins multiple path segments into a single normalized path.

```typescript
joinPath("/home", "user", "documents");
// → "/home/user/documents"
```

---

#### `parsePath`

```typescript
const parsePath = (sourceString: string): {
  directory: string;
  basename: string;
  extension: string;
  filename: string;
} => ...
```

Parses a path string into its component parts.

```typescript
parsePath("/home/user/documents/file.txt");
// → { directory: "/home/user/documents", basename: "file.txt", extension: "txt", filename: "file" }
```

---

#### `resolvePath`

```typescript
const resolvePath = (basePath: string, relativePath: string): string => ...
```

Resolves a path relative to a base path.

```typescript
resolvePath("/home/user/documents", "../pictures");
// → "/home/user/pictures"
```

---

#### `dirname`

```typescript
const dirname = (sourcePath: string): string => ...
```

Returns the directory portion of a path.

```typescript
dirname("/home/user/documents/file.txt");
// → "/home/user/documents"
```

---

#### `basename`

```typescript
const basename = (sourcePath: string, fileExtension?: string): string => ...
```

Returns the filename portion of a path.

```typescript
basename("/home/user/documents/file.txt");
// → "file.txt"

basename("/home/user/documents/file.txt", ".txt");
// → "file"
```

---

#### `extname`

```typescript
const extname = (sourcePath: string): string => ...
```

Returns the file extension (including the dot) from a path.

```typescript
extname("/home/user/documents/file.txt");
// → ".txt"
```

---

### Env

---

#### `getEnvVariable`

```typescript
const getEnvVariable = (variableName: string): string | undefined => ...
```

Gets an environment variable value as a string.

```typescript
getEnvVariable("NODE_ENV");
// → "development" (or whatever the value is)
```

---

#### `getEnvVariableAsNumber`

```typescript
const getEnvVariableAsNumber = (variableName: string): number | undefined => ...
```

Gets an environment variable value as a number.

```typescript
getEnvVariableAsNumber("PORT");
// → 3000 (if PORT=3000)
```

---

#### `getEnvVariableAsBoolean`

```typescript
const getEnvVariableAsBoolean = (variableName: string): boolean | undefined => ...
```

Gets an environment variable value as a boolean. Truthy values: "true", "1", "yes". Falsy values: "false", "0", "no", "".

```typescript
getEnvVariableAsBoolean("DEBUG");
// → true (if DEBUG=true)
```

---

#### `requireEnvVariable`

```typescript
const requireEnvVariable = (variableName: string): string => ...
```

Gets a required environment variable, throwing an error if not set.

```typescript
const apiKey = requireEnvVariable("API_KEY");
// Returns the API_KEY value or throws if not set
```

---

### Async

---

#### `timeout`

```typescript
const timeout = (milliseconds: number): Promise<void> => ...
```

Creates a promise that resolves after a specified timeout.

```typescript
await timeout(1000);
// Resolves after 1 second
```

---

#### `timeoutWithPromise`

```typescript
const timeoutWithPromise = <T>(promise: Promise<T>, milliseconds: number): Promise<T> => ...
```

Adds a timeout to a promise. Rejects if the timeout is reached before the promise resolves.

```typescript
const result = await timeoutWithPromise(fetchData(), 5000);
// Throws if fetchData takes more than 5 seconds
```

---

#### `parallel`

```typescript
const parallel = async <T>(tasks: Array<() => Promise<T>>, limit: number): Promise<T[]> => ...
```

Executes promises in parallel with a concurrency limit.

```typescript
const results = await parallel([
  () => fetch('/api/users'),
  () => fetch('/api/posts'),
  () => fetch('/api/comments'),
], 2);
// Executes at most 2 at a time
```

---

#### `sequential`

```typescript
const sequential = async <T>(tasks: Array<() => Promise<T>>): Promise<T[]> => ...
```

Executes promises sequentially.

```typescript
const results = await sequential([
  () => fetch('/api/step1'),
  () => fetch('/api/step2'),
  () => fetch('/api/step3'),
]);
// Executes one after another, in order
```

---

#### `allSettled`

```typescript
const allSettled = async <T>(tasks: Array<Promise<T>>): Promise<Array<{ status: "fulfilled"; value: T } | { status: "rejected"; reason: unknown }>> => ...
```

Executes promises and returns an array of results (fulfilled or rejected).

```typescript
const results = await allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
]);
// [{ status: 'fulfilled', value: 'success' }, { status: 'rejected', reason: 'error' }]
```

---

### Time

---

#### `sumHoursFromArray`

```typescript
const sumHoursFromArray = (values: string[], includeSeconds?: boolean): string => ...
```

Sums an array of time strings. Formats accepted: HH:mm, HH:mm:ss, large totals like 158:58. Invalid entries are ignored.

```typescript
sumHoursFromArray(["10:30", "05:45", "02:15"]);
// → "18:30"

sumHoursFromArray(["100:00", "50:00"], true);
// → "150:00:00"
```

---

#### `formatHourString`

```typescript
const formatHourString = (sourceString: string, includeSeconds?: boolean): string | undefined => ...
```

Normalizes a time string to HH:mm or HH:mm:ss. Returns undefined for invalid input.

```typescript
formatHourString("9:30");
// → "09:30"

formatHourString("10:05:30", true);
// → "10:05:30"
```

---

#### `convertHoursToMinutes`

```typescript
const convertHoursToMinutes = (hours: number): number => ...
```

Converts hours to minutes.

```typescript
convertHoursToMinutes(2);
// → 120
```

---

#### `convertMinutesToHours`

```typescript
const convertMinutesToHours = (minutes: number): number => ...
```

Converts minutes to hours.

```typescript
convertMinutesToHours(90);
// → 1.5
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
  ├─ consumed by → array/differenceBetweenArrays
  └─ consumed by → array/intersectionBetweenArrays

object/getNestedValue
  └─ consumed by → object/setNestedValue

function/compose
  └─ consumed by → (none - standalone utility)

date/isValidDate
  └─ consumed by → date/parseDate

validation/isValidName
  └─ consumed by → (none - standalone utility)

validation/isValidPassword
  └─ consumed by → (none - standalone utility)

validation/isValidDateString
  └─ consumed by → (none - standalone utility)

path/parsePath
  ├─ consumed by → path/dirname
  ├─ consumed by → path/basename
  └─ consumed by → path/extname

async/timeout
  └─ consumed by → async/timeoutWithPromise
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
