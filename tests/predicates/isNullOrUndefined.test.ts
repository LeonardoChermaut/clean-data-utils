import { isNullOrUndefined } from "@/predicates";
import { describe, expect, it } from "vitest";

describe("isNullOrUndefined", () => {
  const nullishValues = [null, undefined] as const;
  const nonNullishValues = [0, false, "", "a", 1, {}, []] as const;

  it("returns true for null and undefined", () =>
    nullishValues.forEach((value) => expect(isNullOrUndefined(value)).toBe(true)));

  it("returns false for 0, false, and empty string", () =>
    [0, false, ""].forEach((value) => expect(isNullOrUndefined(value)).toBe(false)));

  it("returns false for all non-nullish values", () =>
    nonNullishValues.forEach((value) => expect(isNullOrUndefined(value)).toBe(false)));

  it("narrows type to null | undefined inside a conditional", () => {
    const value: string | null | undefined = null;

    if (isNullOrUndefined(value)) {
      const narrowed: null | undefined = value;
      expect(narrowed).toBeNull();
    }
  });

  it("confirms 0 and false are NOT null or undefined", () => {
    expect(isNullOrUndefined(0)).toBe(false);
    expect(isNullOrUndefined(false)).toBe(false);
  });
});
