import { describe, it, expect } from "vitest";
import { maskString } from "@/string/maskString";

describe("maskString", () => {
  it("should mask middle portion", () => {
    const result = maskString("1234567890123", 4);
    expect(result.length).toEqual(13);
  });

  it("should not mask short strings", () => {
    const result = maskString("123", 4);
    expect(result).toEqual("123");
  });

  it("should use custom mask character", () => {
    const result = maskString("secretkey", 2, "X");
    expect(result).toEqual("seXXXXXey");
  });

  it("should handle empty string", () => {
    const result = maskString("", 2);
    expect(result).toEqual("");
  });
});
