import { curry } from "@/function/curry";
import { describe, expect, it } from "vitest";

describe("curry", () => {
  it("should curry function", () => {
    const add = (firstNumber: number, secondNumber: number, thirdNumber: number) =>
      firstNumber + secondNumber + thirdNumber;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
  });

  it("should allow partial application", () => {
    const add = (firstNumber: number, secondNumber: number, thirdNumber: number) =>
      firstNumber + secondNumber + thirdNumber;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
  });

  it("should handle single argument", () => {
    const double = (numberValue: number) => numberValue * 2;
    const curried = curry(double);

    expect(curried(5)).toBe(10);
  });

  it("should handle string concatenation", () => {
    const concat = (firstString: string, secondString: string, thirdString: string) =>
      firstString + secondString + thirdString;
    const curriedConcat = curry(concat);

    expect(curriedConcat("a")("b")("c")).toBe("abc");
  });

  it("should work with objects as arguments", () => {
    const merge = (firstObj: { valA: number }, secondObj: { valB: number }) => ({
      ...firstObj,
      ...secondObj,
    });
    const curriedMerge = curry(merge);

    expect(curriedMerge({ valA: 1 })({ valB: 2 })).toEqual({ valA: 1, valB: 2 });
  });
});
