import { describe, it, expect } from "vitest";
import { sumNumbersFromArrayByKey } from "@/number/sumNumbersFromArrayByKey";

describe("sumNumbersFromArrayByKey", () => {
  it("should sum values by key", () => {
    const result = sumNumbersFromArrayByKey(
      [{ amount: 10 }, { amount: 20 }, { amount: 30 }],
      (item) => item.amount,
    );
    expect(result).toEqual(60);
  });

  it("should handle empty array", () => {
    const result = sumNumbersFromArrayByKey([], (item) => item.amount);
    expect(result).toEqual(0);
  });

  it("should filter out non-finite values", () => {
    const result = sumNumbersFromArrayByKey(
      [{ value: 10 }, { value: Infinity }, { value: 20 }],
      (item) => item.value,
    );
    expect(result).toEqual(30);
  });

  it("should handle decimal values", () => {
    const result = sumNumbersFromArrayByKey(
      [{ price: 100.5 }, { price: 50.5 }],
      (item) => item.price,
    );
    expect(result).toEqual(151);
  });

  it("should not mutate original", () => {
    const original = Object.freeze([{ amount: 10 }]);
    sumNumbersFromArrayByKey(original, (item) => item.amount);
    expect(original).toEqual([{ amount: 10 }]);
  });
});
