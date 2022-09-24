import {createEslintRule} from '../utils';

export const RULE_NAME = 'no-unassigned-todo';
export type MessageIds = 'no unassigned todo comment';
export type Options = [
  {
    disallow: string[];
  },
];
const DEFAULT_OPTIONS: Options[0] = {disallow: ['todo']};

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'no unassigned todo comment',
      recommended: 'error',
    },
    hasSuggestions: true,
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          disallow: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      'no unassigned todo comment': 'Expect no unassigned todo comment',
    },
  },
  defaultOptions: [DEFAULT_OPTIONS],
  create: (context) => {
    function findComments(comment) {
      const [{disallow}] = context.options;

      for (const ban of disallow) {
        if (comment.value.toLowerCase().includes(ban) && !comment.value.toLowerCase().includes('@')) {
          context.report({
            node: comment,
            messageId: 'no unassigned todo comment',
          });
        }
      }
    }
    return {
      Program(node) {
        const code = context.getSourceCode();
        const comments = code.getAllComments();
        for (const comment of comments) {
          findComments(comment);
        }
      },
    };
  },
});
