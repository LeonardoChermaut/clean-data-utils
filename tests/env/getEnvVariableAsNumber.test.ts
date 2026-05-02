import { getEnvVariableAsNumber } from "@/env/getEnvVariableAsNumber";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("getEnvVariableAsNumber", () => {
  beforeEach(() => {
    delete process.env.NUM_VAR;
    delete process.env.INVALID_VAR;
  });

  afterEach(() => {
    delete process.env.NUM_VAR;
    delete process.env.INVALID_VAR;
  });

  it("should return number when variable is valid", () => {
    process.env.NUM_VAR = "42";

    expect(getEnvVariableAsNumber("NUM_VAR")).toBe(42);
  });

  it("should return undefined for non-numeric value", () => {
    process.env.INVALID_VAR = "abc";

    expect(getEnvVariableAsNumber("INVALID_VAR")).toBeUndefined();
  });

  it("should return undefined when variable is not set", () =>
    expect(getEnvVariableAsNumber("NON_EXISTENT")).toBeUndefined());

  it("should handle decimal numbers", () => {
    process.env.NUM_VAR = "3.14";
    expect(getEnvVariableAsNumber("NUM_VAR")).toBe(3.14);
  });

  it("should handle leading zeros", () => {
    process.env.NUM_VAR = "007";
    expect(getEnvVariableAsNumber("NUM_VAR")).toBe(7);
  });
});
