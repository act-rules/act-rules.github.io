/**
 * Note:
 * This is a top level test suite, which runs across all the markdown pages under `_rules`, `pages` etc.,
 * which is why this is not scoped under `__tests__` within any of those sections.
 */

const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')
const isUrl = require('is-url')
const getMarkdownAstNodesOfType = require('../utils/get-markdown-ast-nodes-of-type')
const uniqueArray = require('../utils/unique-array')

/**
 * Map of bad links vs their recommendations
 */
const badLinksAndRecommendations = {
	'://www.w3.org/TR/WCAG20/': 'Use WCAG 2.1 reference- https://www.w3.org/WAI/WCAG21/',
	'://www.w3.org/TR/UNDERSTANDING-WCAG20/': 'Use WCAG 2.1 reference - https://www.w3.org/WAI/WCAG21/Understanding/',
	'://www.w3.org/TR/WCAG20-TECHS/': 'Use WCAG 2.1 reference - https://www.w3.org/WAI/WCAG21/Techniques/',
	'://www.w3.org/TR/wai-aria-1.0/': 'Use ARIA 1.1 reference - https://www.w3.org/TR/wai-aria-1.1/',
	'://www.w3.org/TR/dom41/': 'Use http://dom.spec.whatwg.org',
	'://www.w3.org/TR/html/': 'Use http://html.spec.whatwg.org',
}

/**
 * Validate `Rules` and `Pages` markdown files
 */
describe('Validate links are not outdated', () => {
	describeRule('Rules', ({ markdownAST }) => validateIfLinksAreOutdated(markdownAST))
	describePage('Pages', ({ markdownAST }) => validateIfLinksAreOutdated(markdownAST))
})

function validateIfLinksAreOutdated(markdownAST) {
	/**
	 * get all links
	 * -> eg: [Alpha](https://....)
	 */
	const pageLinks = getMarkdownAstNodesOfType(markdownAST, 'link').map(({ url }) => url)
	/**
	 * get all definition links
	 * -> eg: [Alpha]: https:// 'Link to something'
	 */
	const definitionLinks = getMarkdownAstNodesOfType(markdownAST, 'definition').map(({ url }) => url)

	/**
	 * get all links that is a valid
	 * -> this test does not cover glossary/ definition referencing links (see test - 'link-to-glossary-term-valid.js')
	 */
	const links = uniqueArray([...pageLinks, ...definitionLinks].filter(isUrl))
	if (!links || !links.length) {
		return
	}

	test.each(links)('%s', link => {
		const badLink = Object.keys(badLinksAndRecommendations).find(badLink => link.includes(badLink))
		expect(!!badLink, badLinksAndRecommendations[badLink]).toBe(false)
	})
}
