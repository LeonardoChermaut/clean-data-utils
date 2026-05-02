import { camelToSnakeString } from "@/string";
import { describe, expect, it } from "vitest";

describe("camelToSnakeString", () => {
  it("converts camelCase to snake_case", () => {
    const result = camelToSnakeString("helloWorld");

    expect(result).toBe("hello_world");
  });

  it("converts multi-word camelCase", () => {
    const result = camelToSnakeString("myTestString");

    expect(result).toBe("my_test_string");
  });

  it("handles single word", () => {
    const result = camelToSnakeString("hello");

    expect(result).toBe("hello");
  });

  it("handles empty string", () => {
    const result = camelToSnakeString("");

    expect(result).toBe("");
  });

  it("handles uppercase at start", () => {
    const result = camelToSnakeString("HelloWorld");

    expect(result).toBe("hello_world");
  });

  it("handles consecutive uppercase", () => {
    const result = camelToSnakeString("XMLHttpRequest");

    expect(result).toBe("xmlhttp_request");
  });

  it("handles lowercase only", () => {
    const result = camelToSnakeString("hello");

    expect(result).toBe("hello");
  });

  it("handles numbers in string", () => {
    const result = camelToSnakeString("user2Name");

    expect(result).toBe("user_2_name");
  });

  it("handles single character", () => {
    const result = camelToSnakeString("a");

    expect(result).toBe("a");
  });

  it("handles already snake_case", () => {
    const result = camelToSnakeString("hello_world");

    expect(result).toBe("hello_world");
  });

  it("handles string with hyphens", () => {
    const result = camelToSnakeString("hello-world");

    expect(result).toBe("hello_world");
  });
});
