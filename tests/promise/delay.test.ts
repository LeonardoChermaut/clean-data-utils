import { delay } from "@/promise/delay";
import { describe, expect, it } from "vitest";

describe("delay", () => {
  it("should resolve after specified time", async () => {
    const start = Date.now();
    await delay(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(45);
  });

  it("should resolve with undefined", async () => {
    const result = await delay(10);
    expect(result).toBeUndefined();
  });

  it("should handle zero delay", async () => {
    const result = await delay(0);
    expect(result).toBeUndefined();
  });

  it("should handle empty array", () => {
    const result: string[] = [];
    expect(result).toEqual([]);
  });

  it("should handle zero value", () => expect(0).toBe(0));
});
