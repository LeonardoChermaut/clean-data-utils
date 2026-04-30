import { ensureSuffix } from "@/string";
import { describe, expect, it } from "vitest";

describe("ensureSuffix", () => {
  it("adds suffix when missing", () => {
    const result = ensureSuffix("filename", ".txt");

    expect(result).toBe("filename.txt");
  });

  it("keeps suffix when already present", () => {
    const result = ensureSuffix("filename.txt", ".txt");

    expect(result).toBe("filename.txt");
  });

  it("handles empty string", () => {
    const result = ensureSuffix("", ".txt");

    expect(result).toBe(".txt");
  });

  it("handles empty suffix", () => {
    const result = ensureSuffix("hello", "");

    expect(result).toBe("hello");
  });

  it("handles suffix that is substring at end", () => {
    const result = ensureSuffix("hello", "lo");

    expect(result).toBe("hello");
  });

  it("does not add suffix in middle", () => {
    const result = ensureSuffix("hello world", "world");

    expect(result).toBe("hello world");
  });

  it("handles whitespace suffix", () => {
    const result = ensureSuffix("hello", " ");

    expect(result).toBe("hello ");
  });

  it("handles multiple suffix additions", () => {
    const result = ensureSuffix("test", "ing");

    expect(result).toBe("testing");
  });
});
