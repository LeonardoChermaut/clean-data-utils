import { isNumericString } from "@/string";
import { describe, expect, it } from "vitest";

describe("isNumericString", () => {
  it("returns true for numeric string", () => {
    const result = isNumericString("12345");

    expect(result).toBe(true);
  });

  it("returns false for empty string", () => {
    const result = isNumericString("");

    expect(result).toBe(false);
  });

  it("returns false for string with letters", () => {
    const result = isNumericString("123abc");

    expect(result).toBe(false);
  });

  it("returns false for string with spaces", () => {
    const result = isNumericString("123 456");

    expect(result).toBe(false);
  });

  it("returns false for string with special characters", () => {
    const result = isNumericString("123.45");

    expect(result).toBe(false);
  });

  it("returns true for single digit", () => {
    const result = isNumericString("5");

    expect(result).toBe(true);
  });

  it("returns false for negative numbers as string", () => {
    const result = isNumericString("-123");

    expect(result).toBe(false);
  });

  it("returns false for decimal numbers as string", () => {
    const result = isNumericString("12.34");

    expect(result).toBe(false);
  });

  it("returns true for large numbers", () => {
    const result = isNumericString("12345678901234567890");

    expect(result).toBe(true);
  });

  it("returns false for whitespace only", () => {
    const result = isNumericString("   ");

    expect(result).toBe(false);
  });

  it("returns false for alphanumeric", () => {
    const result = isNumericString("abc123");

    expect(result).toBe(false);
  });
});
