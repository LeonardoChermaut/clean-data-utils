import { describe, it, expect } from "vitest";
import { startOfDay } from "@/date/startOfDay";

describe("startOfDay", () => {
  it("should set time to midnight", () => {
    const result = startOfDay(new Date(2024, 0, 15, 10, 30, 0));
    expect(result.getHours()).toEqual(0);
    expect(result.getMinutes()).toEqual(0);
    expect(result.getSeconds()).toEqual(0);
    expect(result.getMilliseconds()).toEqual(0);
  });

  it("should preserve the date", () => {
    const result = startOfDay(new Date(2024, 0, 15, 10, 30, 0));
    expect(result.getDate()).toEqual(15);
  });

  it("should return new date instance", () => {
    const original = new Date(2024, 0, 15, 10, 30, 0);
    const result = startOfDay(original);
    expect(result).not.toBe(original);
  });
});
