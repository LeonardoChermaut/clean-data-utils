import { isValidName } from "@/validation/isValidName";
import { describe, expect, it } from "vitest";

describe("isValidName", () => {
  const validName = "John Doe";
  const shortName = "Li";

  it("should return true for valid names", () => expect(isValidName(validName)).toBe(true));

  it("should return true for names with accented characters", () =>
    expect(isValidName("Maria José")).toBe(true));

  it("should return true for names with hyphens and apostrophes", () => {
    expect(isValidName("Jean-Pierre")).toBe(true);
    expect(isValidName("O'Brien")).toBe(true);
  });

  it("should return true for short names", () => {
    expect(isValidName(shortName)).toBe(true);
    expect(isValidName("Al")).toBe(true);
  });

  it("should return false for empty string", () => expect(isValidName("")).toBe(false));

  it("should return false for whitespace only", () => expect(isValidName("   ")).toBe(false));

  it("should return false for names with numbers", () =>
    expect(isValidName("John123")).toBe(false));

  it("should return false for names with special characters", () =>
    expect(isValidName("@John")).toBe(false));

  it("should return false for names with multiple spaces", () =>
    expect(isValidName("John  Doe")).toBe(false));

  it("should return false for non-string input", () => {
    expect(isValidName(null as unknown as string)).toBe(false);
    expect(isValidName(undefined as unknown as string)).toBe(false);
  });

  it("should not mutate input", () => {
    const input = "  John Doe  ";

    isValidName(input);
    expect(input).toBe("  John Doe  ");
  });
});
