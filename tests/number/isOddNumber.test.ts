import { describe, it, expect } from "vitest";
import { isOddNumber } from "@/number/isOddNumber";

describe("isOddNumber", () => {
  it("should return true for odd numbers", () => {
    const result = isOddNumber(5);
    expect(result).toEqual(true);
  });

  it("should return false for even numbers", () => {
    const result = isOddNumber(4);
    expect(result).toEqual(false);
  });

  it("should handle negative odd numbers", () => {
    const result = isOddNumber(-3);
    expect(result).toEqual(true);
  });

  it("should handle zero", () => {
    const result = isOddNumber(0);
    expect(result).toEqual(false);
  });

  it("should handle decimal numbers", () => {
    const result = isOddNumber(3.5);
    expect(result).toEqual(true);
  });

  it("should handle negative even numbers", () => {
    const result = isOddNumber(-4);
    expect(result).toEqual(false);
  });
});
