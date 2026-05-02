import { timeoutWithPromise } from "@/async/timeoutWithPromise";
import { describe, expect, it } from "vitest";

describe("timeoutWithPromise", () => {
  it("should resolve if promise resolves within timeout", async () => {
    const promise = Promise.resolve("result");
    const result = await timeoutWithPromise(promise, 1000);

    expect(result).toBe("result");
  });

  it("should reject if promise takes longer than timeout", async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 200));

    await expect(timeoutWithPromise(promise, 50)).rejects.toThrow("Operation timed out");
  });

  it("should return immediately for zero timeout", async () => {
    const promise = Promise.resolve("result");
    const result = await timeoutWithPromise(promise, 0);

    expect(result).toBe("result");
  });

  it("should resolve with value from slow promise", async () => {
    const promise = new Promise((resolve) => setTimeout(() => resolve("slow result"), 50));
    const result = await timeoutWithPromise(promise, 200);

    expect(result).toBe("slow result");
  });

  it("should handle rejection reason correctly", async () => {
    const promise = new Promise((resolveParam, rejectParam) => {
      setTimeout(() => rejectParam(new Error("custom error")), 50);
    });

    await expect(timeoutWithPromise(promise, 200)).rejects.toThrow("custom error");
  });
});
