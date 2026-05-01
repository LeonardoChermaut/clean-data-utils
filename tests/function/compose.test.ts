import { describe, it, expect } from "vitest";
import { compose } from "@/function/compose";

describe("compose", () => {
  it("should compose single function", () => {
    const fn = compose((value: number) => value + 1);
    const result = fn(5);
    expect(result).toBe(6);
  });

  it("should compose multiple functions", () => {
    const fn = compose(
      (value: number) => value + 1,
      (value: number) => value * 2,
    );
    const result = fn(3);
    expect(result).toBe(8);
  });

  it("should apply functions from right to left", () => {
    const fn = compose(
      (input: string) => input.toUpperCase(),
      (input: string) => input.trim(),
    );
    const result = fn("  hello  ");
    expect(result).toBe("HELLO");
  });

  it("should handle string transformation", () => {
    const fn = compose((input: string) => input + "b");
    const result = fn("a");
    expect(result).toBe("ab");
  });

  it("should handle empty array", () => {
    const result: string[] = [];
    expect(result).toEqual([]);
  });
});
