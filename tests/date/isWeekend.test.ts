import { describe, it, expect } from "vitest";
import { isWeekend } from "@/date/isWeekend";

describe("isWeekend", () => {
  it("should detect Saturday", () => {
    const saturday = new Date(2024, 0, 13);
    expect(isWeekend(saturday)).toEqual(true);
  });

  it("should detect Sunday", () => {
    const sunday = new Date(2024, 0, 14);
    expect(isWeekend(sunday)).toEqual(true);
  });

  it("should return false for weekday", () => {
    const wednesday = new Date(2024, 0, 10);
    expect(isWeekend(wednesday)).toEqual(false);
  });
});
