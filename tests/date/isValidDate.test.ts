import { isValidDate } from "@/date/isValidDate";
import { describe, expect, it } from "vitest";

describe("isValidDate", () => {
  it("should return true for valid Date object", () => {
    expect(isValidDate(new Date("2024-01-01"))).toBe(true);
    expect(isValidDate(new Date())).toBe(true);
  });

  it("should return false for invalid Date object", () =>
    expect(isValidDate(new Date("invalid"))).toBe(false));

  it("should return true for valid date string", () => {
    expect(isValidDate("2024-01-01")).toBe(true);
    expect(isValidDate("2024-12-25T10:00:00Z")).toBe(true);
  });

  it("should return false for invalid date string", () =>
    expect(isValidDate("invalid-date")).toBe(false));

  it("should return true for valid timestamp", () => expect(isValidDate(1704067200000)).toBe(true));

  it("should return false for invalid input", () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate([])).toBe(false);
    expect(isValidDate(true)).toBe(false);
    expect(isValidDate("")).toBe(false);
  });
});
