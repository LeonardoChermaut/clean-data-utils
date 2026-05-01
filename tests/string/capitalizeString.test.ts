import { describe, it, expect } from "vitest";
import { capitalizeString } from "@/string/capitalizeString";

describe("capitalizeString", () => {
  it("should capitalize lowercase string", () => {
    const result = capitalizeString("hello");
    expect(result).toBe("Hello");
  });

  it("should handle already capitalized string", () => {
    const result = capitalizeString("Hello");
    expect(result).toBe("Hello");
  });

  it("should handle empty string", () => {
    const result = capitalizeString("");
    expect(result).toBe("");
  });

  it("should handle single character", () => {
    const result = capitalizeString("a");
    expect(result).toBe("A");
  });

  it("should handle uppercase input", () => {
    const result = capitalizeString("WORLD");
    expect(result).toBe("WORLD");
  });
});
