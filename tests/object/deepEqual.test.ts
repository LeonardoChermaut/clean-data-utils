import { deepEqual } from "@/object/deepEqual";
import { describe, expect, it } from "vitest";

describe("deepEqual", () => {
  it("should return true for equal primitives", () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual("hello", "hello")).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
  });

  it("should return false for different primitives", () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual("hello", "world")).toBe(false);
  });

  it("should return true for equal objects", () => {
    expect(deepEqual({ first: 1, second: 2 }, { first: 1, second: 2 })).toBe(true);
    expect(deepEqual({ first: { second: 1 } }, { first: { second: 1 } })).toBe(true);
  });

  it("should return false for different objects", () => {
    expect(deepEqual({ first: 1 }, { first: 2 })).toBe(false);
    expect(deepEqual({ first: 1 }, { second: 1 })).toBe(false);
  });

  it("should return true for equal arrays", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([[1], [2]], [[1], [2]])).toBe(true);
  });

  it("should return false for different arrays", () => {
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
  });

  it("should handle Date objects", () => {
    const date1 = new Date("2024-01-01");
    const date2 = new Date("2024-01-01");

    expect(deepEqual(date1, date2)).toBe(true);
  });

  it("should handle null and undefined", () => {
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(null, undefined)).toBe(false);
  });
});
