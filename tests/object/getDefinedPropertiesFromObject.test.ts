import { getDefinedPropertiesFromObject } from "@/object";
import { describe, expect, it } from "vitest";

describe("getDefinedPropertiesFromObject", () => {
  it("returns object with only defined properties", () =>
    expect(getDefinedPropertiesFromObject({ first: 1, second: undefined, third: "hello" })).toEqual(
      {
        first: 1,
        third: "hello",
      },
    ));

  it("returns empty object when all properties are undefined", () =>
    expect(getDefinedPropertiesFromObject({ first: undefined, second: undefined })).toEqual({}));

  it("returns same object when no properties are undefined", () => {
    const inputObject = { first: 1, second: "test", third: true };

    expect(getDefinedPropertiesFromObject(inputObject)).toEqual(inputObject);
  });

  it("does not mutate original object", () => {
    const frozenInput = Object.freeze({ first: 1, second: undefined, third: 3 });
    const result = getDefinedPropertiesFromObject(frozenInput);

    expect(result).toEqual({ first: 1, third: 3 });
    expect(frozenInput).toEqual({ first: 1, second: undefined, third: 3 });
  });

  it("handles empty object", () => expect(getDefinedPropertiesFromObject({})).toEqual({}));

  it("preserves property types", () => {
    const inputObject = {
      stringValue: "hello",
      numberValue: 42,
      booleanValue: true,
      objectValue: { nested: true },
    };
    const result = getDefinedPropertiesFromObject(inputObject);

    expect(result.stringValue).toBeTypeOf("string");
    expect(result.numberValue).toBeTypeOf("number");
    expect(result.booleanValue).toBeTypeOf("boolean");
    expect(result.objectValue).toBeTypeOf("object");
  });

  it("works with null values (null is considered defined)", () =>
    expect(getDefinedPropertiesFromObject({ first: null, second: undefined })).toEqual({
      first: null,
    }));
});
