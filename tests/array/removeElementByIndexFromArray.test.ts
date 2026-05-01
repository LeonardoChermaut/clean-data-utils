import { describe, it, expect } from "vitest";
import { removeElementByIndexFromArray } from "@/array/removeElementByIndexFromArray";

describe("removeElementByIndexFromArray", () => {
  const fixture: number[] = [1, 2, 3, 4];

  it("should remove element by single index", () => {
    const result = removeElementByIndexFromArray(fixture, 1);
    expect(result).toEqual([1, 3, 4]);
  });

  it("should remove element by multiple indices", () => {
    const result = removeElementByIndexFromArray(fixture, [0, 2]);
    expect(result).toEqual([2, 4]);
  });

  it("should handle out of bounds index", () => {
    const result = removeElementByIndexFromArray(fixture, 10);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 3]);
    removeElementByIndexFromArray(frozen, 1);
    expect(frozen).toEqual([1, 2, 3]);
  });

  it("should handle empty array", () => {
    const result = removeElementByIndexFromArray([], 0);
    expect(result).toEqual([]);
  });
});
