module.exports = {
  plugins: ['n', 'promise'],
  rules: {
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',

    'promise/param-names': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
