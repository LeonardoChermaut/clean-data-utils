import { describe, it, expect } from "vitest";
import { insertElementIntoArray } from "@/array/insertElementIntoArray";

describe("insertElementIntoArray", () => {
  const fixture: number[] = [1, 2, 3];

  it("should insert element at the beginning", () => {
    const result = insertElementIntoArray(fixture, 0, 99);
    expect(result).toEqual([99, 1, 2, 3]);
  });

  it("should insert element in the middle", () => {
    const result = insertElementIntoArray(fixture, 1, 99);
    expect(result).toEqual([1, 99, 2, 3]);
  });

  it("should insert element at the end", () => {
    const result = insertElementIntoArray(fixture, 3, 99);
    expect(result).toEqual([1, 2, 3, 99]);
  });

  it("should not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 3]);
    insertElementIntoArray(frozen, 1, 99);
    expect(frozen).toEqual([1, 2, 3]);
  });

  it("should handle empty array", () => {
    const result = insertElementIntoArray([], 0, 99);
    expect(result).toEqual([99]);
  });
});
