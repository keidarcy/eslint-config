const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: true,
};

function create(context) {
  return {
    FunctionDeclaration: function (node) {
      console.log(node);
      if (node.id.name === 'badHello') {
        context.report({
          node,
          message: 'no badHello function declaration',
          fix: function (fixer) {
            return fixer.replaceText(node.id, 'niceHello');
          },
        });
      }
    },
    CallExpression: function (node) {
      if (node.callee.name === 'badHello') {
        context.report({
          node: node,
          message: 'no bad hello call',
          fix: function (fixer) {
            return fixer.replaceText(node.callee, 'niceHello');
          },
        });
      }
    },
  };
}

const noBadHello = {
  meta,
  create,
};

module.exports = {
  rules: {
    'no-bad-hello': noBadHello,
  },
};
