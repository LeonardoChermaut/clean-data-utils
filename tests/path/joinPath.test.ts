import { joinPath } from "@/path/joinPath";
import { describe, expect, it } from "vitest";

describe("joinPath", () => {
  it("should join path segments", () =>
    expect(joinPath("/home", "user", "documents")).toBe("/home/user/documents"));

  it("should handle empty segments", () =>
    expect(joinPath("/home", "", "user")).toBe("/home/user"));

  it("should handle single segment", () => expect(joinPath("/home")).toBe("/home"));

  it("should normalize multiple slashes", () =>
    expect(joinPath("/home//user///documents")).toBe("/home/user/documents"));

  it("should return empty string for no segments", () => expect(joinPath()).toBe(""));
});
