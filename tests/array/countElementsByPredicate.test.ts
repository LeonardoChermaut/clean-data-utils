import { describe, it, expect } from "vitest";
import { countElementsByPredicate } from "@/array/countElementsByPredicate";

describe("countElementsByPredicate", () => {
  it("should count elements matching predicate", () => {
    const result = countElementsByPredicate([1, 2, 3, 4, 5], (value) => value > 2);
    expect(result).toEqual(3);
  });

  it("should return 0 when no elements match", () => {
    const result = countElementsByPredicate([1, 2, 3], (value) => value > 10);
    expect(result).toEqual(0);
  });

  it("should return array length when all match", () => {
    const result = countElementsByPredicate([1, 2, 3], (value) => value > 0);
    expect(result).toEqual(3);
  });

  it("should count objects by predicate", () => {
    const result = countElementsByPredicate(
      [{ active: true }, { active: false }, { active: true }],
      (item) => item.active,
    );
    expect(result).toEqual(2);
  });

  it("should handle empty array", () => {
    const result = countElementsByPredicate([], () => true);
    expect(result).toEqual(0);
  });

  it("should work with string predicate", () => {
    const result = countElementsByPredicate(["apple", "banana", "cherry"], (str) =>
      str.startsWith("a"),
    );
    expect(result).toEqual(1);
  });

  it("should handle complex predicates", () => {
    const result = countElementsByPredicate([1, 2, 3, 4, 5, 6], (value) => value % 2 === 0);
    expect(result).toEqual(3);
  });
});
