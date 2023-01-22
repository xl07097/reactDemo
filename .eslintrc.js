module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'react-hooks'],
  rules: {
    indent: ['error', 2],
    semi: [0, 'always'],
    quotes: ['off', 'double'],
    'no-unused-vars': 0,
    'no-console': ['off'],
    'no-undef': ['off'],
    'react/display-name': [0],
    'react/prop-types': 'off',
    // 'indent': 'off'
  },
}
