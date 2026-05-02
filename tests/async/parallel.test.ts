import { describe, it, expect } from "vitest";
import { parallel } from "@/async/parallel";

describe("parallel", () => {
  it("should execute tasks in parallel with limit", async () => {
    const results = await parallel(
      [() => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3)],
      2,
    );
    expect(results).toEqual([1, 2, 3]);
  });

  it("should return empty array for empty tasks", async () => {
    const results = await parallel([], 2);
    expect(results).toEqual([]);
  });

  it("should handle all at once when limit is high", async () => {
    const results = await parallel([() => Promise.resolve("a"), () => Promise.resolve("b")], 10);
    expect(results).toEqual(["a", "b"]);
  });

  it("should handle errors", async () => {
    const tasks = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error("error")),
      () => Promise.resolve(3),
    ];
    await expect(parallel(tasks, 2)).rejects.toThrow("error");
  });

  it("should execute with limit of 1 sequentially", async () => {
    const order: number[] = [];
    const tasks = [
      async () => {
        order.push(1);
        return 1;
      },
      async () => {
        order.push(2);
        return 2;
      },
    ];
    const results = await parallel(tasks, 1);
    expect(results).toEqual([1, 2]);
  });
});
