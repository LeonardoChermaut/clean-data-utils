import { flattenDeepArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("flattenDeepArray", () => {
  it("recursively flattens deeply nested arrays", () =>
    expect(flattenDeepArray([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]));

  it("returns empty array for empty input", () => expect(flattenDeepArray([])).toEqual([]));

  it("handles already flat array", () => expect(flattenDeepArray([1, 2, 3])).toEqual([1, 2, 3]));

  it("handles mixed nested levels", () =>
    expect(flattenDeepArray([["a", "b"], [["c"]], "d"])).toEqual(["a", "b", "c", "d"]));

  it("defensive with frozen array", () =>
    expect(flattenDeepArray(Object.freeze([1, [2, [3]]]))).toEqual([1, 2, 3]));

  it("returns new array instance", () => {
    const nested = [1, [2, [3]]];
    const result = flattenDeepArray(nested);
    expect(result).not.toBe(nested);
  });
});
