import { describe, it, expect } from "vitest";
import { isValidUuid } from "@/validation/isValidUuid";

describe("isValidUuid", () => {
  it("should validate correct UUID v4", () => {
    const result = isValidUuid("550e8400-e29b-41d4-a716-446655440000");
    expect(result).toEqual(true);
  });

  it("should reject invalid UUID", () => {
    const result = isValidUuid("not-a-uuid");
    expect(result).toEqual(false);
  });

  it("should reject wrong version", () => {
    const result = isValidUuid("550e8400-e29b-11d4-a716-446655440000");
    expect(result).toEqual(false);
  });

  it("should reject empty string", () => {
    const result = isValidUuid("");
    expect(result).toEqual(false);
  });
});
