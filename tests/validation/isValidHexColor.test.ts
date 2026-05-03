import { describe, it, expect } from "vitest";
import { isValidHexColor } from "@/validation/isValidHexColor";

describe("isValidHexColor", () => {
  it("should validate 6-digit hex", () => {
    const result = isValidHexColor("#FF0000");
    expect(result).toEqual(true);
  });

  it("should validate 3-digit hex", () => {
    const result = isValidHexColor("#F00");
    expect(result).toEqual(true);
  });

  it("should reject invalid characters", () => {
    const result = isValidHexColor("#GGGGGG");
    expect(result).toEqual(false);
  });

  it("should reject without hash", () => {
    const result = isValidHexColor("FF0000");
    expect(result).toEqual(false);
  });

  it("should reject wrong length", () => {
    const result = isValidHexColor("#FFFF");
    expect(result).toEqual(false);
  });
});
