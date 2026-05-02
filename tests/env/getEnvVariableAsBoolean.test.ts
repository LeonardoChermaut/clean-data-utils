import { getEnvVariableAsBoolean } from "@/env/getEnvVariableAsBoolean";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("getEnvVariableAsBoolean", () => {
  beforeEach(() => {
    delete process.env.BOOL_VAR;
    delete process.env.INVALID_VAR;
  });

  afterEach(() => {
    delete process.env.BOOL_VAR;
    delete process.env.INVALID_VAR;
  });

  it("should return true for 'true'", () => {
    process.env.BOOL_VAR = "true";

    expect(getEnvVariableAsBoolean("BOOL_VAR")).toBe(true);
  });

  it("should return true for '1'", () => {
    process.env.BOOL_VAR = "1";

    expect(getEnvVariableAsBoolean("BOOL_VAR")).toBe(true);
  });

  it("should return false for 'false'", () => {
    process.env.BOOL_VAR = "false";

    expect(getEnvVariableAsBoolean("BOOL_VAR")).toBe(false);
  });

  it("should return false for '0'", () => {
    process.env.BOOL_VAR = "0";

    expect(getEnvVariableAsBoolean("BOOL_VAR")).toBe(false);
  });

  it("should return undefined for invalid value", () => {
    process.env.INVALID_VAR = "invalid";

    expect(getEnvVariableAsBoolean("INVALID_VAR")).toBeUndefined();
  });

  it("should return undefined when variable is not set", () =>
    expect(getEnvVariableAsBoolean("NON_EXISTENT")).toBeUndefined());
});
