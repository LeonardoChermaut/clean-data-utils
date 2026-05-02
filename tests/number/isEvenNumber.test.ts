import { isEvenNumber } from "@/number";
import { describe, expect, it } from "vitest";

describe("isEvenNumber", () => {
  it("returns true for even number", () => {
    const result = isEvenNumber(4);

    expect(result).toBe(true);
  });

  it("returns false for odd number", () => {
    const result = isEvenNumber(5);

    expect(result).toBe(false);
  });

  it("returns true for zero", () => {
    const result = isEvenNumber(0);

    expect(result).toBe(true);
  });

  it("returns true for negative even number", () => {
    const result = isEvenNumber(-4);

    expect(result).toBe(true);
  });

  it("returns false for negative odd number", () => {
    const result = isEvenNumber(-3);

    expect(result).toBe(false);
  });

  it("returns true for large even number", () => {
    const result = isEvenNumber(1000000);

    expect(result).toBe(true);
  });

  it("returns false for large odd number", () => {
    const result = isEvenNumber(999999);

    expect(result).toBe(false);
  });

  it("returns true for 2", () => {
    const result = isEvenNumber(2);

    expect(result).toBe(true);
  });

  it("returns false for 1", () => {
    const result = isEvenNumber(1);

    expect(result).toBe(false);
  });

  it("returns true for negative 2", () => {
    const result = isEvenNumber(-2);

    expect(result).toBe(true);
  });
});
