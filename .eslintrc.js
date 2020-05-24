module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react",
    "jsx-a11y",
    "react-hooks",
    "emotion"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json"
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "func-names": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "emotion/jsx-import": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": [2, "string"],
    "emotion/no-vanilla": "error",
  }
};
