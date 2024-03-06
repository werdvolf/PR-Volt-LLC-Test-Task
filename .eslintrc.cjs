module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "@wemake-services/typescript/recommended",
    "@wemake-services/javascript",
    "@wemake-services/stylelint-config-scss",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
}
