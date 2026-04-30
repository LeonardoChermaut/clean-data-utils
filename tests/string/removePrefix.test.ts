import { removePrefix } from "@/string";
import { describe, expect, it } from "vitest";

describe("removePrefix", () => {
  it("removes prefix when present", () => {
    const result = removePrefix("prefix:hello", "prefix:");

    expect(result).toBe("hello");
  });

  it("keeps string when prefix not present", () => {
    const result = removePrefix("hello", "prefix:");

    expect(result).toBe("hello");
  });

  it("handles empty string", () => {
    const result = removePrefix("", "prefix:");

    expect(result).toBe("");
  });

  it("handles empty prefix", () => {
    const result = removePrefix("hello", "");

    expect(result).toBe("hello");
  });

  it("handles prefix same as string", () => {
    const result = removePrefix("prefix:", "prefix:");

    expect(result).toBe("");
  });

  it("does not remove prefix in middle", () => {
    const result = removePrefix("hello world", "world");

    expect(result).toBe("hello world");
  });

  it("handles whitespace prefix", () => {
    const result = removePrefix(" hello", " ");

    expect(result).toBe("hello");
  });

  it("handles partial prefix match at start", () => {
    const result = removePrefix("prefixtest", "prefix");

    expect(result).toBe("test");
  });
});
