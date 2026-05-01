import { describe, it, expect } from "vitest";
import { clampNumber } from "@/number/clampNumber";

describe("clampNumber", () => {
  it("should return value when within range", () => {
    const result = clampNumber(5, 0, 10);
    expect(result).toBe(5);
  });

  it("should return minimum when below range", () => {
    const result = clampNumber(-5, 0, 10);
    expect(result).toBe(0);
  });

  it("should return maximum when above range", () => {
    const result = clampNumber(15, 0, 10);
    expect(result).toBe(10);
  });

  it("should handle exact minimum", () => {
    const result = clampNumber(0, 0, 10);
    expect(result).toBe(0);
  });

  it("should handle exact maximum", () => {
    const result = clampNumber(10, 0, 10);
    expect(result).toBe(10);
  });
});
