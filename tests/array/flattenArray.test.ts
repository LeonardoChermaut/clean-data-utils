import { flattenArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("flattenArray", () => {
  it("flattens nested array by one level", () =>
    expect(
      flattenArray([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 2, 3, 4]));

  it("returns empty array for empty input", () => expect(flattenArray([])).toEqual([]));

  it("handles already flat array", () => expect(flattenArray([[1], [2], [3]])).toEqual([1, 2, 3]));

  it("handles mixed content", () => expect(flattenArray([[1, 2], [3]])).toEqual([1, 2, 3]));

  it("defensive with frozen array", () =>
    expect(flattenArray(Object.freeze([[1], [2]]))).toEqual([1, 2]));

  it("returns new array instance", () => {
    const nested = [[1, 2]];
    const result = flattenArray(nested);
    expect(result).not.toBe(nested);
  });
});
