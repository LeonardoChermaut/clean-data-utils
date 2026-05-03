import { describe, it, expect } from "vitest";
import { snakeToCamelString } from "@/string/snakeToCamelString";

describe("snakeToCamelString", () => {
  it("should convert to camelCase", () => {
    const result = snakeToCamelString("hello_world");
    expect(result).toEqual("helloWorld");
  });

  it("should handle single word", () => {
    const result = snakeToCamelString("hello");
    expect(result).toEqual("hello");
  });

  it("should handle multiple underscores", () => {
    const result = snakeToCamelString("hello_world_test");
    expect(result).toEqual("helloWorldTest");
  });

  it("should handle empty string", () => {
    const result = snakeToCamelString("");
    expect(result).toEqual("");
  });

  it("should lowercase first char", () => {
    const result = snakeToCamelString("User_id");
    expect(result).toEqual("userId");
  });
});
