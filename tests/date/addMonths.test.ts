import { addMonths } from "@/date/addMonths";
import { describe, expect, it } from "vitest";

describe("addMonths", () => {
  it("should add positive months", () => {
    const result = addMonths(new Date("2024-01-15"), 2);

    expect(result?.getMonth()).toBe(2);
  });

  it("should subtract negative months", () => {
    const result = addMonths(new Date("2024-03-15"), -1);

    expect(result?.getMonth()).toBe(1);
  });

  it("should handle year boundary", () => {
    const result = addMonths(new Date("2024-12-15"), 1);

    expect(result?.getFullYear()).toBe(2025);
    expect(result?.getMonth()).toBe(0);
  });

  it("should return null for invalid date", () =>
    expect(addMonths(new Date("invalid"), 5)).toBeNull());

  it("should handle large month values", () => {
    const result = addMonths(new Date("2024-01-15"), 13);

    expect(result?.getFullYear()).toBe(2025);
    expect(result?.getMonth()).toBe(1);
  });
});
