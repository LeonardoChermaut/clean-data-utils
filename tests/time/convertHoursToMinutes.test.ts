import { describe, it, expect } from "vitest";
import { convertHoursToMinutes } from "@/time/convertHoursToMinutes";

describe("convertHoursToMinutes", () => {
  it("should convert hours to minutes", () => {
    const result = convertHoursToMinutes(2);
    expect(result).toEqual(120);
  });

  it("should convert decimal hours", () => {
    const result = convertHoursToMinutes(1.5);
    expect(result).toEqual(90);
  });

  it("should handle zero", () => {
    const result = convertHoursToMinutes(0);
    expect(result).toEqual(0);
  });
});
