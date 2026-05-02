import { intersectionBetweenArrays } from "@/array";
import { describe, expect, it } from "vitest";

describe("intersectionBetweenArrays", () => {
  it("returns elements present in both arrays", () => {
    const result = intersectionBetweenArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

    expect(result).toEqual([3, 4, 5]);
  });

  it("returns empty array when no common elements", () => {
    const result = intersectionBetweenArrays([1, 2, 3], [4, 5, 6]);

    expect(result).toEqual([]);
  });

  it("returns full first array when first is subset of second", () => {
    const result = intersectionBetweenArrays([1, 2, 3], [1, 2, 3, 4, 5]);

    expect(result).toEqual([1, 2, 3]);
  });

  it("returns full second array when second is subset of first", () => {
    const result = intersectionBetweenArrays([1, 2, 3, 4, 5], [2, 3]);

    expect(result).toEqual([2, 3]);
  });

  it("does not mutate original arrays", () => {
    const firstFrozen = Object.freeze([1, 2, 3]);
    const secondFrozen = Object.freeze([2, 3, 4]);
    const result = intersectionBetweenArrays(firstFrozen, secondFrozen);

    expect(result).toEqual([2, 3]);
    expect(firstFrozen).toEqual([1, 2, 3]);
    expect(secondFrozen).toEqual([2, 3, 4]);
  });

  it("handles duplicate elements in first", () => {
    const result = intersectionBetweenArrays([1, 2, 2, 3, 3], [2, 3, 4]);

    expect(result).toEqual([2, 3]);
  });

  it("handles duplicate elements in second", () => {
    const result = intersectionBetweenArrays([1, 2, 3], [2, 2, 2, 3]);

    expect(result).toEqual([2, 3]);
  });

  it("handles empty first array", () => {
    const result = intersectionBetweenArrays([], [1, 2, 3]);

    expect(result).toEqual([]);
  });

  it("handles empty second array", () => {
    const result = intersectionBetweenArrays([1, 2, 3], []);

    expect(result).toEqual([]);
  });

  it("handles empty both arrays", () => {
    const result = intersectionBetweenArrays([], []);

    expect(result).toEqual([]);
  });

  it("handles object elements", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };

    const result = intersectionBetweenArrays([obj1, obj2], [obj2, obj3]);

    expect(result).toEqual([obj2]);
  });

  it("handles primitive string elements", () => {
    const result = intersectionBetweenArrays(["a", "b", "c"], ["b", "c", "d"]);

    expect(result).toEqual(["b", "c"]);
  });
});
