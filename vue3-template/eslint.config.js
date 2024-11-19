import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettierRecommended from "eslint-plugin-prettier/recommended";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], 
    languageOptions: {parserOptions: {parser: tseslint.parser}}
  },
  {
    ignores:[
      "node_modules/*",
      "dist/*",
      "*.css",
      "*.jpg",
      "*.jpeg",
      "*.png",
      "*.gif",
      "*.d.ts",
    ],
  },
  {
    rules: {
      "no-console": "error",
      "vue/multi-word-component-names":"off",
    },
  },
  prettierRecommended
];