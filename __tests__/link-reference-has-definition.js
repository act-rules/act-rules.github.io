/**
 * Note:
 *
 * In markdownAST,
 * a link reference is something like [Alpha][Bravo] or [Alpha][], and
 * a definition is something like [alpha]: https://example.com
 *
 * See: https://github.com/syntax-tree/mdast#nodes
 *
 * This test checks that there is a definition in the markdown file for every given link reference
 * The test does not verify the integrity of the referred definition, but purely for an existence of a definition
 */
const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')
const getMarkdownAstNodesOfType = require('../utils/get-markdown-ast-nodes-of-type')
const uniqueArray = require('../utils/unique-array')

describe(`Validate link references`, () => {
	describeRule('Rules', ({ markdownAST }) => validateLinkReferences(markdownAST))
	// describePage('Pages', ({ markdownAST }) => validateLinkReferences(markdownAST))
})

function validateLinkReferences(markdownAST) {
	const linkReferences = uniqueArray(
		getMarkdownAstNodesOfType(markdownAST, 'linkReference').map(({ identifier }) => identifier.replace(/`/g, ''))
	)
	if (!linkReferences || !linkReferences.length) {
		return
	}

	const definitions = uniqueArray(
		getMarkdownAstNodesOfType(markdownAST, 'definition').map(({ identifier }) => identifier.replace(/`/g, ''))
	)

	test.each(linkReferences)('%s', linkRef => {
		const actual = definitions.includes(linkRef)
		const msg = `Link reference -> [${linkRef}] is not defined`
		expect(actual, msg).toBe(true)
	})

	test.each(definitions)('%s', dfn => {
		const actual = linkReferences.includes(dfn)
		const msg = `Definition -> [${dfn}] is declared but not used`
		expect(actual, msg).toBe(true)
	})
}
