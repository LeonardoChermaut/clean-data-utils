import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      thresholds: {
        lines: 99,
        functions: 100,
        branches: 98,
        statements: 99,
      },
      exclude: [
        "src/index.ts",
        "**/index.ts",
        "src/array/index.ts",
        "src/object/index.ts",
        "src/string/index.ts",
        "src/predicates/index.ts",
        "src/parsing/index.ts",
      ],
    },
  },
});