import {RuleTester} from '@typescript-eslint/utils/dist/ts-eslint';
import {it} from 'vitest';
import rule, {RULE_NAME} from './no-unassigned-todo';

it('runs', () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid: [
      {
        code: '// TODO(@keidarcy): fix this',
        options: [{disallow: ['todo', 'fixme']}],
      },
      {
        code: '// ADD: fix this',
        options: [{disallow: ['todo', 'fixme']}],
      },
    ],
    invalid: [
      {
        code: '// TODO: add this',
        options: [{disallow: ['todo', 'fixme']}],
        errors: [{messageId: 'no unassigned todo comment'}],
      },
      {
        code: '// ADD: add this',
        options: [{disallow: ['add', 'fixme']}],
        errors: [{messageId: 'no unassigned todo comment'}],
      },
    ],
  });
});
