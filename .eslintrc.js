module.exports = {
  root: true,
  // settings: {
  //   "import/resolver": {
  //     webpack: {
  //       config: "build/webpack.base.config.js",
  //     },
  //   },
  // },
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  // "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["import", "react", "react-hooks", "jsx-a11y"],
  rules: {
    indent: ["error", 2],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
      },
    ],
    semi: [0, "always"],
    quotes: ["off", "double"],
    "no-unused-vars": 0,
    "no-console": ["off"],
    "no-undef": ["off"],
    // 'indent': 'off'
  },
};
