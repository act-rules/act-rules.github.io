/**
 * Note:
 * This is a top level test suite, which runs across all the markdown pages under `_rules`, `pages` etc.,
 * which is why this is not scoped under `__tests__` within any of those sections.
 */
const markdownLinkExtractor = require('markdown-link-extractor')
const isUrl = require('is-url')

const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')

const badLinksAndRecommendations = {
	'://www.w3.org/TR/WCAG20/': 'Use WCAG 2.1 reference- https://www.w3.org/WAI/WCAG21/',
	'://www.w3.org/TR/UNDERSTANDING-WCAG20/': 'Use WCAG 2.1 reference - https://www.w3.org/WAI/WCAG21/Understanding/',
	'://www.w3.org/TR/WCAG20-TECHS/': 'Use WCAG 2.1 reference - https://www.w3.org/WAI/WCAG21/Techniques/',
	'://www.w3.org/TR/wai-aria-1.0/': 'Use ARIA 1.1 reference - https://www.w3.org/TR/wai-aria-1.1/',
	'://www.w3.org/TR/dom41/': 'Use http://dom.spec.whatwg.org',
	'://www.w3.org/TR/html/': 'Use http://html.spec.whatwg.org'
};

/**
 * Find first matching bad link for a given link
 * @param {String} link link url
 * @returns {String}
 */
const getBadLink = link => {
	return Object.keys(badLinksAndRecommendations)
		.find(badLink => link.includes(badLink))
}

/**
 * Test markdown body for outdated links
 * @param {String} param markdown body
 */
const validateMarkdownBody = ({ body }) => {
	const hyperlinks = markdownLinkExtractor(body).filter(link => isUrl(link))
	if (!hyperlinks || !hyperlinks.length) {
		return
	}
	test.each(hyperlinks)('%s', link => {
		const badLink = getBadLink(link)
		const recommendation = badLinksAndRecommendations[badLink]
		expect(!!badLink, recommendation).toBe(false)
	})
}

/**
 * Validate `Rules` and `Pages` markdown files
 */
describe('Validate hyperlinks are not outdated', () => {
	describeRule('hyperlinks', ruleData => validateMarkdownBody(ruleData))
	describePage('hyperlinks', pageData => validateMarkdownBody(pageData))
})
