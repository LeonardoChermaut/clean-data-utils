import { groupArrayByKey } from "@/array";
import { describe, expect, it } from "vitest";

describe("groupArrayByKey", () => {
  it("groups by key extractor", () => {
    const items = [
      { category: "a", value: 1 },
      { category: "a", value: 2 },
      { category: "b", value: 3 },
    ];
    const result = groupArrayByKey(items, (item) => item.category);

    expect(result["a"]).toHaveLength(2);
    expect(result["b"]).toHaveLength(1);
  });

  it("returns empty object for empty array", () =>
    expect(groupArrayByKey([], (item: number) => item)).toEqual({}));

  it("handles single group", () => {
    const items = [{ type: "x" }];
    const result = groupArrayByKey(items, (item) => item.type);

    expect(result["x"]).toHaveLength(1);
  });

  it("defensive with frozen array", () => {
    const frozen = Object.freeze([{ key: "a" }]);
    const result = groupArrayByKey(frozen, (item) => item.key);

    expect(result["a"]).toHaveLength(1);
  });

  it("preserves original elements", () => {
    const items = [{ id: 1 }, { id: 2 }];
    const result = groupArrayByKey(items, () => "group");

    expect(result["group"][0]).toEqual({ id: 1 });
  });

  it("works with numeric keys", () => {
    const items = [{ priority: 1 }, { priority: 2 }];
    const result = groupArrayByKey(items, (item) => item.priority);

    expect(result[1]).toHaveLength(1);
  });
});
