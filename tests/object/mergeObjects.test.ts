import { mergeObjects } from "@/object";
import { describe, expect, it } from "vitest";

describe("mergeObjects", () => {
  it("merges two objects", () =>
    expect(mergeObjects({ baseValue: 1 }, { overrideValue: 2 })).toEqual({
      baseValue: 1,
      overrideValue: 2,
    }));

  it("override takes precedence", () =>
    expect(mergeObjects({ sampleProperty: 1 }, { testProperty: 2 })).toEqual({
      sampleProperty: 1,
      testProperty: 2,
    }));

  it("returns new object", () => {
    const baseObject = { baseProperty: 1 };
    const result = mergeObjects(baseObject, { overrideProperty: 2 });
    expect(result).not.toBe(baseObject);
  });

  it("defensive with frozen objects", () => {
    const frozenBase = Object.freeze({ baseProperty: 1 });
    const frozenOverride = Object.freeze({ overrideProperty: 2 });
    expect(mergeObjects(frozenBase, frozenOverride)).toEqual({
      baseProperty: 1,
      overrideProperty: 2,
    });
  });

  it("handles empty base", () =>
    expect(mergeObjects({}, { addedProperty: 1 })).toEqual({ addedProperty: 1 }));

  it("handles empty override", () =>
    expect(mergeObjects({ existingProperty: 1 }, {})).toEqual({ existingProperty: 1 }));
});
