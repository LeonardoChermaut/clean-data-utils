import { isNonEmptyString } from "@/predicates";
import { describe, expect, it } from "vitest";

describe("isNonEmptyString", () => {
  it("returns true for non-empty string", () => expect(isNonEmptyString("hello")).toBe(true));

  it("returns false for empty string", () => expect(isNonEmptyString("")).toBe(false));

  it("returns false for null", () => expect(isNonEmptyString(null)).toBe(false));

  it("returns false for undefined", () => expect(isNonEmptyString(undefined)).toBe(false));

  it("returns false for numbers", () => expect(isNonEmptyString(42)).toBe(false));

  it("narrows type after guard", () => {
    const unknownValue: unknown = "hello";
    if (isNonEmptyString(unknownValue)) {
      expect(unknownValue.length).toBeGreaterThan(0);
    }
  });
});
