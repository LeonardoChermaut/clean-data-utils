import { partial } from "@/function/partial";
import { describe, expect, it } from "vitest";

describe("partial", () => {
  it("should partially apply function", () => {
    const add = (firstNumber: number, secondNumber: number, thirdNumber: number) =>
      firstNumber + secondNumber + thirdNumber;
    const addFive = partial(add, [5]);

    expect(addFive(1, 2)).toBe(8);
  });

  it("should apply all arguments at once", () => {
    const multiply = (firstNumber: number, secondNumber: number) => firstNumber * secondNumber;
    const double = partial(multiply, [2]);

    expect(double(5)).toBe(10);
  });

  it("should work with single argument", () => {
    const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
    const sayHello = partial(greet, ["Hello"]);

    expect(sayHello("World")).toBe("Hello, World!");
  });

  it("should allow multiple pre-filled arguments", () => {
    const add = (firstNumber: number, secondNumber: number, thirdNumber: number) =>
      firstNumber + secondNumber + thirdNumber;
    const addFirstTwo = partial(add, [1, 2]);

    expect(addFirstTwo(3)).toBe(6);
  });

  it("should preserve context when using arrow functions", () => {
    const obj = {
      value: 10,
      add: function (this: { value: number }, numberValue: number) {
        return this.value + numberValue;
      },
    };
    const addToObj = partial(obj.add.bind(obj), [5]);

    expect(addToObj()).toBe(15);
  });
});
