import { memoize } from "@/function/memoize";
import { describe, expect, it } from "vitest";

describe("memoize", () => {
  it("should cache results", () => {
    let callCount = 0;

    const fn = (numberValue: number) => {
      callCount++;
      return numberValue * 2;
    };
    const memoized = memoize(fn);

    memoized(5);
    memoized(5);
    expect(callCount).toBe(1);
  });

  it("should compute different args separately", () => {
    let callCount = 0;
    const fn = (numberValue: number) => {
      callCount++;
      return numberValue * 2;
    };
    const memoized = memoize(fn);

    memoized(5);
    memoized(10);
    expect(callCount).toBe(2);
  });

  it("should handle multiple arguments", () => {
    let callCount = 0;
    const fn = (firstNumber: number, secondNumber: number) => {
      callCount++;
      return firstNumber + secondNumber;
    };
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(callCount).toBe(1);
  });

  it("should handle object arguments", () => {
    let callCount = 0;
    const fn = (objectParam: { key: string }) => {
      callCount++;
      return objectParam.key;
    };
    const memoized = memoize(fn);

    expect(memoized({ key: "value" })).toBe("value");
    expect(memoized({ key: "value" })).toBe("value");
    expect(callCount).toBe(1);
  });

  it("should handle string arguments", () => {
    let callCount = 0;
    const fn = (stringParam: string) => {
      callCount++;
      return stringParam.toUpperCase();
    };
    const memoized = memoize(fn);

    expect(memoized("hello")).toBe("HELLO");
    expect(memoized("hello")).toBe("HELLO");
    expect(callCount).toBe(1);
  });
});
