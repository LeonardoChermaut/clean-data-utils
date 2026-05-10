import { describe, it, expect, vi } from "vitest";
import { measurePerformanceOfFunction } from "@/function/measurePerformanceOfFunction";

describe("measurePerformanceOfFunction", () => {
  it("should return the result of the function being measured", () => {
    const sum = (val1: number, val2: number): number => val1 + val2;
    const [result] = measurePerformanceOfFunction(sum, [5, 10]);
    expect(result).toBe(15);
  });

  it("should return a duration as the second element of the tuple", () => {
    const noop = (): void => {};
    const [, duration] = measurePerformanceOfFunction(noop, []);
    expect(typeof duration).toBe("number");
    expect(duration).toBeGreaterThanOrEqual(0);
  });

  it("should correctly pass arguments to the function", () => {
    const mockFn = vi.fn(
      (firstValue: string, secondValue: number) => `${firstValue}-${secondValue}`,
    );
    const [result] = measurePerformanceOfFunction(mockFn, ["test", 123]);
    expect(mockFn).toHaveBeenCalledWith("test", 123);
    expect(result).toBe("test-123");
  });

  it("should handle functions returning complex objects", () => {
    const getObj = (val: string) => ({ val });
    const [result] = measurePerformanceOfFunction(getObj, ["hello"]);
    expect(result).toEqual({ val: "hello" });
  });

  it("should not mutate the input arguments array", () => {
    const args: [number, number] = [1, 2];
    Object.freeze(args);
    const sum = (val1: number, val2: number): number => val1 + val2;

    expect(() => measurePerformanceOfFunction(sum, args)).not.toThrow();
  });
});
