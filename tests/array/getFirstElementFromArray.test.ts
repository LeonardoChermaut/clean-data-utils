import { getFirstElementFromArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("getFirstElementFromArray", () => {
  it("returns first element for non-empty array", () =>
    expect(getFirstElementFromArray([1, 2, 3])).toBe(1));

  it("returns undefined for empty array", () =>
    expect(getFirstElementFromArray([])).toBeUndefined());

  it("returns undefined for empty array (defensive)", () =>
    expect(getFirstElementFromArray(Object.freeze([]))).toBeUndefined());

  it("returns first element with strings", () =>
    expect(getFirstElementFromArray(["a", "b"])).toBe("a"));

  it("returns undefined for null input", () => {
    const result = getFirstElementFromArray(null as unknown as never[]);
    expect(result).toBeUndefined();
  });

  it("narrows type after guard", () => {
    const values: (string | undefined)[] = ["a", undefined, "b"];
    const first = getFirstElementFromArray(values);
    expect(first).toBe("a");
  });
});
