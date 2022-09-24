const {RuleTester} = require('eslint');
import {it} from 'vitest';
const rule = require('./no-unassigned-todo');

const test = new RuleTester({});

it('runs', () => {
  test.run('no-optional-call', rule, {
    valid: [
      {
        code: '// TODO(@keidarcy): fix this',
        options: ['todo', 'fixme'],
      },
    ],
    invalid: [
      {
        code: '// TODO: add this',
        options: ['todo', 'fixme'],
        errors: ['todo comments are not allowed'],
      },
    ],
  });
});
