import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { observeMutationsInElement } from "@/function/observeMutationsInElement";

describe("observeMutationsInElement", () => {
  const mockObserve = vi.fn();
  const mockDisconnect = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("window", { MutationObserver: vi.fn() });
    vi.stubGlobal("document", {
      createElement: vi.fn().mockImplementation(() => ({})),
    });
    vi.stubGlobal(
      "MutationObserver",
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
    const disconnect = observeMutationsInElement(null, callback);
    expect(typeof disconnect).toBe("function");
    expect(() => disconnect()).not.toThrow();
    expect(mockObserve).not.toHaveBeenCalled();
  });

  it("should initialize MutationObserver with the provided callback", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    observeMutationsInElement(target, callback);
    expect(global.MutationObserver).toHaveBeenCalledWith(callback);
  });

  it("should call observe with target and default options if none provided", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    observeMutationsInElement(target, callback);
    expect(mockObserve).toHaveBeenCalledWith(target, { childList: true, subtree: true });
  });

  it("should call observe with custom options if provided", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    const options: MutationObserverInit = { attributes: true };
    observeMutationsInElement(target, callback, options);
    expect(mockObserve).toHaveBeenCalledWith(target, options);
  });

  it("should call disconnect when the returned function is executed", () => {
    const target = document.createElement("div");
    const callback = vi.fn();
    const disconnect = observeMutationsInElement(target, callback);
    disconnect();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
