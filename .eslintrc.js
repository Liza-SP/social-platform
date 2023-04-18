module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    // 'standard-with-typescript'
    'airbnb',
    'plugin:i18next/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: 'true',
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'no-unused-vars': 'warn',
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 1,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'max-len': ['error', { code: 141, ignoreComments: true }],
    'no-promise-executor-return': 'warn',
    'implicit-arrow-linebreak': 'warn',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
  },
  settings: {
  },
  globals: {
    __IS_DEV__: true,
  },
};
