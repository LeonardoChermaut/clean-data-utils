import { normalizeWhitespace } from "@/string";
import { describe, expect, it } from "vitest";

describe("normalizeWhitespace", () => {
  it("trims and collapses whitespace", () =>
    expect(normalizeWhitespace("  hello    world  ")).toBe("hello world"));

  it("handles string with no extra whitespace", () =>
    expect(normalizeWhitespace("hello")).toBe("hello"));

  it("handles empty string", () => expect(normalizeWhitespace("")).toBe(""));

  it("handles string with only whitespace", () => expect(normalizeWhitespace("   ")).toBe(""));

  it("handles tabs and newlines", () =>
    expect(normalizeWhitespace("\thello\tworld\n")).toBe("hello world"));

  it("handles multiple spaces between words", () =>
    expect(normalizeWhitespace("hello     world")).toBe("hello world"));
});
