import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",

      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",

      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-inferrable-types": "off",

      "prefer-const": "error",
      "no-var": "error",

      "id-length": ["error", { min: 2, exceptions: [] }],

      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "Default exports are not allowed. Use named exports only.",
        },
      ],

       "func-style": ["error", "expression", { allowArrowFunctions: true }],
       "prefer-arrow-callback": "error",

       "curly": ["error", "all"],
       "brace-style": ["error", "1tbs", { "allowSingleLine": false }],

       "no-restricted-imports": [
         "error",
         {
           patterns: [
             {
               group: ["../*"],
               message: "Use the @ alias instead of relative cross-domain imports.",
             },
           ],
         },
       ],
     },
   },
   {
     files: ["tests/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",

      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",

      "prefer-const": "error",
      "no-var": "error",

      "id-length": ["error", { min: 2, exceptions: [] }],

      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportDefaultDeclaration",
          message: "Default exports are not allowed. Use named exports only.",
        },
      ],

       "func-style": ["error", "expression", { allowArrowFunctions: true }],
       "prefer-arrow-callback": "error",

       "curly": ["error", "all"],
       "brace-style": ["error", "1tbs", { "allowSingleLine": false }],

       "no-restricted-imports": [
         "error",
         {
           patterns: [
             {
               group: ["../*"],
               message: "Use the @ alias instead of relative cross-domain imports.",
             },
           ],
         },
       ],
      },
    },
    prettierConfig,
  ];