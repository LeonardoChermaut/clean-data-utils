import { getLastElementFromArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("getLastElementFromArray", () => {
  const numbersArray = [1, 2, 3];
  const singleItem = [42];
  const emptyArray: number[] = [];

  it("returns the last element of a non-empty array", () =>
    expect(getLastElementFromArray(numbersArray)).toBe(3));

  it("returns undefined for an empty array", () =>
    expect(getLastElementFromArray(emptyArray)).toBeUndefined());

  it("returns the only element of a single-item array", () =>
    expect(getLastElementFromArray(singleItem)).toBe(42));

  it("does not mutate the original array", () => {
    const frozen = Object.freeze([...numbersArray]) as number[];

    getLastElementFromArray(frozen);

    expect(frozen).toEqual(numbersArray);
  });

  it("preserves the element type — no widening to unknown", () => {
    const result: string | undefined = getLastElementFromArray(["x", "y"]);
    expect(result).toBe("y");
  });
});
