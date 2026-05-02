import { getEnvVariable } from "@/env/getEnvVariable";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("getEnvVariable", () => {
  beforeEach(() => {
    delete process.env.TEST_VAR;
  });

  afterEach(() => {
    delete process.env.TEST_VAR;
  });

  it("should return value when variable is set", () => {
    process.env.TEST_VAR = "test-value";

    expect(getEnvVariable("TEST_VAR")).toBe("test-value");
  });

  it("should return undefined when variable is not set", () =>
    expect(getEnvVariable("NON_EXISTENT")).toBeUndefined());

  it("should return undefined for empty name", () => expect(getEnvVariable("")).toBeUndefined());

  it("should return undefined for whitespace name", () => {
    expect(getEnvVariable("   ")).toBeUndefined();
  });
  it("should handle special characters in value", () => {
    process.env.TEST_VAR = "value with spaces !@#$%";
    expect(getEnvVariable("TEST_VAR")).toBe("value with spaces !@#$%");
  });
});
