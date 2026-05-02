import { unflattenObject } from "@/object/unflattenObject";
import { describe, expect, it } from "vitest";

describe("unflattenObject", () => {
  it("should unflatten object", () => {
    const obj = { "user.name": "Alice", "user.address.city": "London" };
    const result = unflattenObject(obj);

    expect(result).toEqual({
      user: { name: "Alice", address: { city: "London" } },
    });
  });

  it("should handle simple keys", () => {
    const obj = { first: 1, second: 2 };
    const result = unflattenObject(obj);

    expect(result).toEqual({ first: 1, second: 2 });
  });

  it("should return empty object for invalid input", () => {
    expect(unflattenObject(null as unknown as Record<string, unknown>)).toEqual({});
    expect(unflattenObject(undefined as unknown as Record<string, unknown>)).toEqual({});
  });

  it("should handle deep nesting", () => {
    const obj = { "first.second.third.fourth": 1 };
    const result = unflattenObject(obj);

    expect(result).toEqual({ first: { second: { third: { fourth: 1 } } } });
  });

  it("should handle mixed flat and nested keys", () => {
    const obj = { simple: "value", "nested.key": "nested" };
    const result = unflattenObject(obj);

    expect(result).toEqual({ simple: "value", nested: { key: "nested" } });
  });
});
