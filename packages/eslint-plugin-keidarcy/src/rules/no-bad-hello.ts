import {createEslintRule} from '../utils';

export const RULE_NAME = 'no-bad-hello';
export type MessageIds = 'no bad hello function';
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'No bad hello function',
      recommended: 'error',
    },
    hasSuggestions: true,
    fixable: 'code',
    schema: [],
    messages: {
      'no bad hello function': 'Expect no bad hello function',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      FunctionDeclaration: function (node) {
        if (node?.id?.name === 'badHello') {
          context.report({
            node,
            messageId: 'no bad hello function',
            fix: function (fixer) {
              return fixer.replaceText(node, 'niceHello');
            },
          });
        }
      },
    };
  },
});
