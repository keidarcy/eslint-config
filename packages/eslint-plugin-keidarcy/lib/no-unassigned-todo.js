const meta = {
  type: 'problem',
  hasSuggestions: true,
  fixable: true,
};

function create(context) {
  function findComments(comment) {
    for (const ban of context.options) {
      if (comment.value.toLowerCase().includes(ban) && !comment.value.toLowerCase().includes('@')) {
        context.report({
          node: comment,
          message: `${ban} comments are not allowed`,
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
}

module.exports = {
  meta,
  create,
};
