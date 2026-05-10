import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { observeIntersectionOfElement } from "@/function/observeIntersectionOfElement";

describe("observeIntersectionOfElement", () => {
  const mockObserve = vi.fn();
  const mockDisconnect = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("window", { IntersectionObserver: vi.fn() });
    vi.stubGlobal("document", {
      createElement: vi.fn().mockImplementation(() => ({})),
    });
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn().mockImplementation(() => ({
        observe: mockObserve,
        disconnect: mockDisconnect,
      })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("should return a noop function if targetElement is null", () => {
    const callback = vi.fn();
    const disconnect = observeIntersectionOfElement(null, callback);
    expect(typeof disconnect).toBe("function");
    expect(() => disconnect()).not.toThrow();
  });

  it("should initialize IntersectionObserver with the provided callback and options", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    const options: IntersectionObserverInit = { threshold: 0.5 };
    observeIntersectionOfElement(target, callback, options);
    expect(global.IntersectionObserver).toHaveBeenCalledWith(callback, options);
  });

  it("should call observe with the target element", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    observeIntersectionOfElement(target, callback);
    expect(mockObserve).toHaveBeenCalledWith(target);
  });

  it("should call disconnect when the returned function is executed", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    const disconnect = observeIntersectionOfElement(target, callback);
    disconnect();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("should handle undefined targetElement gracefully", () => {
    const callback = vi.fn();
    const disconnect = observeIntersectionOfElement(undefined, callback);
    expect(typeof disconnect).toBe("function");
    expect(mockObserve).not.toHaveBeenCalled();
  });
});
