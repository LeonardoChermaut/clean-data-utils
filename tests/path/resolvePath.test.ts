import { resolvePath } from "@/path/resolvePath";
import { describe, expect, it } from "vitest";

describe("resolvePath", () => {
  it("should resolve relative path", () => {
    const result = resolvePath("/home/user/documents", "../pictures");

    expect(result).toBe("/home/user/pictures");
  });

  it("should handle current directory", () => {
    const result = resolvePath("/home/user", "./documents");

    expect(result).toBe("/home/user/documents");
  });

  it("should handle absolute path", () => {
    const result = resolvePath("/home/user", "/absolute/path");

    expect(result).toBe("/absolute/path");
  });

  it("should handle multiple segments", () => {
    const result = resolvePath("/home/user", "../../other");

    expect(result).toBe("/other");
  });

  it("should return base path for empty relative", () => {
    const result = resolvePath("/home/user", "");

    expect(result).toBe("/home/user");
  });
});
