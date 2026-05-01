import { retry } from "@/promise/retry";
import { describe, expect, it, vi } from "vitest";

describe("retry", () => {
  it("should retry failed operation", async () => {
    let attempts = 0;
    const operation = vi.fn().mockImplementation(() => {
      attempts += 1;
      if (attempts < 2) {
        throw new Error("fail");
      }
      return "success";
    });

    const result = await retry(operation, { maxRetries: 3, baseDelay: 10 });

    expect(result).toBe("success");
    expect(operation).toHaveBeenCalledTimes(2);
  });

  it("should succeed on first attempt", async () => {
    const operation = vi.fn().mockResolvedValue("success");

    const result = await retry(operation, { maxRetries: 3, baseDelay: 10 });

    expect(result).toBe("success");
    expect(operation).toHaveBeenCalledTimes(1);
  });

  it("should throw after max retries", async () => {
    const operation = vi.fn().mockRejectedValue(new Error("fail"));

    await expect(retry(operation, { maxRetries: 2, baseDelay: 10 })).rejects.toThrow("fail");
  });
});
