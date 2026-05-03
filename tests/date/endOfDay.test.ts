import { describe, it, expect } from "vitest";
import { endOfDay } from "@/date/endOfDay";

describe("endOfDay", () => {
  it("should set time to 23:59:59.999", () => {
    const result = endOfDay(new Date(2024, 0, 15, 10, 30, 0));
    expect(result.getHours()).toEqual(23);
    expect(result.getMinutes()).toEqual(59);
    expect(result.getSeconds()).toEqual(59);
    expect(result.getMilliseconds()).toEqual(999);
  });

  it("should preserve the date", () => {
    const result = endOfDay(new Date(2024, 0, 15, 10, 30, 0));
    expect(result.getDate()).toEqual(15);
  });

  it("should return new date instance", () => {
    const original = new Date(2024, 0, 15, 10, 30, 0);
    const result = endOfDay(original);
    expect(result).not.toBe(original);
  });
});
