import { sortArrayByKey } from "@/array";
import { describe, expect, it } from "vitest";

describe("sortArrayByKey", () => {
  it("sorts ascending by default", () =>
    expect(sortArrayByKey([3, 1, 2], (element) => element)).toEqual([1, 2, 3]));

  it("sorts ascending with explicit direction", () =>
    expect(sortArrayByKey([3, 1, 2], (element) => element, "asc")).toEqual([1, 2, 3]));

  it("sorts descending", () =>
    expect(sortArrayByKey([1, 3, 2], (element) => element, "desc")).toEqual([3, 2, 1]));

  it("sorts by object property", () =>
    expect(
      sortArrayByKey(
        [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }],
        (item) => item.name,
      ),
    ).toEqual([{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]));

  it("defensive with frozen array", () =>
    expect(sortArrayByKey(Object.freeze([3, 1, 2]), (element) => element)).toEqual([1, 2, 3]));

  it("returns new array instance", () => {
    const original = [3, 1, 2];
    const result = sortArrayByKey(original, (element) => element);
    expect(result).not.toBe(original);
  });
});
