import { removeNullOrUndefinedValuesFromArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("removeNullOrUndefinedValuesFromArray", () => {
  const mixedValues = [null, 0, "a", undefined, false, "", "b"];
  const allNullish = [null, undefined, null, undefined];
  const noNullish = [0, false, "", "a"];
  const emptyArray: unknown[] = [];

  it("removes null and undefined but preserves 0, false, and empty string", () =>
    expect(removeNullOrUndefinedValuesFromArray(mixedValues)).toEqual([0, "a", false, "", "b"]));

  it("returns an empty array when all values are null or undefined", () =>
    expect(removeNullOrUndefinedValuesFromArray(allNullish)).toEqual([]));

  it("returns the full array unchanged when no nullish values exist", () =>
    expect(removeNullOrUndefinedValuesFromArray(noNullish)).toEqual(noNullish));

  it("returns an empty array for an empty input", () =>
    expect(removeNullOrUndefinedValuesFromArray(emptyArray)).toEqual([]));

  it("does not mutate the original array", () => {
    const frozen = Object.freeze([...mixedValues]) as unknown[];

    removeNullOrUndefinedValuesFromArray(frozen);
    expect(frozen).toEqual(mixedValues);
  });
});
