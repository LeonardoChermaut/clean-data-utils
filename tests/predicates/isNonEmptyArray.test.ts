import { isNonEmptyArray } from "@/predicates";
import { describe, expect, it } from "vitest";

describe("isNonEmptyArray", () => {
  it("returns true for non-empty array", () => expect(isNonEmptyArray([1, 2, 3])).toBe(true));

  it("returns false for empty array", () => expect(isNonEmptyArray([])).toBe(false));

  it("returns false for null", () => expect(isNonEmptyArray(null)).toBe(false));

  it("returns false for undefined", () => expect(isNonEmptyArray(undefined)).toBe(false));

  it("returns false for non-array values", () => expect(isNonEmptyArray("hello")).toBe(false));

  it("narrows type after guard", () => {
    const unknownValue: unknown = [1, 2, 3];
    if (isNonEmptyArray<number>(unknownValue)) {
      expect(unknownValue.length).toBeGreaterThan(0);
    }
  });
});
