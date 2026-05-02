import { allSettled } from "@/async/allSettled";
import { describe, expect, it } from "vitest";

describe("allSettled", () => {
  it("should return all fulfilled results", async () => {
    const results = await allSettled([Promise.resolve("success"), Promise.resolve("also success")]);

    expect(results[0].status).toBe("fulfilled");
    expect(results[0].value).toBe("success");
    expect(results[1].status).toBe("fulfilled");
    expect(results[1].value).toBe("also success");
  });

  it("should return rejected results", async () => {
    const results = await allSettled([Promise.resolve("success"), Promise.reject("error")]);

    expect(results[0].status).toBe("fulfilled");
    expect(results[1].status).toBe("rejected");
    expect((results[1] as { status: string; reason: unknown }).reason).toBe("error");
  });

  it("should return empty array for empty input", async () => {
    const results = await allSettled([]);
    expect(results).toEqual([]);
  });

  it("should handle mixed fulfilled and rejected promises", async () => {
    const results = await allSettled([
      Promise.resolve("ok"),
      Promise.reject(new Error("fail")),
      Promise.resolve("ok2"),
    ]);

    expect(results[0].status).toBe("fulfilled");
    expect(results[1].status).toBe("rejected");
    expect(results[2].status).toBe("fulfilled");
  });
});
