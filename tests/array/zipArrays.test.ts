import { zipArrays } from "@/array";
import { describe, expect, it } from "vitest";

describe("zipArrays", () => {
  it("combines two arrays into tuples", () => {
    const result = zipArrays([1, 2, 3], ["a", "b", "c"]);

    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });

  it("uses shorter array length when arrays have different lengths", () => {
    const result = zipArrays([1, 2, 3], ["a", "b"]);

    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });

  it("uses shorter array length when first is longer", () => {
    const result = zipArrays([1, 2], ["a", "b", "c"]);

    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });

  it("returns empty array when first is empty", () => {
    const result = zipArrays([], ["a", "b", "c"]);

    expect(result).toEqual([]);
  });

  it("returns empty array when second is empty", () => {
    const result = zipArrays([1, 2, 3], []);

    expect(result).toEqual([]);
  });

  it("returns empty array when both are empty", () => {
    const result = zipArrays([], []);

    expect(result).toEqual([]);
  });

  it("handles single element arrays", () => {
    const result = zipArrays([1], ["a"]);

    expect(result).toEqual([[1, "a"]]);
  });

  it("handles numeric arrays", () => {
    const result = zipArrays([1, 2, 3], [4, 5, 6]);

    expect(result).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  it("handles object arrays", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const strs = ["a", "b", "c"];

    const result = zipArrays([obj1, obj2, obj3], strs);

    expect(result).toEqual([
      [obj1, "a"],
      [obj2, "b"],
      [obj3, "c"],
    ]);
  });

  it("handles boolean arrays", () => {
    const result = zipArrays([true, false, true], [1, 2, 3]);

    expect(result).toEqual([
      [true, 1],
      [false, 2],
      [true, 3],
    ]);
  });
});
