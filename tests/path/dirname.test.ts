import { dirname } from "@/path/dirname";
import { describe, expect, it } from "vitest";

describe("dirname", () => {
  it("should return directory for full path", () =>
    expect(dirname("/home/user/documents/file.txt")).toBe("/home/user/documents"));

  it("should return current directory for filename only", () =>
    expect(dirname("file.txt")).toBe("."));

  it("should return dot for relative path", () => expect(dirname("file.txt")).toBe("."));

  it("should return dot for empty string", () => expect(dirname("")).toBe("."));

  it("should handle Windows-style paths", () => {
    expect(dirname("C:\\Users\\file.txt")).toBe("C:/Users");
  });
});
