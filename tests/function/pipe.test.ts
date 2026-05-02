import { pipe } from "@/function/pipe";
import { describe, expect, it } from "vitest";

describe("pipe", () => {
  it("should compose functions left to right", () => {
    const addOne = (inputValue: number) => inputValue + 1;
    const double = (inputValue: number) => inputValue * 2;
    const pipeline = pipe(addOne, double);

    expect(pipeline(2)).toBe(6);
  });

  it("should handle single function", () => {
    const addOne = (inputValue: number) => inputValue + 1;
    const pipeline = pipe(addOne);

    expect(pipeline(5)).toBe(6);
  });

  it("should work with different types", () => {
    const addOne = (inputValue: number) => inputValue + 1;
    const toString = (inputValue: number) => String(inputValue);
    const pipeline = pipe(addOne, toString);

    expect(pipeline(5)).toBe("6");
  });

  it("should handle three or more functions", () => {
    const addOne = (inputValue: number) => inputValue + 1;
    const double = (inputValue: number) => inputValue * 2;
    const subtractThree = (inputValue: number) => inputValue - 3;
    const pipeline = pipe(addOne, double, subtractThree);

    expect(pipeline(5)).toBe(9);
  });

  it("should pass correct value through chain", () => {
    const square = (inputValue: number) => inputValue * inputValue;
    const pipeline = pipe(square, square);

    expect(pipeline(2)).toBe(16);
  });
});
