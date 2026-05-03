import { describe, it, expect } from "vitest";
import { moveElementInArray } from "@/array/moveElementInArray";

describe("moveElementInArray", () => {
  const fixture = Object.freeze([1, 2, 3, 4, 5]);

  it("should move element from start to middle", () => {
    const result = moveElementInArray(fixture, 0, 2);
    expect(result).toEqual([2, 3, 1, 4, 5]);
  });

  it("should move element from end to start", () => {
    const result = moveElementInArray(fixture, 4, 1);
    expect(result).toEqual([1, 5, 2, 3, 4]);
  });

  it("should handle moving to the same index", () => {
    const result = moveElementInArray(fixture, 2, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle out of bounds from index", () => {
    const result = moveElementInArray(fixture, 10, 2);
    expect(result[0]).toEqual(1);
    expect(result[4]).toEqual(4);
  });

  it("should handle empty array", () => {
    const result = moveElementInArray([], 0, 2);
    expect(result).toEqual([]);
  });

  it("should not mutate original", () => {
    const frozen = Object.freeze([1, 2, 3]);
    moveElementInArray(frozen, 0, 2);
    expect(frozen).toEqual([1, 2, 3]);
  });
});
