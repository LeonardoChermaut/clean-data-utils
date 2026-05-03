import { describe, it, expect } from "vitest";
import { rotateArray } from "@/array/rotateArray";

describe("rotateArray", () => {
  it("should rotate right by positive steps", () => {
    const result = rotateArray([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  it("should rotate left by negative steps", () => {
    const result = rotateArray([1, 2, 3, 4, 5], -1);
    expect(result).toEqual([2, 3, 4, 5, 1]);
  });

  it("should handle zero steps", () => {
    const result = rotateArray([1, 2, 3], 0);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should normalize steps larger than array length", () => {
    const result = rotateArray([1, 2, 3], 5);
    expect(result).toEqual([2, 3, 1]);
  });

  it("should normalize negative steps", () => {
    const result = rotateArray([1, 2, 3], -4);
    expect(result).toEqual([2, 3, 1]);
  });

  it("should handle empty array", () => {
    const result = rotateArray([], 2);
    expect(result).toEqual([]);
  });

  it("should handle single element", () => {
    const result = rotateArray([1], 5);
    expect(result).toEqual([1]);
  });

  it("should not mutate original", () => {
    const frozen = Object.freeze([1, 2, 3]);
    rotateArray(frozen, 1);
    expect(frozen).toEqual([1, 2, 3]);
  });
});
