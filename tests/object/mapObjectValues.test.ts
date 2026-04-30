import { mapObjectValues } from "@/object";
import { describe, expect, it } from "vitest";

describe("mapObjectValues", () => {
  it("transforms values", () =>
    expect(mapObjectValues({ firstValue: 1, secondValue: 2 }, (value) => value * 2)).toEqual({
      firstValue: 2,
      secondValue: 4,
    }));

  it("passes key to transformer", () => {
    const result = mapObjectValues({ sampleProperty: 1 }, (value, key) => `${key}:${value}`);
    expect(result).toEqual({ sampleProperty: "sampleProperty:1" });
  });

  it("returns empty object for empty input", () =>
    expect(mapObjectValues({} as Record<string, never>, (value) => value)).toEqual({}));

  it("defensive with frozen object", () => {
    const frozenObject = Object.freeze({ frozenProperty: 1 });
    expect(mapObjectValues(frozenObject, (value) => value + 1)).toEqual({ frozenProperty: 2 });
  });

  it("does not mutate original", () => {
    const originalObject = { originalProperty: 1 };
    mapObjectValues(originalObject, (value) => value + 1);
    expect(originalObject).toEqual({ originalProperty: 1 });
  });

  it("preserves keys", () => {
    const result = mapObjectValues({ hello: 1, world: 2 }, (value) => value);
    expect(Object.keys(result)).toEqual(["hello", "world"]);
  });
});
