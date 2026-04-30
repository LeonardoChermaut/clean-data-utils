import { hasOwnProperty } from "@/object";
import { describe, expect, it } from "vitest";

describe("hasOwnProperty", () => {
  it("returns true for existing property", () =>
    expect(hasOwnProperty({ definedProperty: 1 }, "definedProperty")).toBe(true));

  it("returns false for missing property", () =>
    expect(hasOwnProperty({}, "missingProperty" as never)).toBe(false));

  it("returns true for property with undefined value", () =>
    expect(hasOwnProperty({ undefinedProperty: undefined }, "undefinedProperty")).toBe(true));

  it("returns true for property with null value", () =>
    expect(hasOwnProperty({ nullProperty: null }, "nullProperty")).toBe(true));

  it("narrows type after check", () => {
    const objectWithOptional = { optionalProperty: 42 } as {
      optionalProperty?: number;
    };

    if (hasOwnProperty(objectWithOptional, "optionalProperty")) {
      expect(objectWithOptional.optionalProperty).toBe(42);
    }
  });

  it("defensive with frozen object", () => {
    const frozenObject = Object.freeze({ frozenProperty: 1 });

    expect(hasOwnProperty(frozenObject, "frozenProperty")).toBe(true);
  });

  it("works with string keys", () => {
    expect(hasOwnProperty({ key1: "value" }, "key1")).toBe(true);
    expect(hasOwnProperty({ key1: "value" }, "key2")).toBe(false);
  });

  it("works with numeric keys", () => {
    const obj = { 0: "zero", 1: "one" };

    expect(hasOwnProperty(obj, 0)).toBe(true);
    expect(hasOwnProperty(obj, 2)).toBe(false);
  });

  it("works with symbol keys", () => {
    const sym = Symbol("test");
    const obj = { [sym]: "symbolValue" };

    expect(hasOwnProperty(obj, sym)).toBe(true);
    expect(hasOwnProperty(obj, Symbol("other"))).toBe(false);
  });
});
