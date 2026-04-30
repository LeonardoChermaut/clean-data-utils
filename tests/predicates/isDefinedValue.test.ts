import { isDefinedValue } from "@/predicates";
import { describe, expect, it } from "vitest";

describe("isDefinedValue", () => {
  const definedValues = ["hello", 42, true, {}, []] as const;
  const undefinedValues = [null, undefined] as const;

  it("returns true for defined values", () =>
    definedValues.forEach((definedValue) => expect(isDefinedValue(definedValue)).toBe(true)));

  it("returns false for null", () =>
    expect(isDefinedValue(null)).toBe(false));

  it("returns false for undefined", () =>
    expect(isDefinedValue(undefined)).toBe(false));

  it("narrows type after guard", () => {
    const values: (string | null | undefined)[] = ["first", null, "second"];
    const result: string[] = values.filter(isDefinedValue);
    expect(result).toEqual(["first", "second"]);
  });

  it("returns true for zero", () =>
    expect(isDefinedValue(0)).toBe(true));

  it("returns true for empty string", () =>
    expect(isDefinedValue("")).toBe(true));
});