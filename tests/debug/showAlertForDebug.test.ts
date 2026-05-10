import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { showAlertForDebug } from "@/debug/showAlertForDebug";

describe("showAlertForDebug", () => {
  beforeEach(() => {
    vi.stubGlobal("window", { alert: vi.fn() });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should call window.alert when called", () => {
    showAlertForDebug("test message");
    expect(window.alert).toHaveBeenCalled();
  });

  it("should include [DEBUG] prefix in the alert message", () => {
    showAlertForDebug("test message");
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining("[DEBUG]"));
  });

  it("should include the provided message in the alert", () => {
    showAlertForDebug("hello world");
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining("hello world"));
  });

  it("should include stringified context if provided", () => {
    const context = { id: 1, name: "test" };
    showAlertForDebug("message with context", context);
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('"id": 1'));
    expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('"name": "test"'));
  });

  it("should not include context section if context is not provided", () => {
    showAlertForDebug("no context");
    expect(window.alert).toHaveBeenCalledWith("[DEBUG] no context");
  });
});
