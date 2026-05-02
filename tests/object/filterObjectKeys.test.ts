import { filterObjectKeys } from "@/object";
import { describe, expect, it } from "vitest";

describe("filterObjectKeys", () => {
  it("filters keys using predicate", () => {
    const obj = { keyA: 1, keyB: 2, keyC: 3, keyAB: 4 };
    const result = filterObjectKeys(obj, (key) => key.length <= 4);

    expect(result).toEqual({ keyA: 1, keyB: 2, keyC: 3 });
  });

  it("returns empty object when no keys match", () => {
    const obj = { keyA: 1, keyB: 2 };
    const result = filterObjectKeys(obj, (key) => key === "missing");

    expect(result).toEqual({});
  });

  it("returns all keys when all match", () => {
    const obj = { keyA: 1, keyB: 2 };
    const result = filterObjectKeys(obj, () => true);

    expect(result).toEqual({ keyA: 1, keyB: 2 });
  });

  it("does not mutate original object", () => {
    const frozen = Object.freeze({ keyA: 1, keyB: 2 });
    const result = filterObjectKeys(frozen, (key) => key === "keyA");

    expect(result).toEqual({ keyA: 1 });
    expect(frozen).toEqual({ keyA: 1, keyB: 2 });
  });

  it("handles empty object", () => {
    const result = filterObjectKeys({}, (key) => key.length > 0);

    expect(result).toEqual({});
  });

  it("handles predicate checking key prefix", () => {
    const obj = { prefixFirst: 1, prefixSecond: 2, other: 3 };
    const result = filterObjectKeys(obj, (key) => key.startsWith("prefix"));

    expect(result).toEqual({ prefixFirst: 1, prefixSecond: 2 });
  });

  it("handles predicate checking key contains", () => {
    const obj = { name: "Alice", age: 30, city: "London", active: true };
    const result = filterObjectKeys(obj, (key) => key === "name" || key === "city");

    expect(result).toEqual({ name: "Alice", city: "London" });
  });

  it("handles numeric keys", () => {
    const obj = { 0: "first", 1: "second", 2: "third" };
    const result = filterObjectKeys(obj, (key) => parseInt(key, 10) < 2);

    expect(result).toEqual({ 0: "first", 1: "second" });
  });

  it("handles object values", () => {
    const obj = { user: { name: "Alice" }, count: 5, active: true };
    const result = filterObjectKeys(obj, (key) => typeof obj[key as keyof typeof obj] === "object");

    expect(result).toEqual({ user: { name: "Alice" } });
  });
});
