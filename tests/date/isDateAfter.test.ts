import { describe, it, expect } from "vitest";
import { isDateAfter } from "@/date/isDateAfter";

describe("isDateAfter", () => {
  it("should return true when source is after reference", () => {
    const result = isDateAfter(new Date("2024-01-15"), new Date("2024-01-10"));
    expect(result).toEqual(true);
  });

  it("should return false when source is before reference", () => {
    const result = isDateAfter(new Date("2024-01-10"), new Date("2024-01-15"));
    expect(result).toEqual(false);
  });

  it("should return false for same date", () => {
    const result = isDateAfter(new Date("2024-01-15"), new Date("2024-01-15"));
    expect(result).toEqual(false);
  });
});
