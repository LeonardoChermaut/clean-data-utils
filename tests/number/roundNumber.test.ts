import { describe, it, expect } from "vitest";
import { roundNumber } from "@/number/roundNumber";

describe("roundNumber", () => {
  it("should round to specified decimal places", () => {
    const result = roundNumber(3.14159, 2);
    expect(result).toBe(3.14);
  });

  it("should round to zero decimal places", () => {
    const result = roundNumber(2.5, 0);
    expect(result).toBe(3);
  });

  it("should not round when already at precision", () => {
    const result = roundNumber(3.14, 2);
    expect(result).toBe(3.14);
  });

  it("should handle negative numbers", () => {
    const result = roundNumber(-2.567, 2);
    expect(result).toBe(-2.57);
  });

  it("should handle zero decimal places", () => {
    const result = roundNumber(99.9, 0);
    expect(result).toBe(100);
  });
});
