import { describe, it, expect } from "vitest";
import { isNumberInRange } from "@/number/isNumberInRange";

describe("isNumberInRange", () => {
  it("should return true when value is in range", () => {
    const result = isNumberInRange(5, 1, 10);
    expect(result).toEqual(true);
  });

  it("should return false when value is below range", () => {
    const result = isNumberInRange(0, 1, 10);
    expect(result).toEqual(false);
  });

  it("should return false when value is above range", () => {
    const result = isNumberInRange(11, 1, 10);
    expect(result).toEqual(false);
  });

  it("should be inclusive at boundaries", () => {
    const resultMin = isNumberInRange(1, 1, 10);
    expect(resultMin).toEqual(true);

    const resultMax = isNumberInRange(10, 1, 10);
    expect(resultMax).toEqual(true);
  });

  it("should handle negative ranges", () => {
    const result = isNumberInRange(0, -5, 5);
    expect(result).toEqual(true);
  });
});
