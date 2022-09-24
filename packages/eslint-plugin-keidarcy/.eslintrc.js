module.exports = {
  extends: ['@keidarcy/eslint-config/presets/node-prettier', 'plugin:keidarcy/recommended'],
  plugins: ['keidarcy'],
  rules: {
    'keidarcy/no-bad-hello': 'error',
  },
};
