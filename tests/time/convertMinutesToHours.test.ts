import { describe, it, expect } from "vitest";
import { convertMinutesToHours } from "@/time/convertMinutesToHours";

describe("convertMinutesToHours", () => {
  it("should convert minutes to hours", () => {
    const result = convertMinutesToHours(120);
    expect(result).toEqual(2);
  });

  it("should convert decimal minutes", () => {
    const result = convertMinutesToHours(90);
    expect(result).toEqual(1.5);
  });

  it("should handle zero", () => {
    const result = convertMinutesToHours(0);
    expect(result).toEqual(0);
  });
});
