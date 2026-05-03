import { describe, it, expect } from "vitest";
import { countOccurrencesInString } from "@/string/countOccurrencesInString";

describe("countOccurrencesInString", () => {
  it("should count occurrences", () => {
    const result = countOccurrencesInString("hello hell", "ll");
    expect(result).toEqual(2);
  });

  it("should return 0 for no matches", () => {
    const result = countOccurrencesInString("hello", "x");
    expect(result).toEqual(0);
  });

  it("should handle empty search", () => {
    const result = countOccurrencesInString("hello", "");
    expect(result).toEqual(0);
  });

  it("should handle overlapping", () => {
    const result = countOccurrencesInString("aaa", "aa");
    expect(result).toEqual(1);
  });

  it("should handle empty source", () => {
    const result = countOccurrencesInString("", "a");
    expect(result).toEqual(0);
  });

  it("should count single char", () => {
    const result = countOccurrencesInString("ababab", "a");
    expect(result).toEqual(3);
  });
});
