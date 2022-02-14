const getMarkdownAstNodesOfType = require('../utils/get-markdown-ast-nodes-of-type')

/**
 * get the `id` of all html elements in the AST (notably the dfn elements)
 * -> eg: <dfn id="123456:anchor-name">
 */
function getIds(markdownAST) {
	return (
		// Find all HTML elements in the markdown
		getMarkdownAstNodesOfType(markdownAST, 'html')
			// Keep the ones with an `id` attribute
			.map(({ value }) => value.match(/id="([^"]*)"/))
			.filter(value => value !== null)
			// Only keep the matched group, aka the value of the `id` attribute
			.map(matches => matches[1])
	)
}

module.exports = getIds
