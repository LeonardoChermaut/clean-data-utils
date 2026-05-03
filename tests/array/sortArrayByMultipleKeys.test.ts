import { describe, it, expect } from "vitest";
import { sortArrayByMultipleKeys } from "@/array/sortArrayByMultipleKeys";

describe("sortArrayByMultipleKeys", () => {
  it("should sort by multiple keys", () => {
    const result = sortArrayByMultipleKeys(
      [
        { name: "Charlie", age: 30 },
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
      ],
      [
        { getComparable: (item) => item.age, direction: "desc" as const },
        { getComparable: (item) => item.name, direction: "asc" as const },
      ],
    );
    expect(result.length).toEqual(3);
  });

  it("should sort by single criterion", () => {
    const result = sortArrayByMultipleKeys(
      [3, 1, 2, 1],
      [{ getComparable: (value) => value, direction: "asc" as const }],
    );
    expect(result).toEqual([1, 1, 2, 3]);
  });

  it("should handle empty criteria", () => {
    const result = sortArrayByMultipleKeys([3, 1, 2], []);
    expect(result).toEqual([3, 1, 2]);
  });

  it("should not mutate original", () => {
    const frozen = Object.freeze([3, 1, 2]);
    sortArrayByMultipleKeys(frozen, [
      { getComparable: (value) => value, direction: "asc" as const },
    ]);
    expect(frozen).toEqual([3, 1, 2]);
  });
});
