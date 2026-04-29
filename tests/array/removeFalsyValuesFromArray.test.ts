import { removeFalsyValuesFromArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("removeFalsyValuesFromArray", () => {
  const mixedValues = ["a", null, "", 0, false, undefined, "b", NaN];
  const allFalsy = [null, undefined, false, 0, "", NaN];
  const allTruthy = ["a", "b", "c"];
  const emptyArray: unknown[] = [];

  it("removes all falsy values from a mixed array", () =>
    expect(removeFalsyValuesFromArray(mixedValues)).toEqual(["a", "b"]));

  it("returns an empty array when all values are falsy", () =>
    expect(removeFalsyValuesFromArray(allFalsy)).toEqual([]));

  it("returns the same values when all are truthy", () =>
    expect(removeFalsyValuesFromArray(allTruthy)).toEqual(allTruthy));

  it("returns an empty array for an empty input", () =>
    expect(removeFalsyValuesFromArray(emptyArray)).toEqual([]));

  it("does not mutate the original array", () => {
    const frozen = Object.freeze([...mixedValues]) as unknown[];

    removeFalsyValuesFromArray(frozen);
    expect(frozen).toEqual(mixedValues);
  });
});
