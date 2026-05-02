import { isValidUrl } from "@/validation/isValidUrl";
import { describe, expect, it } from "vitest";

describe("isValidUrl", () => {
  it("should return true for valid URL", () => {
    expect(isValidUrl("https://example.com")).toBe(true);
    expect(isValidUrl("http://example.com")).toBe(true);
    expect(isValidUrl("https://example.com/path")).toBe(true);
    expect(isValidUrl("https://example.com/path?query=1")).toBe(true);
    expect(isValidUrl("ftp://files.example.com")).toBe(true);
  });

  it("should return false for invalid URL", () => {
    expect(isValidUrl("not-a-url")).toBe(false);
    expect(isValidUrl("httpexample.com")).toBe(false);
    expect(isValidUrl("")).toBe(false);
  });

  it("should return false for non-string input", () => {
    expect(isValidUrl(null as unknown as string)).toBe(false);
    expect(isValidUrl(undefined as unknown as string)).toBe(false);
  });

  it("should handle URL with port", () => {
    expect(isValidUrl("https://example.com:8080")).toBe(true);
    expect(isValidUrl("http://localhost:3000")).toBe(true);
  });

  it("should handle URL with fragment", () =>
    expect(isValidUrl("https://example.com/path#section")).toBe(true));
});
