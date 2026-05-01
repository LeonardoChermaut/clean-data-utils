import { safeJsonParse } from "@/parsing";
import { describe, expect, it } from "vitest";

describe("safeJsonParse", () => {
  it("parses valid JSON object", () =>
    expect(safeJsonParse('{"key": "value"}')).toEqual({ key: "value" }));

  it("parses valid JSON array", () => expect(safeJsonParse("[1, 2, 3]")).toEqual([1, 2, 3]));

  it("parses valid JSON string", () => expect(safeJsonParse('"hello"')).toEqual("hello"));

  it("parses valid JSON number", () => expect(safeJsonParse("42")).toEqual(42));

  it("returns undefined for invalid JSON", () =>
    expect(safeJsonParse("invalid json")).toBeUndefined());

  it("returns undefined for empty string", () => expect(safeJsonParse("")).toBeUndefined());

  it("returns undefined for partial JSON", () =>
    expect(safeJsonParse('{"incomplete":')).toBeUndefined());

  it("returns null for JSON null", () => expect(safeJsonParse("null")).toBeNull());
});
