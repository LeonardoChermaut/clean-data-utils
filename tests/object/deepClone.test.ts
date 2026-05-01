import { describe, it, expect } from "vitest";
import { deepClone } from "@/object/deepClone";

describe("deepClone", () => {
  it("should clone a plain object", () => {
    const original = { propA: 1, propB: 2 };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it("should clone nested objects", () => {
    const original = { outerA: { innerA: 1 } };
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it("should clone arrays", () => {
    const original = [1, [2, 3]];
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
  });

  it("should handle null", () => {
    const result = deepClone(null);
    expect(result).toBeNull();
  });

  it("should handle primitives", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("hello")).toBe("hello");
  });

  it("should handle Date object", () => {
    const original = new Date("2024-01-01");
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
  });

  it("should handle RegExp", () => {
    const original = /test/gi;
    const cloned = deepClone(original);
    expect(cloned).toEqual(original);
  });
});
