import { randomNumberBetween } from "@/number";
import { describe, expect, it } from "vitest";

describe("randomNumberBetween", () => {
  it("returns number within range", () => {
    for (let index = 0; index < 100; index += 1) {
      const result = randomNumberBetween(1, 10);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it("returns minimum when range is single number", () => {
    const result = randomNumberBetween(5, 5);

    expect(result).toBe(5);
  });

  it("handles negative range", () => {
    for (let index = 0; index < 100; index += 1) {
      const result = randomNumberBetween(-10, -1);

      expect(result).toBeGreaterThanOrEqual(-10);
      expect(result).toBeLessThanOrEqual(-1);
    }
  });

  it("handles zero as range", () => {
    const result = randomNumberBetween(0, 0);

    expect(result).toBe(0);
  });

  it("returns integer values", () => {
    for (let index = 0; index < 100; index += 1) {
      const result = randomNumberBetween(1, 10);

      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("handles reversed range by swapping", () => {
    for (let index = 0; index < 100; index += 1) {
      const result = randomNumberBetween(10, 1);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it("handles large range", () => {
    for (let index = 0; index < 100; index += 1) {
      const result = randomNumberBetween(1, 1000000);

      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(1000000);
    }
  });

  it("returns number when min is greater than max", () => {
    const result = randomNumberBetween(100, 50);

    expect(result).toBeGreaterThanOrEqual(50);
    expect(result).toBeLessThanOrEqual(100);
  });
});
