import { describe, it, expect } from "vitest";
import { isSameDay } from "@/date/isSameDay";

describe("isSameDay", () => {
  it("should return true for same day", () => {
    const result = isSameDay(new Date("2024-01-15T10:00:00Z"), new Date("2024-01-15T22:00:00Z"));
    expect(result).toEqual(true);
  });

  it("should return false for different days", () => {
    const result = isSameDay(new Date("2024-01-15"), new Date("2024-01-16"));
    expect(result).toEqual(false);
  });

  it("should handle different months", () => {
    const result = isSameDay(new Date("2024-01-15"), new Date("2024-02-15"));
    expect(result).toEqual(false);
  });

  it("should handle different years", () => {
    const result = isSameDay(new Date("2024-01-15"), new Date("2025-01-15"));
    expect(result).toEqual(false);
  });
});
