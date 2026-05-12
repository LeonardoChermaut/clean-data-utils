import { limit } from "@/async/limit";
import { describe, expect, it } from "vitest";

describe("limit", () => {
  it("should execute tasks in parallel with limit", async () => {
    const tasks = Object.freeze([
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3),
    ]);
    const results = await limit(tasks, 2);
    expect(results).toEqual([1, 2, 3]);
  });

  it("should return empty array for empty tasks", async () => {
    const results = await limit([], 2);
    expect(results).toEqual([]);
  });

  it("should handle all at once when limit is high", async () => {
    const tasks = Object.freeze([() => Promise.resolve("first"), () => Promise.resolve("second")]);
    const results = await limit(tasks, 10);
    expect(results).toEqual(["first", "second"]);
  });

  it("should handle errors", async () => {
    const tasks = Object.freeze([
      () => Promise.resolve(1),
      () => Promise.reject(new Error("error")),
      () => Promise.resolve(3),
    ]);
    await expect(limit(tasks, 2)).rejects.toThrow("error");
  });

  it("should execute with limit of 1 sequentially", async () => {
    const order: number[] = [];
    const tasks = Object.freeze([
      async () => {
        order.push(1);
        return 1;
      },
      async () => {
        order.push(2);
        return 2;
      },
    ]);
    const results = await limit(tasks, 1);
    expect(results).toEqual([1, 2]);
  });

  it("should respect concurrency limit", async () => {
    let running = 0;
    let maxRunning = 0;
    const tasks = Object.freeze(
      Array.from({ length: 5 }, () => async () => {
        running++;
        maxRunning = Math.max(maxRunning, running);
        await Promise.resolve();
        running--;
        return running;
      }),
    );
    await limit(tasks, 2);
    expect(maxRunning).toBe(2);
  });
});
