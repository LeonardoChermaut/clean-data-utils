import { hasDefinedProperty } from "@/object";
import { describe, expect, it } from "vitest";

describe("hasDefinedProperty", () => {
  it("returns true for defined property", () =>
    expect(hasDefinedProperty({ definedProperty: 1 }, "definedProperty")).toBe(true));

  it("returns false for undefined property", () =>
    expect(hasDefinedProperty({ undefinedProperty: undefined }, "undefinedProperty")).toBe(false));

  it("returns false for missing key", () =>
    expect(hasDefinedProperty({}, "missingKey" as never)).toBe(false));

  it("narrows type after check", () => {
    const objectWithOptional = { optionalProperty: 42 } as {
      optionalProperty?: number;
    };

    if (hasDefinedProperty(objectWithOptional, "optionalProperty")) {
      expect(objectWithOptional.optionalProperty).toBe(42);
    }
  });

  it("defensive with frozen object", () => {
    const frozenObject = Object.freeze({ frozenProperty: 1 });

    expect(hasDefinedProperty(frozenObject, "frozenProperty")).toBe(true);
  });

  it("returns false for null value", () =>
    expect(hasDefinedProperty({ nullProperty: null }, "nullProperty" as never)).toBe(false));
});
