import { differenceBetweenArrays } from "@/array";
import { describe, expect, it } from "vitest";

describe("differenceBetweenArrays", () => {
  it("returns elements only in base array", () => {
    const result = differenceBetweenArrays([1, 2, 3, 4, 5], [2, 4]);

    expect(result).toEqual([1, 3, 5]);
  });

  it("returns empty array when base equals compare", () => {
    const result = differenceBetweenArrays([1, 2, 3], [1, 2, 3]);

    expect(result).toEqual([]);
  });

  it("returns full base when compare is empty", () => {
    const result = differenceBetweenArrays([1, 2, 3], []);

    expect(result).toEqual([1, 2, 3]);
  });

  it("returns empty array when compare contains all base elements", () => {
    const result = differenceBetweenArrays([1, 2, 3], [1, 2, 3, 4, 5]);

    expect(result).toEqual([]);
  });

  it("does not mutate original arrays", () => {
    const baseFrozen = Object.freeze([1, 2, 3]);
    const compareFrozen = Object.freeze([2]);
    const result = differenceBetweenArrays(baseFrozen, compareFrozen);

    expect(result).toEqual([1, 3]);
    expect(baseFrozen).toEqual([1, 2, 3]);
    expect(compareFrozen).toEqual([2]);
  });

  it("handles duplicate elements in base", () => {
    const result = differenceBetweenArrays([1, 2, 2, 3, 3, 4], [3]);

    expect(result).toEqual([1, 2, 4]);
  });

  it("handles duplicate elements in compare", () => {
    const result = differenceBetweenArrays([1, 2, 3], [2, 2, 2]);

    expect(result).toEqual([1, 3]);
  });

  it("handles empty arrays", () => {
    const result = differenceBetweenArrays([], []);

    expect(result).toEqual([]);
  });

  it("handles object elements", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };

    const result = differenceBetweenArrays([obj1, obj2, obj3], [obj2]);

    expect(result).toEqual([obj1, obj3]);
  });

  it("handles primitive string elements", () => {
    const result = differenceBetweenArrays(["a", "b", "c"], ["b"]);

    expect(result).toEqual(["a", "c"]);
  });
});
