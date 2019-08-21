const describeRule = require('../../test-utils/describe-rule')
const markdownLinkExtractor = require('markdown-link-extractor')
const isUrl = require('is-url')

const blacklistOfLinks = [
	'://www.w3.org/TR/WCAG20/',
	'://www.w3.org/TR/UNDERSTANDING-WCAG20/',
	'://www.w3.org/TR/WCAG20-TECHS/',
	'://www.w3.org/TR/wai-aria-1.0/',
	'://www.w3.org/TR/dom41/',
	'://www.w3.org/TR/html/'
]

describeRule('hyperlinks', ruleData => {
	const { body } = ruleData

	const hyperlinks = markdownLinkExtractor(body).filter(link => isUrl(link))

	/**
	 * Check that none of links point to WCAG20
	 */
	test.each(hyperlinks)('hyperlink does not resolve to outdated content - `%s`', link => {
		const hasBadLink = blacklistOfLinks.some(blackLink => link.includes(blackLink))
		expect(hasBadLink).toBe(false)
	})
})
