import { chunkArray } from "@/array";
import { describe, expect, it } from "vitest";

describe("chunkArray", () => {
  it("splits array into chunks", () =>
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]));

  it("returns empty array for empty input", () => expect(chunkArray([], 3)).toEqual([]));

  it("returns single chunk if size larger than array", () =>
    expect(chunkArray([1, 2], 5)).toEqual([[1, 2]]));

  it("handles exact division", () =>
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]));

  it("defensive with frozen array", () =>
    expect(chunkArray(Object.freeze([1, 2, 3]), 2)).toEqual([[1, 2], [3]]));

  it("returns empty array for zero or negative chunk size", () =>
    expect(chunkArray([1, 2, 3], 0)).toEqual([]));
});
