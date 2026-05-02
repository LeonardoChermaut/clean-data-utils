import { extname } from "@/path/extname";
import { describe, expect, it } from "vitest";

describe("extname", () => {
  it("should return extension with dot", () =>
    expect(extname("/home/user/documents/file.txt")).toBe(".txt"));

  it("should return empty string for no extension", () =>
    expect(extname("/home/user/file")).toBe(""));

  it("should handle multiple dots", () => expect(extname("file.tar.gz")).toBe(".gz"));

  it("should handle empty string", () => expect(extname("")).toBe(""));

  it("should handle file without name but with extension", () =>
    expect(extname(".gitignore")).toBe(""));
});
