import { pickPropertiesFromObject } from "@/object";
import { describe, expect, it } from "vitest";

describe("pickPropertiesFromObject", () => {
  const baseObject = { name: "Alice", age: 30, role: "admin", active: true };

  it("returns only the specified keys", () =>
    expect(pickPropertiesFromObject(baseObject, ["name", "role"])).toEqual({
      name: "Alice",
      role: "admin",
    }));

  it("ignores keys not present in the object", () => {
    const result = pickPropertiesFromObject(baseObject, [
      "name",
      "nonExistentKey" as keyof typeof baseObject,
    ]);

    expect(result).toEqual({ name: "Alice" });
  });

  it("returns an empty object when selectedKeys is empty", () =>
    expect(pickPropertiesFromObject(baseObject, [])).toEqual({}));

  it("returns all properties when all keys are selected", () => {
    const allKeys = Object.keys(baseObject) as (keyof typeof baseObject)[];

    expect(pickPropertiesFromObject(baseObject, allKeys)).toEqual(baseObject);
  });

  it("does not mutate the original object", () => {
    const frozen = Object.freeze({ ...baseObject });
    pickPropertiesFromObject(frozen, ["name"]);
    expect(frozen).toEqual(baseObject);
  });
});
