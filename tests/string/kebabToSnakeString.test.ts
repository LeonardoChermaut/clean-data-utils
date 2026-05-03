import { describe, it, expect } from "vitest";
import { kebabToSnakeString } from "@/string/kebabToSnakeString";

describe("kebabToSnakeString", () => {
  it("should convert to snake_case", () => {
    const result = kebabToSnakeString("hello-world");
    expect(result).toEqual("hello_world");
  });

  it("should handle single word", () => {
    const result = kebabToSnakeString("hello");
    expect(result).toEqual("hello");
  });

  it("should handle multiple dashes", () => {
    const result = kebabToSnakeString("hello-world-test");
    expect(result).toEqual("hello_world_test");
  });

  it("should handle empty string", () => {
    const result = kebabToSnakeString("");
    expect(result).toEqual("");
  });

  it("should lowercase everything", () => {
    const result = kebabToSnakeString("Hello-World");
    expect(result).toEqual("hello_world");
  });
});
