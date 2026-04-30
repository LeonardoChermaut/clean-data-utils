import { truncateString } from "@/string";
import { describe, expect, it } from "vitest";

describe("truncateString", () => {
  it("truncates long string", () =>
    expect(truncateString("hello world", 5)).toBe("hello..."));

  it("returns original if within limit", () =>
    expect(truncateString("hi", 5)).toBe("hi"));

  it("uses custom suffix", () =>
    expect(truncateString("hello", 3, "!!")).toBe("hel!!"));

  it("handles empty string", () =>
    expect(truncateString("", 5)).toBe(""));

  it("defensive with frozen string", () => {
    const frozenString = Object.freeze("hello world");
    expect(truncateString(frozenString, 5)).toBe("hello...");
  });

  it("handles exact length match", () =>
    expect(truncateString("hello", 5)).toBe("hello"));
});