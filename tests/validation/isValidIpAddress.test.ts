import { describe, it, expect } from "vitest";
import { isValidIpAddress } from "@/validation/isValidIpAddress";

describe("isValidIpAddress", () => {
  it("should validate IPv4", () => {
    const result = isValidIpAddress("192.168.1.1");
    expect(result).toEqual(true);
  });

  it("should validate IPv6", () => {
    const result = isValidIpAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334", "v6");
    expect(result).toEqual(true);
  });

  it("should reject invalid IP", () => {
    const result = isValidIpAddress("not-an-ip");
    expect(result).toEqual(false);
  });

  it("should validate any version", () => {
    const result = isValidIpAddress("192.168.1.1", "any");
    expect(result).toEqual(true);
  });
});
