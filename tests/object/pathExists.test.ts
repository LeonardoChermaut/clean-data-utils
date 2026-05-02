import { pathExists } from "@/object/pathExists";
import { describe, expect, it } from "vitest";

describe("pathExists", () => {
  it("should return true for existing path", () => {
    const obj = { user: { address: { city: "London" } } };

    expect(pathExists(obj, "user.address.city")).toBe(true);
  });

  it("should return false for non-existing path", () => {
    const obj = { user: { address: null } };

    expect(pathExists(obj, "user.address.city")).toBe(false);
  });

  it("should return false for invalid object", () => {
    expect(pathExists(null as unknown as Record<string, unknown>, "path")).toBe(false);
    expect(pathExists(undefined as unknown as Record<string, unknown>, "path")).toBe(false);
  });

  it("should return false for invalid path", () => {
    const obj = { user: { name: "Alice" } };

    expect(pathExists(obj, "")).toBe(false);
    expect(pathExists(obj, "not.existing.path")).toBe(false);
  });

  it("should handle array indices in path", () => {
    const obj = { users: [{ name: "Alice" }] };

    expect(pathExists(obj, "users.0.name")).toBe(true);
  });
});
