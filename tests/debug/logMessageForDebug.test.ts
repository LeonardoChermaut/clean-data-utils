import { logMessageForDebug } from "@/debug/logMessageForDebug";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("logMessageForDebug", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should log a message to console.log by default", () => {
    logMessageForDebug("test message");
    expect(console.log).toHaveBeenCalled();
    const callArg = (console.log as any).mock.calls[0][0];
    expect(callArg).toContain("[DEBUG]");
    expect(callArg).toContain("test message");
  });

  it("should log with optional context", () => {
    const context = { foo: "bar" };
    logMessageForDebug("test message", context);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("test message"), context);
  });

  it("should log with warn level", () => {
    logMessageForDebug("test warning", undefined, "warn");
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining("test warning"));
  });

  it("should log with error level", () => {
    logMessageForDebug("test error", undefined, "error");
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("test error"));
  });

  it("should include a timestamp in the log", () => {
    logMessageForDebug("test timestamp");
    const callArg = (console.log as any).mock.calls[0][0];
    // Regex for ISO timestamp-like string within the message
    expect(callArg).toMatch(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\]/);
  });
});
