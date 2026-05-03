import { isValidDateString } from "@/validation/isValidDateString";
import { describe, expect, it } from "vitest";

describe("isValidDateString", () => {
  it("should return true for valid ISO date strings", () => {
    expect(isValidDateString("2024-01-15")).toBe(true);
    expect(isValidDateString("2024-12-31")).toBe(true);
    expect(isValidDateString("2000-06-01")).toBe(true);
  });

  it("should return false for invalid ISO date strings", () => {
    expect(isValidDateString("2024-13-01")).toBe(false);
    expect(isValidDateString("2024-02-30")).toBe(false);
    expect(isValidDateString("invalid")).toBe(false);
    expect(isValidDateString("2024/01/15")).toBe(false);
  });

  it("should return true for valid date-time strings", () => {
    expect(isValidDateString("2024-01-15T10:30:00Z", { mode: "date-time" })).toBe(true);
    expect(isValidDateString("2024-01-15T10:30:00.000Z", { mode: "date-time" })).toBe(true);
    expect(isValidDateString("2024-01-15T10:30:00+00:00", { mode: "date-time" })).toBe(true);
  });

  it("should return false for invalid date-time strings", () =>
    expect(isValidDateString("not-a-date", { format: "date-time" })).toBe(false));

  it("should return false for non-string input", () => {
    expect(isValidDateString(null as unknown as string)).toBe(false);
    expect(isValidDateString(undefined as unknown as string)).toBe(false);
    expect(isValidDateString(123 as unknown as string)).toBe(false);
  });

  it("should return false for empty string", () => expect(isValidDateString("")).toBe(false));

  it("should use ISO format by default", () => {
    expect(isValidDateString("2024-01-15")).toBe(true);
    expect(isValidDateString("2024-01-15", "iso")).toBe(true);
  });
});
