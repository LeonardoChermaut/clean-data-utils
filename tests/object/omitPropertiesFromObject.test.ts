import { omitPropertiesFromObject } from "@/object";
import { describe, expect, it } from "vitest";

describe("omitPropertiesFromObject", () => {
  it("omits specified properties", () =>
    expect(
      omitPropertiesFromObject(
        { firstProperty: 1, secondProperty: 2, thirdProperty: 3 },
        ["secondProperty"],
      ),
    ).toEqual({
      firstProperty: 1,
      thirdProperty: 3,
    }));

  it("returns empty object when all keys omitted", () =>
    expect(omitPropertiesFromObject({ singleProperty: 1 }, ["singleProperty"])).toEqual({}));

  it("returns same object when no keys match", () =>
    expect(omitPropertiesFromObject({ existingProperty: 1 }, ["missingKey"])).toEqual({ existingProperty: 1 }));

  it("defensive with frozen object", () => {
    const frozenObject = Object.freeze({ frozenProperty: 1, keepProperty: 2 });
    expect(omitPropertiesFromObject(frozenObject, ["keepProperty"])).toEqual({ frozenProperty: 1 });
  });

  it("does not mutate original", () => {
    const originalObject = { originalProperty: 1, keptProperty: 2 };
    omitPropertiesFromObject(originalObject, ["keptProperty"]);
    expect(originalObject).toEqual({ originalProperty: 1, keptProperty: 2 });
  });

  it("handles multiple keys", () =>
    expect(omitPropertiesFromObject({ firstProperty: 1, secondProperty: 2, thirdProperty: 3 }, ["firstProperty", "thirdProperty"])).toEqual({
      secondProperty: 2,
    }));
});