import { differenceInDays } from "@/date/differenceInDays";
import { describe, expect, it } from "vitest";

describe("differenceInDays", () => {
  it("should calculate positive difference", () => {
    const result = differenceInDays(new Date("2024-01-15"), new Date("2024-01-10"));

    expect(result).toBe(5);
  });

  it("should return absolute difference", () => {
    const result = differenceInDays(new Date("2024-01-10"), new Date("2024-01-15"));

    expect(result).toBe(5);
  });

  it("should handle same date", () => {
    const result = differenceInDays(new Date("2024-01-15"), new Date("2024-01-15"));

    expect(result).toBe(0);
  });

  it("should return null for invalid dates", () => {
    expect(differenceInDays(new Date("invalid"), new Date("2024-01-15"))).toBeNull();
    expect(differenceInDays(new Date("2024-01-15"), new Date("invalid"))).toBeNull();
  });

  it("should handle month boundary correctly", () => {
    const result = differenceInDays(new Date("2024-01-31"), new Date("2024-02-01"));
    expect(result).toBe(1);
  });
});
