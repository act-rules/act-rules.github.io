const htmlTags = require('html-tags')
const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')
const getAllMatchesForRegex = require('../utils/get-all-matches-for-regex')

const htmlTagsWithAngleBrackets = htmlTags.map(tag => `<${tag}>`)
describe(`Validate HTML Tags for no '<>' angle brackets`, () => {
	/**
	 * Rules, files under `_rules/*.md
	 */
	describeRule(`Rules`, ({ markdownAST, frontmatter, body }) => {
		const { name, description } = frontmatter
		validateHtmlTags(name)
		validateHtmlTags(description)
		validateHtmlTags(body)
	})
	/**
	 * Pages, files under `pages/*.md`
	 */
})

function validateHtmlTags(text) {
	// todo: this needs to not interpret code snippets
	const matches = getAllMatchesForRegex(/\<(.*?)\>/, text, false)
	if (!matches || !matches.length) {
		return
	}

	const blocks = matches.map(({ block }) => block)
	test.each(blocks)('%s', block => {
		expect(htmlTagsWithAngleBrackets.includes(block)).toBe(false)
	})
}
