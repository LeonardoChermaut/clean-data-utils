import { flattenObject } from "@/object/flattenObject";
import { describe, expect, it } from "vitest";

describe("flattenObject", () => {
  it("should flatten nested object", () => {
    const obj = { user: { name: "Alice", address: { city: "London" } } };
    const result = flattenObject(obj);

    expect(result).toEqual({
      "user.name": "Alice",
      "user.address.city": "London",
    });
  });

  it("should flatten with prefix", () => {
    const obj = { first: 1, second: { third: 2 } };
    const result = flattenObject(obj, "prefix");

    expect(result).toEqual({
      "prefix.first": 1,
      "prefix.second.third": 2,
    });
  });

  it("should return empty object for invalid input", () => {
    expect(flattenObject(null as unknown as Record<string, unknown>)).toEqual({});
    expect(flattenObject(undefined as unknown as Record<string, unknown>)).toEqual({});
  });

  it("should handle primitives at leaf level", () => {
    const obj = { first: 1, second: "string", third: true };
    const result = flattenObject(obj);

    expect(result).toEqual({ first: 1, second: "string", third: true });
  });

  it("should handle arrays in object", () => {
    const obj = { items: [1, 2, 3] };
    const result = flattenObject(obj);

    expect(result).toEqual({ items: [1, 2, 3] });
  });
});
