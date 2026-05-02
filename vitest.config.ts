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
        lines: 98,
        functions: 100,
        branches: 94,
        statements: 98,
      },
      exclude: [
        "src/index.ts",
        "**/index.ts",
        "src/array/index.ts",
        "src/object/index.ts",
        "src/string/index.ts",
        "src/predicates/index.ts",
        "src/parsing/index.ts",
        "src/number/index.ts",
        "src/function/index.ts",
        "src/promise/index.ts",
        "src/types/index.ts",
        "src/validation/index.ts",
        "src/date/index.ts",
        "src/path/index.ts",
        "src/env/index.ts",
        "src/async/index.ts",
      ],
    },
  },
});