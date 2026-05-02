import { isValidEmail } from "@/validation/isValidEmail";
import { describe, expect, it } from "vitest";

describe("isValidEmail", () => {
  it("should return true for valid email", () => {
    expect(isValidEmail("user@example.com")).toBe(true);
    expect(isValidEmail("test.email@domain.org")).toBe(true);
    expect(isValidEmail("user+tag@example.com")).toBe(true);
  });

  it("should return false for invalid email", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
    expect(isValidEmail("@example.com")).toBe(false);
    expect(isValidEmail("user@")).toBe(false);
    expect(isValidEmail("user@.com")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });

  it("should return false for non-string input", () => {
    expect(isValidEmail(null as unknown as string)).toBe(false);
    expect(isValidEmail(undefined as unknown as string)).toBe(false);
  });

  it("should handle domain with subdomain", () =>
    expect(isValidEmail("user@sub.example.com")).toBe(true));
});
