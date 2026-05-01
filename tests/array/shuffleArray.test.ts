import { describe, it, expect } from "vitest";
import { shuffleArray } from "@/array/shuffleArray";

describe("shuffleArray", () => {
  const fixture: number[] = [1, 2, 3, 4, 5];

  it("should return a shuffled array", () => {
    const result = shuffleArray(fixture);
    expect(result).toHaveLength(5);
  });

  it("should contain all original elements", () => {
    const result = shuffleArray(fixture);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
  });

  it("should not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 3]);
    shuffleArray(frozen);
    expect(frozen).toEqual([1, 2, 3]);
  });

  it("should handle empty array", () => {
    const result = shuffleArray([]);
    expect(result).toEqual([]);
  });

  it("should handle single element array", () => {
    const result = shuffleArray([42]);
    expect(result).toEqual([42]);
  });
});
