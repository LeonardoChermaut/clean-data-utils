import { describe, it, expect } from "vitest";
import { padString } from "@/string/padString";

describe("padString", () => {
  it("should pad to the right by default", () => {
    const result = padString("hello", 10);
    expect(result).toEqual("hello     ");
  });

  it("should pad with custom character", () => {
    const result = padString("42", 5, "0");
    expect(result).toEqual("42000");
  });

  it("should handle string longer than target", () => {
    const result = padString("hello", 3);
    expect(result).toEqual("hello");
  });

  it("should handle exact length match", () => {
    const result = padString("hello", 5);
    expect(result).toEqual("hello");
  });

  it("should handle empty string", () => {
    const result = padString("", 5, "0");
    expect(result).toEqual("00000");
  });

  it("should handle zero target length", () => {
    const result = padString("hello", 0);
    expect(result).toEqual("hello");
  });
});
