import noBadHello from './rules/no-bad-hello';
import noUnAssignedTodo from './rules/no-unassigned-todo';

export default {
  rules: {
    'no-bad-hello': noBadHello,
    'no-unassigned-todo': noUnAssignedTodo,
  },
  configs: {
    recommended: {
      rules: {
        'keidarcy/no-unassigned-todo': ['error', {disallow: ['todo', 'fixme']}],
      },
    },
  },
};
