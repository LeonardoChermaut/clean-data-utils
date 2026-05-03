import { describe, it, expect } from "vitest";
import { addWeeks } from "@/date/addWeeks";

describe("addWeeks", () => {
  it("should add 1 week", () => {
    const result = addWeeks(new Date(2024, 0, 10), 1);
    expect(result?.getDate()).toEqual(17);
  });

  it("should subtract weeks", () => {
    const result = addWeeks(new Date(2024, 0, 10), -2);
    expect(result?.getDate()).toEqual(27);
  });

  it("should add multiple weeks", () => {
    const result = addWeeks(new Date(2024, 0, 1), 4);
    expect(result?.getDate()).toEqual(29);
  });

  it("should handle zero", () => {
    const result = addWeeks(new Date(2024, 0, 10), 0);
    expect(result?.getDate()).toEqual(10);
  });
});
