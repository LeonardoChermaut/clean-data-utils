import { uniqueValuesFromArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("uniqueValuesFromArray", () => {
  it("removes duplicate numbers", () =>
    expect(uniqueValuesFromArray([1, 2, 2, 3, 3])).toEqual([1, 2, 3]));

  it("returns empty array for empty input", () => expect(uniqueValuesFromArray([])).toEqual([]));

  it("works with strings", () =>
    expect(uniqueValuesFromArray(["first", "second", "first"])).toEqual(["first", "second"]));

  it("uses custom comparator", () =>
    expect(
      uniqueValuesFromArray(
        [1, 2, 1],
        (firstElement, secondElement) => firstElement === secondElement,
      ),
    ).toEqual([1, 2]));

  it("defensive with frozen array", () =>
    expect(uniqueValuesFromArray(Object.freeze([1, 1, 2]))).toEqual([1, 2]));

  it("preserves order of first occurrence", () =>
    expect(uniqueValuesFromArray([3, 1, 2, 1, 3])).toEqual([3, 1, 2]));
});
