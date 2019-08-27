const describeRule = require('../../test-utils/describe-rule')
const markdownLinkExtractor = require('markdown-link-extractor')
const isUrl = require('is-url')

const blacklistLinksAndRecommendations = {
	'://www.w3.org/TR/WCAG20/': 'Use WCAG 2.1 reference- https://www.w3.org/WAI/WCAG21/',
	'://www.w3.org/TR/UNDERSTANDING-WCAG20/': 'Use WCAG 2.1 reference - https://www.w3.org/WAI/WCAG21/Understanding/',
	'://www.w3.org/TR/WCAG20-TECHS/': 'Use WCAG 2.1 reference - https://www.w3.org/WAI/WCAG21/Techniques/',
	'://www.w3.org/TR/wai-aria-1.0/': 'Use ARIA 1.1 reference - https://www.w3.org/TR/wai-aria-1.1/',
	'://www.w3.org/TR/dom41/': 'Use http://dom.spec.whatwg.org',
	'://www.w3.org/TR/html/': 'Use http://html.spec.whatwg.org'
};

describeRule('hyperlinks', ruleData => {
	const { body } = ruleData
	const hyperlinks = markdownLinkExtractor(body).filter(link => isUrl(link))

	/**
	 * Check that none of links point to WCAG20
	 */
	test.each(hyperlinks)('hyperlink does not resolve to outdated content - `%s`', link => {
		const badLinks = Object.keys(blacklistLinksAndRecommendations)
		const hasBadLink = badLinks.some(badlink => {
			if(link.includes(badlink)) {
				const recommendation = blacklistLinksAndRecommendations[badlink]
				console.log(recommendation)
				return true
			}
			return false
		})
		expect(hasBadLink).toBe(false)
	})
})
