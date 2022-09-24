const noBadHello = require('./lib/no-bad-hello');
const noUnAssisngedTodo = require('./lib/no-unassigned-todo');

module.exports = {
  rules: {
    'no-bad-hello': noBadHello,
    'no-un-assigned-todo': noUnAssisngedTodo,
  },
  // 'plugin:keidarcy/recommended' will enable all config below.
  configs: {
    recommended: {
      rules: {
        'keidarcy/no-un-assigned-todo': ['error', 'todo', 'fixme'],
      },
    },
  },
};
