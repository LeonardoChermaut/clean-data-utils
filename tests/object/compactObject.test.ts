import { describe, it, expect } from "vitest";
import { compactObject } from "@/object/compactObject";

describe("compactObject", () => {
  it("should remove null values", () => {
    const result = compactObject({ first: 1, second: null, third: 2 });
    expect(result).toEqual({ first: 1, third: 2 });
  });

  it("should remove undefined values", () => {
    const result = compactObject({ first: 1, second: undefined, third: 2 });
    expect(result).toEqual({ first: 1, third: 2 });
  });

  it("should handle empty object", () => {
    const result = compactObject({});
    expect(result).toEqual({});
  });

  it("should handle nested objects", () => {
    const result = compactObject({
      user: { name: "Alice", age: null as number | null },
    });
    expect(result.user).toBeDefined();
  });
});
