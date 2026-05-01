import { describe, it, expect } from "vitest";
import { slugifyString } from "@/string/slugifyString";

describe("slugifyString", () => {
  it("should convert to lowercase slug", () => {
    const result = slugifyString("Hello World");
    expect(result).toBe("hello-world");
  });

  it("should use custom separator", () => {
    const result = slugifyString("Hello World", "_");
    expect(result).toBe("hello_world");
  });

  it("should remove special characters", () => {
    const result = slugifyString("Hello @World!");
    expect(result).toBe("hello-world");
  });

  it("should handle empty string", () => {
    const result = slugifyString("");
    expect(result).toBe("");
  });

  it("should collapse multiple spaces", () => {
    const result = slugifyString("hello   world");
    expect(result).toBe("hello-world");
  });
});
