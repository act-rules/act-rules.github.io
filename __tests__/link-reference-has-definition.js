/**
 * Note:
 *
 * In markdownAST,
 * a link reference is something like [alpha][Bravo], and
 * a definition is something like [Alpha]: https://example.com
 *
 * See: https://github.com/syntax-tree/mdast#nodes
 *
 * This test chceks that there is a definition in the markdown file for every given link reference
 * The test does not verify the integrity of the referred definition, but purely for an existence of a definition
 */
const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')
const getMarkdownAstNodesOfType = require('../utils/get-markdown-ast-nodes-of-type')
const uniqueArray = require('../utils/unique-array')

describe(`Validate link references`, () => {
	describeRule('Rules', ({ markdownAST }) => validateLinkReferences(markdownAST))
	describePage('Rules', ({ markdownAST }) => validateLinkReferences(markdownAST))
})

function validateLinkReferences(markdownAST) {
	const linkReferences = uniqueArray(
		getMarkdownAstNodesOfType(markdownAST, 'linkReference').map(({ identifier }) => identifier)
	)
	if (!linkReferences || !linkReferences.length) {
		return
	}

	const definitions = uniqueArray(
		getMarkdownAstNodesOfType(markdownAST, 'definition').map(({ identifier }) => identifier)
	)

	test.each(linkReferences)('%s', linkRef => {
		const actual = definitions.includes(linkRef)
		const msg = `Link reference -> [${linkRef}] is not defined`
		expect(actual, msg).toBe(true)
	})
}
