import { setNestedValue } from "@/object";
import { describe, expect, it } from "vitest";

describe("setNestedValue", () => {
  it("sets nested value in object", () => {
    const obj = { user: { name: "Alice" } };
    const result = setNestedValue(obj, "user.address.city", "London");

    expect(result).toEqual({ user: { name: "Alice", address: { city: "London" } } });
  });

  it("sets value at first level", () => {
    const obj = { name: "Alice" };
    const result = setNestedValue(obj, "age", 30);

    expect(result).toEqual({ name: "Alice", age: 30 });
  });

  it("does not mutate original object", () => {
    const frozen = Object.freeze({ user: { name: "Alice" } });
    const result = setNestedValue(frozen, "user.age", 30);

    expect(result).toEqual({ user: { name: "Alice", age: 30 } });
    expect(frozen).toEqual({ user: { name: "Alice" } });
  });

  it("creates intermediate objects", () => {
    const obj = { name: "Alice" };
    const result = setNestedValue(obj, "address.city", "London");

    expect(result).toEqual({ name: "Alice", address: { city: "London" } });
  });

  it("overwrites existing nested value", () => {
    const obj = { user: { name: "Alice", age: 20 } };
    const result = setNestedValue(obj, "user.age", 30);

    expect(result).toEqual({ user: { name: "Alice", age: 30 } });
  });

  it("handles numeric path keys", () => {
    const obj = { users: [{ name: "Alice" }] };
    const result = setNestedValue(obj, "users.0.name", "Bob");

    expect(result).toEqual({ users: [{ name: "Bob" }] });
  });

  it("sets deep nested value", () => {
    const obj = { level1: { level2: { level3: { level4: 1 } } } };
    const result = setNestedValue(obj, "level1.level2.level3.level4", 2);

    expect(result).toEqual({ level1: { level2: { level3: { level4: 2 } } } });
  });

  it("sets value to null", () => {
    const obj = { name: "Alice" };
    const result = setNestedValue(obj, "name", null);

    expect(result).toEqual({ name: null });
  });

  it("sets value to empty string", () => {
    const obj = { name: "Alice" };
    const result = setNestedValue(obj, "name", "");

    expect(result).toEqual({ name: "" });
  });

  it("sets value to number", () => {
    const obj = { count: 0 };
    const result = setNestedValue(obj, "count", 10);

    expect(result).toEqual({ count: 10 });
  });

  it("sets value to array", () => {
    const obj = { items: [] };
    const result = setNestedValue(obj, "items", [1, 2, 3]);

    expect(result).toEqual({ items: [1, 2, 3] });
  });

  it("handles empty object", () => {
    const result = setNestedValue({}, "level1.level2.level3", "value");

    expect(result).toEqual({ level1: { level2: { level3: "value" } } });
  });

  it("handles boolean values", () => {
    const obj = { active: false };
    const result = setNestedValue(obj, "active", true);

    expect(result).toEqual({ active: true });
  });
});
