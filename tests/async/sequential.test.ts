import { sequential } from "@/async/sequential";
import { describe, expect, it } from "vitest";

describe("sequential", () => {
  it("should execute tasks sequentially", async () => {
    const results = await sequential([
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3),
    ]);

    expect(results).toEqual([1, 2, 3]);
  });

  it("should return empty array for empty tasks", async () => {
    const results = await sequential([]);

    expect(results).toEqual([]);
  });

  it("should handle errors and stop", async () => {
    const tasks = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error("error")),
      () => Promise.resolve(3),
    ];

    await expect(sequential(tasks)).rejects.toThrow("error");
  });

  it("should preserve order of results", async () => {
    const results = await sequential([
      () => Promise.resolve("first"),
      () => Promise.resolve("second"),
      () => Promise.resolve("third"),
    ]);

    expect(results).toEqual(["first", "second", "third"]);
  });

  it("should handle synchronous errors", async () => {
    const tasks = [
      () => {
        throw new Error("sync error");
      },
    ];

    await expect(sequential(tasks)).rejects.toThrow("sync error");
  });
});
