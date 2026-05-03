import { describe, it, expect } from "vitest";
import { reverseString } from "@/string/reverseString";

describe("reverseString", () => {
  it("should reverse a simple string", () => {
    const result = reverseString("hello");
    expect(result).toEqual("olleh");
  });

  it("should handle unicode characters", () => {
    const result = reverseString("ćóẃ");
    expect(result).toEqual("ẃóć");
  });

  it("should handle empty string", () => {
    const result = reverseString("");
    expect(result).toEqual("");
  });

  it("should handle single character", () => {
    const result = reverseString("a");
    expect(result).toEqual("a");
  });

  it("should handle emoji simple", () => {
    const result = reverseString("👨‍👩");
    expect(result).toEqual("👩‍👨");
  });

  it("should handle mixed content", () => {
    const result = reverseString("abc123");
    expect(result).toEqual("321cba");
  });
});
