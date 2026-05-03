import { describe, it, expect } from "vitest";
import { formatHourString } from "@/time/formatHourString";

describe("formatHourString", () => {
  it("should format HH:mm", () => {
    const result = formatHourString("10:30");
    expect(result).toEqual("10:30");
  });

  it("should format with seconds", () => {
    const result = formatHourString("10:30:45", true);
    expect(result).toEqual("10:30:45");
  });

  it("should return undefined for invalid", () => {
    const result = formatHourString("invalid");
    expect(result).toBeUndefined();
  });

  it("should return undefined for empty", () => {
    const result = formatHourString("");
    expect(result).toBeUndefined();
  });

  it("should return undefined for out of range", () => {
    const result = formatHourString("10:60");
    expect(result).toBeUndefined();
  });
});
