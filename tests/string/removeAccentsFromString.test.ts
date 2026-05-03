import { describe, it, expect } from "vitest";
import { removeAccentsFromString } from "@/string/removeAccentsFromString";

describe("removeAccentsFromString", () => {
  it("should remove accents", () => {
    const result = removeAccentsFromString("Héllo Wörld");
    expect(result).toEqual("Hello World");
  });

  it("should handle french accents", () => {
    const result = removeAccentsFromString("Ça me fait sourire");
    expect(result).toEqual("Ca me fait sourire");
  });

  it("should handle multiple accents", () => {
    const result = removeAccentsFromString("ãéïõû");
    expect(result).toEqual("aeiou");
  });

  it("should handle empty string", () => {
    const result = removeAccentsFromString("");
    expect(result).toEqual("");
  });

  it("should handle no accents", () => {
    const result = removeAccentsFromString("hello");
    expect(result).toEqual("hello");
  });

  it("should handle portuguese accents", () => {
    const result = removeAccentsFromString("São Paulo");
    expect(result).toEqual("Sao Paulo");
  });
});
