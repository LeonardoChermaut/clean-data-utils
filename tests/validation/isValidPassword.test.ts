import { isValidPassword } from "@/validation/isValidPassword";
import { describe, expect, it } from "vitest";

describe("isValidPassword", () => {
  const validPassword = "SecureP@ss1";

  it("should return true for valid passwords", () =>
    expect(isValidPassword(validPassword)).toBe(true));

  it("should return false for short passwords", () => {
    expect(isValidPassword("Pass1!")).toBe(false);
    expect(isValidPassword("Ab1!")).toBe(false);
    expect(isValidPassword("")).toBe(false);
  });

  it("should return false for passwords without uppercase", () =>
    expect(isValidPassword("password1!")).toBe(false));

  it("should return false for passwords without lowercase", () =>
    expect(isValidPassword("PASSWORD1!")).toBe(false));

  it("should return false for passwords without numbers", () =>
    expect(isValidPassword("Password!")).toBe(false));

  it("should return false for passwords without special characters", () =>
    expect(isValidPassword("Password1")).toBe(false));

  it("should return false for non-string input", () => {
    expect(isValidPassword(null as unknown as string)).toBe(false);
    expect(isValidPassword(undefined as unknown as string)).toBe(false);
    expect(isValidPassword(123 as unknown as string)).toBe(false);
  });

  it("should respect custom minLength option", () => {
    expect(isValidPassword("Aa1!", { minLength: 4 })).toBe(true);
    expect(isValidPassword("Aa1!", { minLength: 10 })).toBe(false);
  });

  it("should respect custom options", () => {
    expect(isValidPassword("password", { requireUppercase: false })).toBe(false);
    expect(
      isValidPassword("password", {
        requireUppercase: false,
        requireLowercase: false,
        requireNumber: false,
        requireSpecialChar: false,
      }),
    ).toBe(true);
  });

  it("should not mutate input", () => {
    const input = "SecureP@ss1";

    isValidPassword(input);
    expect(input).toBe("SecureP@ss1");
  });

  it("should handle frozen objects as strings", () => {
    const frozenPassword = Object.freeze({ value: "SecureP@ss1" }) as unknown as string;

    expect(isValidPassword(frozenPassword)).toBe(false);
  });
});
