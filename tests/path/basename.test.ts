import { basename } from "@/path/basename";
import { describe, expect, it } from "vitest";

describe("basename", () => {
  it("should return basename without extension", () =>
    expect(basename("/home/user/documents/file.txt")).toBe("file.txt"));

  it("should strip extension when provided", () =>
    expect(basename("/home/user/documents/file.txt", ".txt")).toBe("file"));

  it("should handle path without extension", () =>
    expect(basename("/home/user/file")).toBe("file"));

  it("should handle empty string", () => expect(basename("")).toBe(""));

  it("should handle path with multiple slashes", () =>
    expect(basename("///home///user///file.txt")).toBe("file.txt"));
});
