import { timeout } from "@/async/timeout";
import { describe, expect, it } from "vitest";

describe("timeout", () => {
  it("should resolve after specified milliseconds", async () => {
    const start = Date.now();
    await timeout(100);
    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(90);
  });

  it("should resolve immediately for zero timeout", async () => await timeout(0));

  it("should resolve immediately for negative timeout", async () => await timeout(-100));

  it("should resolve with reasonable delay", async () => {
    const start = Date.now();
    await timeout(50);
    const elapsed = Date.now() - start;

    expect(elapsed).toBeGreaterThanOrEqual(40);
  });
});
