import { parseDate } from "@/date/parseDate";
import { describe, expect, it } from "vitest";

describe("parseDate", () => {
  it("should parse valid date string", () => {
    const result = parseDate("2024-01-15");

    expect(result).toBeInstanceOf(Date);
    expect(result?.getUTCFullYear()).toBe(2024);
    expect(result?.getUTCMonth()).toBe(0);
    expect(result?.getUTCDate()).toBe(15);
  });

  it("should parse valid Date object", () => {
    const input = new Date("2024-01-15");
    const result = parseDate(input);

    expect(result).toEqual(input);
  });

  it("should parse valid timestamp", () => {
    const result = parseDate(1704067200000);

    expect(result).toBeInstanceOf(Date);
  });

  it("should return null for invalid string", () => {
    expect(parseDate("invalid")).toBeNull();
    expect(parseDate("")).toBeNull();
  });

  it("should return null for invalid Date object", () => {
    expect(parseDate(new Date("invalid"))).toBeNull();
  });

  it("should return null for invalid input", () => {
    expect(parseDate(null as unknown as string)).toBeNull();
    expect(parseDate(undefined as unknown as string)).toBeNull();
  });
});
