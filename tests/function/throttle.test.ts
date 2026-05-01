import { throttle } from "@/function/throttle";
import { describe, expect, it, vi } from "vitest";

describe("throttle", () => {
  it("should throttle function calls", async () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 50);

    throttled();
    throttled();
    throttled();

    expect(fn).toHaveBeenCalledTimes(1);

    await new Promise((resolve) => setTimeout(resolve, 60));

    throttled();

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("should pass arguments to callback", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 50);

    throttled(1, 2);

    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  it("should return function", () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 50);
    expect(typeof throttled).toBe("function");
  });
});
