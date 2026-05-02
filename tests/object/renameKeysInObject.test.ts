import { renameKeysInObject } from "@/object";
import { describe, expect, it } from "vitest";

describe("renameKeysInObject", () => {
  it("renames keys according to mapping", () => {
    const obj = { name: "Alice", age: 30 };
    const result = renameKeysInObject(obj, { name: "fullName", age: "userAge" });

    expect(result).toEqual({ fullName: "Alice", userAge: 30 });
  });

  it("keeps keys not in mapping", () => {
    const obj = { name: "Alice", age: 30, active: true };
    const result = renameKeysInObject(obj, { name: "fullName" });

    expect(result).toEqual({ fullName: "Alice", age: 30, active: true });
  });

  it("does not mutate original object", () => {
    const frozen = Object.freeze({ name: "Alice", age: 30 });
    const result = renameKeysInObject(frozen, { name: "fullName" });

    expect(result).toEqual({ fullName: "Alice", age: 30 });
    expect(frozen).toEqual({ name: "Alice", age: 30 });
  });

  it("handles empty mapping", () => {
    const obj = { name: "Alice", age: 30 };
    const result = renameKeysInObject(obj, {});

    expect(result).toEqual({ name: "Alice", age: 30 });
  });

  it("handles empty object", () => {
    const result = renameKeysInObject({}, { name: "fullName" });

    expect(result).toEqual({});
  });

  it("handles multiple key renames", () => {
    const obj = { keyA: 1, keyB: 2, keyC: 3 };
    const result = renameKeysInObject(obj, { keyA: "first", keyB: "second", keyC: "third" });

    expect(result).toEqual({ first: 1, second: 2, third: 3 });
  });

  it("handles object with nested values", () => {
    const obj = { user: { name: "Alice" }, count: 5 };
    const result = renameKeysInObject(obj, { user: "person" });

    expect(result).toEqual({ person: { name: "Alice" }, count: 5 });
  });

  it("handles array values", () => {
    const obj = { items: [1, 2, 3] };
    const result = renameKeysInObject(obj, { items: "elements" });

    expect(result).toEqual({ elements: [1, 2, 3] });
  });

  it("handles null values", () => {
    const obj = { name: "Alice", extra: null };
    const result = renameKeysInObject(obj, { extra: "optional" });

    expect(result).toEqual({ name: "Alice", optional: null });
  });

  it("handles map with same old and new key", () => {
    const obj = { name: "Alice" };
    const result = renameKeysInObject(obj, { name: "name" });

    expect(result).toEqual({ name: "Alice" });
  });
});
