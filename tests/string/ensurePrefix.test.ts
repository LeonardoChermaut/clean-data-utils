import { ensurePrefix } from "@/string";
import { describe, expect, it } from "vitest";

describe("ensurePrefix", () => {
  it("adds prefix when missing", () => {
    const result = ensurePrefix("hello", "prefix:");

    expect(result).toBe("prefix:hello");
  });

  it("keeps prefix when already present", () => {
    const result = ensurePrefix("prefix:hello", "prefix:");

    expect(result).toBe("prefix:hello");
  });

  it("handles empty string", () => {
    const result = ensurePrefix("", "prefix:");

    expect(result).toBe("prefix:");
  });

  it("handles empty prefix", () => {
    const result = ensurePrefix("hello", "");

    expect(result).toBe("hello");
  });

  it("handles prefix that is substring at start", () => {
    const result = ensurePrefix("hello", "hel");

    expect(result).toBe("hello");
  });

  it("does not add prefix in middle", () => {
    const result = ensurePrefix("hello world", "hello");

    expect(result).toBe("hello world");
  });

  it("handles whitespace prefix", () => {
    const result = ensurePrefix("hello", " ");

    expect(result).toBe(" hello");
  });
});
