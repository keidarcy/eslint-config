module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  // It's 5〜10x slower with the project setting.
  // parserOptions: {
  //   project: "./tsconfig.json"
  // },
  rules: {
    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/indent': ['warn', 2, {SwitchCase: 1}],
    'no-shadow': 'off', // replaced by ts-eslint rule below
    '@typescript-eslint/no-shadow': 'error',
  },
};
