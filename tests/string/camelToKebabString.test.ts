import { camelToKebabString } from "@/string";
import { describe, expect, it } from "vitest";

describe("camelToKebabString", () => {
  it("converts camelCase to kebab-case", () => {
    const result = camelToKebabString("helloWorld");

    expect(result).toBe("hello-world");
  });

  it("converts multi-word camelCase", () => {
    const result = camelToKebabString("myTestString");

    expect(result).toBe("my-test-string");
  });

  it("handles single word", () => {
    const result = camelToKebabString("hello");

    expect(result).toBe("hello");
  });

  it("handles empty string", () => {
    const result = camelToKebabString("");

    expect(result).toBe("");
  });

  it("handles uppercase at start", () => {
    const result = camelToKebabString("HelloWorld");

    expect(result).toBe("hello-world");
  });

  it("handles consecutive uppercase", () => {
    const result = camelToKebabString("XMLHttpRequest");

    expect(result).toBe("xmlhttp-request");
  });

  it("handles lowercase only", () => {
    const result = camelToKebabString("hello");

    expect(result).toBe("hello");
  });

  it("handles numbers in string", () => {
    const result = camelToKebabString("user2Name");

    expect(result).toBe("user-2-name");
  });

  it("handles single character", () => {
    const result = camelToKebabString("a");

    expect(result).toBe("a");
  });

  it("handles already kebab-case", () => {
    const result = camelToKebabString("hello-world");

    expect(result).toBe("hello-world");
  });

  it("handles string with underscores", () => {
    const result = camelToKebabString("hello_world");

    expect(result).toBe("hello-world");
  });
});
