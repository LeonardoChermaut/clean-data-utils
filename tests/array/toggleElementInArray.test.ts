import { describe, it, expect } from "vitest";
import { toggleElementInArray } from "@/array/toggleElementInArray";

describe("toggleElementInArray", () => {
  it("should remove element if it exists", () => {
    const result = toggleElementInArray([1, 2, 3], 2);
    expect(result).toEqual([1, 3]);
  });

  it("should add element if it does not exist", () => {
    const result = toggleElementInArray([1, 2], 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should add and then remove element", () => {
    const values = [1, 2];
    const afterAdd = toggleElementInArray(values, 3);
    const afterRemove = toggleElementInArray(afterAdd, 3);
    expect(afterRemove).toEqual([1, 2]);
  });

  it("should toggle by custom comparator", () => {
    const result = toggleElementInArray(
      [{ id: 1 }, { id: 2 }],
      { id: 1 },
      (first, second) => first.id === second.id,
    );
    expect(result).toEqual([{ id: 2 }]);
  });

  it("should not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 3]);
    toggleElementInArray(frozen, 4);
    expect(frozen).toEqual([1, 2, 3]);
  });

  it("should handle empty array add", () => {
    const result = toggleElementInArray([], 1);
    expect(result).toEqual([1]);
  });

  it("should handle null and undefined correctly", () => {
    const result = toggleElementInArray([null, undefined], null);
    expect(result).toEqual([undefined]);
  });
});
