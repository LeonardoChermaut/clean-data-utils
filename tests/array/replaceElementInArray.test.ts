import { describe, it, expect } from "vitest";
import { replaceElementInArray } from "@/array/replaceElementInArray";

describe("replaceElementInArray", () => {
  const fixture: number[] = [1, 2, 3];

  it("should replace element at specified index", () => {
    const result = replaceElementInArray(fixture, 1, 99);
    expect(result).toEqual([1, 99, 3]);
  });

  it("should handle negative index", () => {
    const result = replaceElementInArray(fixture, -1, 99);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle out of bounds index", () => {
    const result = replaceElementInArray(fixture, 10, 99);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 3]);
    replaceElementInArray(frozen, 1, 99);
    expect(frozen).toEqual([1, 2, 3]);
  });

  it("should handle empty array", () => {
    const result = replaceElementInArray([], 0, 99);
    expect(result).toEqual([]);
  });
});
