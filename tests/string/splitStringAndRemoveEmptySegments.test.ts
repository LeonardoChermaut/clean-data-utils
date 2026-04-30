import { describe, expect, it } from "vitest";
import { splitStringAndRemoveEmptySegments } from "@/string";

describe("splitStringAndRemoveEmptySegments", () => {
  const separator = ",";
  const normalInput = "a,b,c";
  const consecutiveSeparators = "a,,b,,c";
  const trailingSeparator = "a,b,";
  const onlySeparators = ",,,";

  it("splits a clean string by separator", () => {
    expect(splitStringAndRemoveEmptySegments(normalInput, separator)).toEqual(["a", "b", "c"]);
  });

  it("removes empty segments from consecutive separators", () => {
    expect(splitStringAndRemoveEmptySegments(consecutiveSeparators, separator)).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  it("removes trailing empty segment", () => {
    expect(splitStringAndRemoveEmptySegments(trailingSeparator, separator)).toEqual(["a", "b"]);
  });

  it("returns an empty array when input is only separators", () => {
    expect(splitStringAndRemoveEmptySegments(onlySeparators, separator)).toEqual([]);
  });

  it("returns an empty array for an empty string", () => {
    expect(splitStringAndRemoveEmptySegments("", separator)).toEqual([]);
  });

  it("returns a single-item array when separator is not found", () => {
    expect(splitStringAndRemoveEmptySegments("hello", separator)).toEqual(["hello"]);
  });
});
