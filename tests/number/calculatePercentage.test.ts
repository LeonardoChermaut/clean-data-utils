import { describe, it, expect } from "vitest";
import { calculatePercentage } from "@/number/calculatePercentage";

describe("calculatePercentage", () => {
  it("should calculate percentage correctly", () => {
    const result = calculatePercentage(25, 100);
    expect(result).toEqual(25);
  });

  it("should return 0 when total is 0", () => {
    const result = calculatePercentage(10, 0);
    expect(result).toEqual(0);
  });

  it("should handle decimal results", () => {
    const result = calculatePercentage(1, 3);
    expect(result).toBeCloseTo(33.33, 1);
  });

  it("should handle 100 percent", () => {
    const result = calculatePercentage(50, 50);
    expect(result).toEqual(100);
  });

  it("should handle values greater than total", () => {
    const result = calculatePercentage(150, 100);
    expect(result).toEqual(150);
  });
});
