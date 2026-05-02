import { flipObject } from "@/object";
import { describe, expect, it } from "vitest";

describe("flipObject", () => {
  it("flips object keys and values", () => {
    const obj = { keyA: 1, keyB: 2, keyC: 3 };
    const result = flipObject(obj);

    expect(result).toEqual({ 1: "keyA", 2: "keyB", 3: "keyC" });
  });

  it("does not mutate original object", () => {
    const frozen = Object.freeze({ keyA: 1, keyB: 2 });
    const result = flipObject(frozen);

    expect(result).toEqual({ 1: "keyA", 2: "keyB" });
    expect(frozen).toEqual({ keyA: 1, keyB: 2 });
  });

  it("handles string values", () => {
    const obj = { name: "Alice", city: "London" };
    const result = flipObject(obj);

    expect(result).toEqual({ Alice: "name", London: "city" });
  });

  it("handles empty object", () => {
    const result = flipObject({});

    expect(result).toEqual({});
  });

  it("handles single key object", () => {
    const obj = { key: "value" };
    const result = flipObject(obj);

    expect(result).toEqual({ value: "key" });
  });

  it("handles object with numeric values", () => {
    const obj = { zero: 0, one: 1, two: 2 };
    const result = flipObject(obj);

    expect(result).toEqual({ 0: "zero", 1: "one", 2: "two" });
  });

  it("handles object with boolean values", () => {
    const obj = { active: true, disabled: false };
    const result = flipObject(obj);

    expect(result).toEqual({ true: "active", false: "disabled" });
  });

  it("handles duplicate values last wins", () => {
    const obj = { first: 1, second: 1 };
    const result = flipObject(obj);

    expect(result).toEqual({ 1: "second" });
  });

  it("handles mixed value types", () => {
    const obj = { str: "hello", num: 42, bool: true };
    const result = flipObject(obj);

    expect(result).toEqual({ hello: "str", 42: "num", true: "bool" });
  });
});
