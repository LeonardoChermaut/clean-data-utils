import { formatDate } from "@/date/formatDate";
import { describe, expect, it } from "vitest";

describe("formatDate", () => {
  it("should format valid date to ISO string", () => {
    const result = formatDate(new Date("2024-01-15T10:30:00Z"));

    expect(result).toBe("2024-01-15");
  });

  it("should format date with leading zeros", () => {
    const result = formatDate(new Date("2024-12-05T12:00:00Z"));

    expect(result).toBe("2024-12-05");
  });

  it("should return empty string for invalid date", () => {
    expect(formatDate(new Date("invalid"))).toBe("");
    expect(formatDate(null as unknown as Date)).toBe("");
  });

  it("should handle year boundary dates", () => {
    const january = new Date(Date.UTC(2024, 0, 1, 12, 0, 0));
    const december = new Date(Date.UTC(2024, 11, 31, 23, 59, 59));

    expect(formatDate(january)).toBe("2024-01-01");
    expect(formatDate(december)).toBe("2024-12-31");
  });

  it("should handle leap year date", () => {
    const leapDay = new Date(Date.UTC(2024, 1, 29, 12, 0, 0));
    expect(formatDate(leapDay)).toBe("2024-02-29");
  });
});
