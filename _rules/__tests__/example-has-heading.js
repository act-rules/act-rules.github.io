const describeRule = require('../../test-utils/describe-rule')
const getMarkdownAstNodesOfType = require('../../utils/get-markdown-ast-nodes-of-type')

describeRule('example has heading', ({ filename, markdownAST }) => {
	/**
	 * get all headings of examples (eg: #### Failed Example 1)
	 */
	const exampleHeadings = getMarkdownAstNodesOfType(markdownAST, 'heading')
		.filter(({ depth, children }) => {
			return depth === 4 && children && children.length > 0
		})
		.map(({ children }) => {
			const [textNode] = children
			return textNode.value
		})

	/**
	 * get code blocks in markdown body
	 */
	const exampleCodeSnippets = getMarkdownAstNodesOfType(markdownAST, 'code')

	/**
	 * Check if filename has `id` as a part of the name
	 */
	test('each example has a heading', () => {
		const msg = `Not all examples have headings in ${filename}.`
		expect(exampleHeadings.length, msg).toBe(exampleCodeSnippets.length)
	})
})
