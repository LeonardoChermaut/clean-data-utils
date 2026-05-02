import { getNestedValue } from "@/object";
import { describe, expect, it } from "vitest";

describe("getNestedValue", () => {
  it("returns nested value from object", () => {
    const obj = { user: { address: { city: "London" } } };
    const result = getNestedValue(obj, "user.address.city");

    expect(result).toBe("London");
  });

  it("returns value at first level", () => {
    const obj = { name: "Alice", age: 30 };
    const result = getNestedValue(obj, "name");

    expect(result).toBe("Alice");
  });

  it("returns undefined for non-existent path", () => {
    const obj = { user: { name: "Alice" } };
    const result = getNestedValue(obj, "user.age");

    expect(result).toBeUndefined();
  });

  it("returns undefined for empty path", () => {
    const obj = { name: "Alice" };
    const result = getNestedValue(obj, "");

    expect(result).toBeUndefined();
  });

  it("returns undefined for non-existent key", () => {
    const obj = { name: "Alice" };
    const result = getNestedValue(obj, "name.missing");

    expect(result).toBeUndefined();
  });

  it("returns undefined for null object", () => {
    const result = getNestedValue(null as unknown as { name: string }, "name");

    expect(result).toBeUndefined();
  });

  it("returns undefined for undefined value in path", () => {
    const obj = { user: undefined };
    const result = getNestedValue(obj, "user.name");

    expect(result).toBeUndefined();
  });

  it("returns nested array value", () => {
    const obj = { users: [{ name: "Alice" }, { name: "Bob" }] };
    const result = getNestedValue(obj, "users.0.name");

    expect(result).toBe("Alice");
  });

  it("returns number value", () => {
    const obj = { count: 42 };
    const result = getNestedValue(obj, "count");

    expect(result).toBe(42);
  });

  it("returns boolean value", () => {
    const obj = { active: true };
    const result = getNestedValue(obj, "active");

    expect(result).toBe(true);
  });

  it("returns array value", () => {
    const obj = { items: [1, 2, 3] };
    const result = getNestedValue(obj, "items");

    expect(result).toEqual([1, 2, 3]);
  });

  it("handles nested object in array", () => {
    const obj = { data: { items: [{ id: 1 }, { id: 2 }] } };
    const result = getNestedValue(obj, "data.items.1.id");

    expect(result).toBe(2);
  });

  it("returns undefined for empty object", () => {
    const result = getNestedValue({}, "any.path");

    expect(result).toBeUndefined();
  });

  it("returns falsy values correctly", () => {
    const obj = { value: 0 };
    const result = getNestedValue(obj, "value");

    expect(result).toBe(0);
  });

  it("returns empty string correctly", () => {
    const obj = { value: "" };
    const result = getNestedValue(obj, "value");

    expect(result).toBe("");
  });
});
