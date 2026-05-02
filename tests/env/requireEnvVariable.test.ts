import { requireEnvVariable } from "@/env/requireEnvVariable";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("requireEnvVariable", () => {
  beforeEach(() => {
    delete process.env.REQUIRED_VAR;
  });

  afterEach(() => {
    delete process.env.REQUIRED_VAR;
  });

  it("should return value when variable is set", () => {
    process.env.REQUIRED_VAR = "test-value";

    expect(requireEnvVariable("REQUIRED_VAR")).toBe("test-value");
  });

  it("should throw error when variable is not set", () =>
    expect(() => requireEnvVariable("NON_EXISTENT")).toThrow(
      "Environment variable NON_EXISTENT is not set",
    ));

  it("should throw error with custom message", () => {
    const customError = () => requireEnvVariable("MISSING_VAR");
    expect(customError).toThrow("Environment variable MISSING_VAR is not set");
  });

  it("should handle empty string value as valid", () => {
    process.env.REQUIRED_VAR = "";
    expect(requireEnvVariable("REQUIRED_VAR")).toBe("");
  });
});
