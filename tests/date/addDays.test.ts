import { addDays } from "@/date/addDays";
import { describe, expect, it } from "vitest";

describe("addDays", () => {
  it("should add positive days", () => {
    const result = addDays(new Date("2024-01-10T12:00:00Z"), 5);

    expect(result?.getUTCDate()).toBe(15);
  });

  it("should subtract negative days", () => {
    const result = addDays(new Date("2024-01-10T12:00:00Z"), -3);

    expect(result?.getUTCDate()).toBe(7);
  });

  it("should handle year boundary", () => {
    const result = addDays(new Date("2024-12-31T12:00:00Z"), 1);

    expect(result?.getUTCFullYear()).toBe(2025);
    expect(result?.getUTCMonth()).toBe(0);
    expect(result?.getUTCDate()).toBe(1);
  });

  it("should return null for invalid date", () =>
    expect(addDays(new Date("invalid"), 5)).toBeNull());

  it("should handle large day values", () => {
    const result = addDays(new Date("2024-01-01T12:00:00Z"), 365);

    expect(result?.getUTCFullYear()).toBe(2024);
  });
});
