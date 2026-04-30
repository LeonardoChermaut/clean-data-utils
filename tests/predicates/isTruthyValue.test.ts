import { isTruthyValue } from "@/predicates";
import { describe, expect, it } from "vitest";

describe("isTruthyValue", () => {
  const falsyValues = [null, undefined, false, 0, NaN, ""] as const;
  const truthyValues = ["a", 1, true, {}, []] as const;

  it("returns false for all canonical falsy values", () =>
    falsyValues.forEach((value) => expect(isTruthyValue(value)).toBe(false)));

  it("returns true for non-empty string", () => expect(isTruthyValue("hello")).toBe(true));

  it("returns true for non-zero number", () => expect(isTruthyValue(42)).toBe(true));

  it("returns true for object and array references", () =>
    truthyValues.slice(2).forEach((value) => {
      expect(isTruthyValue(value)).toBe(true);
    }));

  it("narrows the type — result is usable as ElementType after guard", () => {
    const values: (string | null | undefined)[] = ["a", null, "b"];
    const result: string[] = values.filter(isTruthyValue);

    expect(result).toEqual(["a", "b"]);
  });
});
