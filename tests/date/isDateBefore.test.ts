import { describe, it, expect } from "vitest";
import { isDateBefore } from "@/date/isDateBefore";

describe("isDateBefore", () => {
  it("should return true when source is before reference", () => {
    const result = isDateBefore(new Date("2024-01-10"), new Date("2024-01-15"));
    expect(result).toEqual(true);
  });

  it("should return false when source is after reference", () => {
    const result = isDateBefore(new Date("2024-01-15"), new Date("2024-01-10"));
    expect(result).toEqual(false);
  });

  it("should return false for same date", () => {
    const result = isDateBefore(new Date("2024-01-15"), new Date("2024-01-15"));
    expect(result).toEqual(false);
  });
});
