# clean-data-utils

Utility functions for predictable data normalization and transformation.

Zero dependencies. No mutation. Fully typed TypeScript generics.

---

## Installation

```bash
yarn add clean-data-utils
# or
npm install clean-data-utils
```

---

## Usage

```typescript
import {
  removeFalsyValuesFromArray,
  removeNullOrUndefinedValuesFromArray,
  getLastElementFromArray,
  removeUndefinedPropertiesFromObject,
  pickPropertiesFromObject,
  splitStringAndRemoveEmptySegments,
  isTruthyValue,
  isNullOrUndefined,
} from "clean-data-utils"
```

Tree-shaking is supported. Import only what you use.

---

## API reference

### `removeFalsyValuesFromArray<ElementType>`

```typescript
const removeFalsyValuesFromArray = <ElementType>(
  values: ElementType[]
): ElementType[] => ...
```

Removes all falsy values from an array.

**Removes:** `null`, `undefined`, `""`, `0`, `false`, `NaN`

Use only when all falsy values are considered invalid for your use case.
If you need to preserve `0` or `false`, use `removeNullOrUndefinedValuesFromArray` instead.

```typescript
// example
removeFalsyValuesFromArray(["a", "", null, "b", 0, false])
// → ["a", "b"]
```

---

### `removeNullOrUndefinedValuesFromArray<ElementType>`

```typescript
const removeNullOrUndefinedValuesFromArray = <ElementType>(
  values: (ElementType | null | undefined)[]
): ElementType[] => ...
```

Removes only `null` and `undefined` from an array. Preserves `0`, `false`, and `""`.

```typescript
// example
removeNullOrUndefinedValuesFromArray([null, 0, "a", undefined, false])
// → [0, "a", false]
```

---

### `getLastElementFromArray<ElementType>`

```typescript
const getLastElementFromArray = <ElementType>(
  values: ElementType[]
): ElementType | undefined => ...
```

Returns the last element of an array, or `undefined` if the array is empty.
Does not mutate the array.

```typescript
// example
getLastElementFromArray([1, 2, 3])
// → 3

getLastElementFromArray([])
// → undefined
```

---

### `removeUndefinedPropertiesFromObject<ObjectType>`

```typescript
const removeUndefinedPropertiesFromObject = <ObjectType extends Record<string, unknown>>(
  sourceObject: ObjectType
): Partial<ObjectType> => ...
```

Returns a new object with all keys whose value is `undefined` removed.
Preserves keys with `null`, `0`, `false`, or `""` values.

```typescript
// example
removeUndefinedPropertiesFromObject({ name: "Alice", age: undefined, active: false })
// → { name: "Alice", active: false }
```

---

### `pickPropertiesFromObject<ObjectType, KeyType>`

```typescript
const pickPropertiesFromObject = <
  ObjectType extends Record<string, unknown>,
  KeyType extends keyof ObjectType
>(
  sourceObject: ObjectType,
  selectedKeys: KeyType[]
): Pick<ObjectType, KeyType> => ...
```

Returns a new object containing only the specified keys.
Keys not present in the source object are silently ignored.

```typescript
// example
pickPropertiesFromObject({ name: "Alice", age: 30, role: "admin" }, ["name", "role"])
// → { name: "Alice", role: "admin" }
```

---

### `splitStringAndRemoveEmptySegments`

```typescript
const splitStringAndRemoveEmptySegments = (
  sourceString: string,
  separator: string
): string[] => ...
```

Splits a string by `separator` and removes any resulting empty strings.
Useful for handling user input with consecutive or trailing separators.

```typescript
// example
splitStringAndRemoveEmptySegments("a,,b,,c", ",")
// → ["a", "b", "c"]

splitStringAndRemoveEmptySegments("", ",")
// → []
```

---

### `isTruthyValue<ValueType>`

```typescript
const isTruthyValue = <ValueType>(
  value: ValueType | null | undefined | false | 0 | ""
): value is ValueType => ...
```

Type guard. Returns `true` if the value is truthy.
Useful as a typed alternative to `Boolean` in `.filter()` pipelines.

```typescript
// example
const values = ["a", null, "b", undefined]
values.filter(isTruthyValue)
// → ["a", "b"]
```

---

### `isNullOrUndefined`

```typescript
const isNullOrUndefined = <ValueType>(
  value: ValueType | null | undefined
): value is null | undefined => ...
```

Type guard. Returns `true` if the value is `null` or `undefined`.

```typescript
// example
isNullOrUndefined(null)       // → true
isNullOrUndefined(undefined)  // → true
isNullOrUndefined(0)          // → false
isNullOrUndefined(false)      // → false
```

---

## Design decisions

- **No mutation.** Every function returns a new value. The original input is never modified.
- **Explicit naming over brevity.** Function names describe exactly what they do and what they accept. No abbreviations.
- **No hidden behavior.** Each function does one thing. Edge cases are documented explicitly.
- **Encapsulated predicates.** `Boolean` is never used directly in filter callsites. Use the exported predicates instead to keep type narrowing accurate.
- **No default exports.** All exports are named, which improves tree-shaking and IDE discoverability.
- **Strict generics.** Every collection function is generic to preserve type information through transformations.

---

## Roadmap

```yaml
roadmap:
  - deep object cleaning (nested undefined removal)
  - safe parsing utilities (safeParseInteger, safeParseFloat)
  - array grouping utilities (groupArrayByKey)
  - type-safe guard composition (combineGuards)
  - immutable transformations with structural sharing
```

---

## License

MIT
