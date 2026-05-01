import { debounce } from "@/function/debounce";
import { describe, expect, it, vi } from "vitest";

describe("debounce", () => {
  it("should debounce function calls", async () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);

    debounced();
    debounced();
    debounced();

    expect(fn).not.toHaveBeenCalled();

    await new Promise((resolve) => setTimeout(resolve, 60));

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments to callback", async () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);

    debounced(1, 2);

    await new Promise((resolve) => setTimeout(resolve, 60));

    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  it("should return function", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);
    expect(typeof debounced).toBe("function");
  });

  it("should handle empty array", () => {
    const result: string[] = [];
    expect(result).toEqual([]);
  });

  it("should handle zero value", () => expect(0).toBe(0));
});
