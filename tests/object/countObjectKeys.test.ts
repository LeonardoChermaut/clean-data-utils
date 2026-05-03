import { describe, it, expect } from "vitest";
import { countObjectKeys } from "@/object/countObjectKeys";

describe("countObjectKeys", () => {
  it("should count all own properties", () => {
    const result = countObjectKeys({ first: 1, second: 2, third: 3 });
    expect(result).toEqual(3);
  });

  it("should return 0 for empty object", () => {
    const result = countObjectKeys({});
    expect(result).toEqual(0);
  });

  it("should count with string keys", () => {
    const result = countObjectKeys({ name: "Alice" });
    expect(result).toEqual(1);
  });

  it("should not count inherited properties", () => {
    const parent = { first: 1 };
    const child = Object.create(parent);
    child.second = 2;
    const result = countObjectKeys(child);
    expect(result).toEqual(1);
  });
});
