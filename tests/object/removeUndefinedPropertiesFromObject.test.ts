import { removeUndefinedPropertiesFromObject } from "@/object";
import { describe, expect, it } from "vitest";

describe("removeUndefinedPropertiesFromObject", () => {
  const baseObject = {
    name: "Alice",
    age: undefined,
    active: false,
    score: 0,
    bio: "",
  };

  const allUndefined = { keyA: undefined, keyB: undefined };
  const noUndefined = { name: "Bob", active: true };

  it("removes keys with undefined values", () => {
    expect(removeUndefinedPropertiesFromObject(baseObject)).toEqual({
      name: "Alice",
      active: false,
      score: 0,
      bio: "",
    });
  });

  it("preserves keys with null, 0, false, and empty string values", () => {
    const withNull = { ...baseObject, extra: null };
    const result = removeUndefinedPropertiesFromObject(withNull);

    expect(result).toHaveProperty("extra", null);
    expect(result).toHaveProperty("score", 0);
    expect(result).toHaveProperty("active", false);
    expect(result).toHaveProperty("bio", "");
  });

  it("returns an empty object when all values are undefined", () =>
    expect(removeUndefinedPropertiesFromObject(allUndefined)).toEqual({}));

  it("returns the full object when no undefined values exist", () =>
    expect(removeUndefinedPropertiesFromObject(noUndefined)).toEqual(
      noUndefined,
    ));

  it("does not mutate the original object", () => {
    const frozen = Object.freeze({ ...baseObject });

    removeUndefinedPropertiesFromObject(frozen);
    expect(frozen).toEqual(baseObject);
  });
});
