import { kebabToCamelString } from "@/string";
import { describe, expect, it } from "vitest";

describe("kebabToCamelString", () => {
  it("converts kebab-case to camelCase", () => {
    const result = kebabToCamelString("hello-world");

    expect(result).toBe("helloWorld");
  });

  it("converts multi-word kebab-case", () => {
    const result = kebabToCamelString("my-test-string");

    expect(result).toBe("myTestString");
  });

  it("handles single word", () => {
    const result = kebabToCamelString("hello");

    expect(result).toBe("hello");
  });

  it("handles empty string", () => {
    const result = kebabToCamelString("");

    expect(result).toBe("");
  });

  it("handles multiple hyphens", () => {
    const result = kebabToCamelString("a-b-c-d");

    expect(result).toBe("aBCD");
  });

  it("handles single character after hyphen", () => {
    const result = kebabToCamelString("a-b");

    expect(result).toBe("aB");
  });

  it("handles already camelCase", () => {
    const result = kebabToCamelString("helloWorld");

    expect(result).toBe("helloWorld");
  });

  it("handles numbers in string", () => {
    const result = kebabToCamelString("user-2-name");

    expect(result).toBe("user2Name");
  });

  it("handles single character", () => {
    const result = kebabToCamelString("a");

    expect(result).toBe("a");
  });

  it("handles consecutive hyphens", () => {
    const result = kebabToCamelString("a--b");

    expect(result).toBe("aB");
  });

  it("handles hyphen at start", () => {
    const result = kebabToCamelString("-hello");

    expect(result).toBe("hello");
  });
});
