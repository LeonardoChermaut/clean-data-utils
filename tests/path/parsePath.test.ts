import { parsePath } from "@/path/parsePath";
import { describe, expect, it } from "vitest";

describe("parsePath", () => {
  it("should parse full path", () => {
    const result = parsePath("/home/user/documents/file.txt");

    expect(result.directory).toBe("/home/user/documents");
    expect(result.basename).toBe("file.txt");
    expect(result.extension).toBe("txt");
    expect(result.filename).toBe("file");
  });

  it("should parse path without directory", () => {
    const result = parsePath("file.txt");

    expect(result.directory).toBe("");
    expect(result.basename).toBe("file.txt");
    expect(result.extension).toBe("txt");
    expect(result.filename).toBe("file");
  });

  it("should parse path without extension", () => {
    const result = parsePath("/home/user/file");

    expect(result.extension).toBe("");
    expect(result.filename).toBe("file");
  });

  it("should handle empty input", () => {
    const result = parsePath("");

    expect(result.directory).toBe("");
    expect(result.basename).toBe("");
  });

  it("should normalize Windows path to forward slashes", () => {
    const result = parsePath("C:\\Users\\test\\file.txt");

    expect(result.directory).toBe("C:/Users/test");
    expect(result.basename).toBe("file.txt");
  });
});
