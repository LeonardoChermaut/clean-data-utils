import { describe, it, expect } from "vitest";
import { sumHoursFromArray } from "@/time/sumHoursFromArray";

describe("sumHoursFromArray", () => {
  it("should sum hour strings", () => {
    const result = sumHoursFromArray(["10:30", "05:45", "02:15"]);
    expect(result).toEqual("18:30");
  });

  it("should include seconds", () => {
    const result = sumHoursFromArray(["10:30"], true);
    expect(result).toEqual("10:30:00");
  });

  it("should ignore invalid entries", () => {
    const result = sumHoursFromArray(["10:30", "invalid", "02:15"]);
    expect(result).toEqual("12:45");
  });

  it("should handle large totals", () => {
    const result = sumHoursFromArray(["100:00", "50:00"]);
    expect(result).toEqual("150:00");
  });

  it("should handle empty array", () => {
    const result = sumHoursFromArray([]);
    expect(result).toEqual("00:00");
  });
});
