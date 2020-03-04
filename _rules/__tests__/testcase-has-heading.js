const describeRule = require('../../test-utils/describe-rule')
const getMarkdownAstNodesOfType = require('../../utils/get-markdown-ast-nodes-of-type')

describeRule('testcase has heading', ({ filename, markdownAST }) => {
	/**
	 * get all headings of test case examples (eg: #### Failed Example 1)
	 */
	const testcaseHeadings = getMarkdownAstNodesOfType(markdownAST, 'heading')
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
	const testcaseCodeSnippets = getMarkdownAstNodesOfType(markdownAST, 'code')

	/**
	 * Check if filename has `id` as a part of the name
	 */
	test('each testcase has a heading', () => {
		const msg = `Not all test cases have headings in ${filename}.`
		expect(testcaseHeadings.length, msg).toBe(testcaseCodeSnippets.length)
	})
})
