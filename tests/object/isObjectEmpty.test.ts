import { describe, it, expect } from "vitest";
import { isObjectEmpty } from "@/object/isObjectEmpty";

describe("isObjectEmpty", () => {
  it("should return true for empty object", () => {
    const result = isObjectEmpty({});
    expect(result).toBe(true);
  });

  it("should return false for non-empty object", () => {
    const result = isObjectEmpty({ someKey: 1 });
    expect(result).toBe(false);
  });

  it("should return false for object with undefined value", () => {
    const result = isObjectEmpty({ someKey: undefined });
    expect(result).toBe(false);
  });

  it("should return true for empty object created with Object.create(null)", () => {
    const result = isObjectEmpty(Object.create(null));
    expect(result).toBe(true);
  });

  it("should only check own properties", () => {
    const result = isObjectEmpty(Object.create({ inheritedKey: 1 }));
    expect(result).toBe(true);
  });
});
