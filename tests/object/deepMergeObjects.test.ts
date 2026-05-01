import { describe, it, expect } from "vitest";
import { deepMergeObjects } from "@/object/deepMergeObjects";

describe("deepMergeObjects", () => {
  it("should merge two flat objects", () => {
    const result = deepMergeObjects({ first: 1 }, { second: 2 });
    expect(result).toEqual({ first: 1, second: 2 });
  });

  it("should deep merge nested objects", () => {
    const result = deepMergeObjects({ nested: { propA: 1 } }, { nested: { propB: 2 } });
    expect(result).toEqual({ nested: { propA: 1, propB: 2 } });
  });

  it("should replace arrays instead of merging", () => {
    const result = deepMergeObjects({ items: [1, 2] }, { items: [3] });
    expect(result).toEqual({ items: [3] });
  });

  it("should not mutate first object", () => {
    const first = Object.freeze({ propA: 1 });
    deepMergeObjects(first, { propB: 2 });
    expect(first).toEqual({ propA: 1 });
  });

  it("should not mutate second object", () => {
    const second = Object.freeze({ propB: 2 });
    deepMergeObjects({ propA: 1 }, second);
    expect(second).toEqual({ propB: 2 });
  });
});
