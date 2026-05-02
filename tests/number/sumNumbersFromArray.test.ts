import { sumNumbersFromArray } from "@/number";
import { describe, expect, it } from "vitest";

describe("sumNumbersFromArray", () => {
  it("returns sum of numbers in array", () => {
    const result = sumNumbersFromArray([1, 2, 3, 4, 5]);

    expect(result).toBe(15);
  });

  it("returns 0 for empty array", () => {
    const result = sumNumbersFromArray([]);

    expect(result).toBe(0);
  });

  it("returns single number for single element array", () => {
    const result = sumNumbersFromArray([42]);

    expect(result).toBe(42);
  });

  it("handles negative numbers", () => {
    const result = sumNumbersFromArray([-1, -2, -3]);

    expect(result).toBe(-6);
  });

  it("handles mixed positive and negative numbers", () => {
    const result = sumNumbersFromArray([-5, 10, -3, 8]);

    expect(result).toBe(10);
  });

  it("handles zeros", () => {
    const result = sumNumbersFromArray([0, 0, 0]);

    expect(result).toBe(0);
  });

  it("handles large numbers", () => {
    const result = sumNumbersFromArray([1000000, 2000000, 3000000]);

    expect(result).toBe(6000000);
  });

  it("handles floating point numbers", () => {
    const result = sumNumbersFromArray([0.1, 0.2, 0.3]);

    expect(result).toBeCloseTo(0.6);
  });

  it("handles single negative number", () => {
    const result = sumNumbersFromArray([-5]);

    expect(result).toBe(-5);
  });

  it("does not mutate original array", () => {
    const frozen = Object.freeze([1, 2, 3]);
    const result = sumNumbersFromArray(frozen);

    expect(result).toBe(6);
    expect(frozen).toEqual([1, 2, 3]);
  });
});
