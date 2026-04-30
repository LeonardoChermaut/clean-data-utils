import { partitionArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("partitionArray", () => {
  it("separates matching and non-matching elements", () => {
    const result = partitionArray([1, 2, 3, 4, 5], (value) => value > 2);

    expect(result).toEqual([
      [3, 4, 5],
      [1, 2],
    ]);
  });

  it("returns empty arrays when all elements match", () => {
    const result = partitionArray([1, 2, 3], () => true);

    expect(result).toEqual([[1, 2, 3], []]);
  });

  it("returns empty arrays when no elements match", () => {
    const result = partitionArray([1, 2, 3], () => false);

    expect(result).toEqual([[], [1, 2, 3]]);
  });

  it("handles empty input array", () => {
    const result = partitionArray<number>([], (value) => value > 0);

    expect(result).toEqual([[], []]);
  });

  it("does not mutate original array", () => {
    const frozenInput = Object.freeze([1, 2, 3]);
    const result = partitionArray(frozenInput, (value) => value > 1);

    expect(result).toEqual([[2, 3], [1]]);
    expect(frozenInput).toEqual([1, 2, 3]);
  });

  it("handles object elements", () => {
    const objects = [{ active: true }, { active: false }, { active: true }];
    const result = partitionArray(objects, (obj) => obj.active);

    expect(result).toEqual([[{ active: true }, { active: true }], [{ active: false }]]);
  });

  it("preserves element order in both partitions", () => {
    const result = partitionArray([5, 4, 3, 2, 1], (value) => value >= 3);

    expect(result).toEqual([
      [5, 4, 3],
      [2, 1],
    ]);
  });

  it("narrows types with type guard predicate", () => {
    const mixed = ["a", 1, "b", 2] as (string | number)[];
    const [strings, numbers] = partitionArray(
      mixed,
      (val): val is string => typeof val === "string",
    );

    expect(strings).toEqual(["a", "b"]);
    expect(numbers).toEqual([1, 2]);
  });
});
