import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { observeResizeOfElement } from "@/function/observeResizeOfElement";

describe("observeResizeOfElement", () => {
  const mockObserve = vi.fn();
  const mockDisconnect = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("window", { ResizeObserver: vi.fn() });
    vi.stubGlobal("document", {
      createElement: vi.fn().mockImplementation(() => ({})),
    });
    vi.stubGlobal(
      "ResizeObserver",
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
    const disconnect = observeResizeOfElement(null, callback);
    expect(typeof disconnect).toBe("function");
    expect(() => disconnect()).not.toThrow();
  });

  it("should initialize ResizeObserver with the provided callback", () => {
    const target = document.createElement("div") as any;
    const callback = vi.fn();
    observeResizeOfElement(target, callback);
    expect(global.ResizeObserver).toHaveBeenCalledWith(callback);
  });

  it("should call observe with the target element and options", () => {
    const target = document.createElement("div") as any;
    const callback = vi.fn();
    const options: ResizeObserverOptions = { box: "border-box" };
    observeResizeOfElement(target, callback, options);
    expect(mockObserve).toHaveBeenCalledWith(target, options);
  });

  it("should call disconnect when the returned function is executed", () => {
    const target = document.createElement("div") as any;
    const callback = vi.fn();
    const disconnect = observeResizeOfElement(target, callback);
    disconnect();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("should return a functional disconnect even if ResizeObserver is missing", () => {
    vi.stubGlobal("window", { ResizeObserver: undefined });

    const target = document.createElement("div") as any;
    const callback = vi.fn();
    const disconnect = observeResizeOfElement(target, callback);

    expect(typeof disconnect).toBe("function");
    expect(() => disconnect()).not.toThrow();
  });
});
