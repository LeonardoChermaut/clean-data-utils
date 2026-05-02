import { findDuplicatesFromArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("findDuplicatesFromArray", () => {
  it("returns duplicate values from array", () => {
    const result = findDuplicatesFromArray([1, 2, 2, 3, 3, 3, 4]);

    expect(result).toEqual([2, 3]);
  });

  it("returns empty array when no duplicates", () => {
    const result = findDuplicatesFromArray([1, 2, 3, 4]);

    expect(result).toEqual([]);
  });

  it("returns empty array for empty input", () => {
    const result = findDuplicatesFromArray([]);

    expect(result).toEqual([]);
  });

  it("returns all duplicates with multiple occurrences", () => {
    const result = findDuplicatesFromArray([1, 1, 1, 2, 2, 3, 3, 3]);

    expect(result).toEqual([1, 2, 3]);
  });

  it("does not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 2, 3]);
    const result = findDuplicatesFromArray(frozen);

    expect(result).toEqual([2]);
    expect(frozen).toEqual([1, 2, 2, 3]);
  });

  it("handles string elements", () => {
    const result = findDuplicatesFromArray(["a", "b", "a", "c", "b"]);

    expect(result).toEqual(["a", "b"]);
  });

  it("handles mixed duplicates and non-duplicates", () => {
    const result = findDuplicatesFromArray([1, 2, 3, 4, 4, 5, 5, 5]);

    expect(result).toEqual([4, 5]);
  });

  it("handles single element array", () => {
    const result = findDuplicatesFromArray([1]);

    expect(result).toEqual([]);
  });

  it("handles two identical elements", () => {
    const result = findDuplicatesFromArray([1, 1]);

    expect(result).toEqual([1]);
  });

  it("handles object elements", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };

    const result = findDuplicatesFromArray([obj1, obj2, obj1]);

    expect(result).toEqual([obj1]);
  });
});
