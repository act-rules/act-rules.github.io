const assert = require('assert')
const visit = require('unist-util-visit')
/**
 * Helper function to get all the nodes of a given type from markdown AST
 * - https://github.com/syntax-tree/mdast#nodes
 *
 * @param {Object} markdownAST markdown AST
 * @param {String} type AST type
 * @return {Array}
 */
const getMarkdownAstNodesOfType = (markdownAST, type = undefined) => {
	const nodes = []
	if (!markdownAST || !type) {
		return nodes
	}

	visit(markdownAST, type, node => {
		nodes.push(node)
	})
	return nodes
}

module.exports = getMarkdownAstNodesOfType
