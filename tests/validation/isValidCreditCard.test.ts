import { describe, it, expect } from "vitest";
import { isValidCreditCard } from "@/validation/isValidCreditCard";

describe("isValidCreditCard", () => {
  it("should validate correct Visa card", () => {
    const result = isValidCreditCard("4532015112830366");
    expect(result).toEqual(true);
  });

  it("should validate correct Mastercard", () => {
    const result = isValidCreditCard("5425233430109903");
    expect(result).toEqual(true);
  });

  it("should reject invalid card number", () => {
    const result = isValidCreditCard("1234567890123456");
    expect(result).toEqual(false);
  });

  it("should handle card with spaces", () => {
    const result = isValidCreditCard("4532 0151 1283 0366");
    expect(result).toEqual(true);
  });

  it("should reject too short", () => {
    const result = isValidCreditCard("123");
    expect(result).toEqual(false);
  });
});
