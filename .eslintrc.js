module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaFeatures: { jsx: true },
  },
  env: { "react-native/react-native": true },
  settings: {
    "react-native/style-sheet-object-names": ["StyleSheet", "EStyleSheet"],
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    quotes: 0,
    "no-unused-labels": 1,
    "no-multiple-empty-lines": 1,
    "no-console": 1,
    "no-trailing-spaces": 1,
    "brace-style": 1,
    "generator-star-spacing": ["error", "after"],
    "no-caller": 1,
    "no-new-wrappers": 1,
    "no-debugger": 1,
    "constructor-super": 1,
    "variable-name": 0,
    "jsx-no-multiline-js": 0,
    "jsx-wrap-multiline": 0,
    "jsx-no-lambda": 0,
    "max-classes-per-file": 0,
    "no-eval": 1,
    "no-shadow": 1,
    "no-fallthrough": 1,
    "no-undef-init": 1,
    "no-unused-expressions": 1,
    "no-var": 1,
    radix: 0,
    "triple-equals": 0,
    "valid-typeof": 1,

    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "always" },
    ],
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/ordered-imports": 0,
    "@typescript-eslint/object-literal-sort-keys": 0,
    "@typescript-eslint/jsx-no-lambda": 0,
    "@typescript-eslint/jsx-boolean-value": 0,
    "@typescript-eslint/await-thenable": 0,
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/type-annotation-spacing": 1,
    "@typescript-eslint/arrow-return-shorthand": 0,
    "@typescript-eslint/class-name-casing": 0,
    "@typescript-eslint/curly": 0,
    "@typescript-eslint/forin": 0,
    "@typescript-eslint/import-blacklist": [0],
    "@typescript-eslint/interface-over-type-literal": 0,
    "@typescript-eslint/max-line-length": [0],
    "@typescript-eslint/member-access": 0,
    "@typescript-eslint/member-ordering": 1,
    "@typescript-eslint/no-empty": 0,
    "@typescript-eslint/no-inferrable-types": [0],
    "@typescript-eslint/no-misused-new": 1,
    "@typescript-eslint/no-string-literal": 0,
    "@typescript-eslint/no-throw-literal": 1,
    "@typescript-eslint/no-submodule-imports": 0,
    "@typescript-eslint/no-implicit-dependencies": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/prefer-const": 0,
    "@typescript-eslint/prefer-conditional-expression": 0,
    "@typescript-eslint/unified-signatures": 1,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/camelcase": 0,

    "react-native/no-unused-styles": ["error", 2],
    "react-native/no-raw-text": ["error", 2],
    "react-native/no-inline-styles": ["error", 2],
    "react-native/split-platform-components": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-single-element-style-arrays": 2,

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};