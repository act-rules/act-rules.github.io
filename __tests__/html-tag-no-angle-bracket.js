const htmlTags = require('html-tags')
const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')
const getAllMatchesForRegex = require('../utils/get-all-matches-for-regex')
const getMarkdownAstNodesOfType = require('../utils/get-markdown-ast-nodes-of-type')
const htmlTagsWithAngleBrackets = htmlTags.map(tag => `<${tag}>`)

describe(`Validate HTML Tags for no '<>' angle brackets`, () => {
	/**
	 * Rules, files under `_rules/*.md
	 */
	describeRule(`Rules`, ({ markdownAST, frontmatter }) => {
		const { name, description } = frontmatter

		/**
		 * Validate name & description from frontmatter
		 */
		testForAngleBracketsAroundTags(getTextSurroundedByAngleBrackets(name))
		testForAngleBracketsAroundTags(getTextSurroundedByAngleBrackets(description))
		// get all text, html, and inlineCode used in markdown body and construct as a string to be validated
		const body = getMarkdownAstNodesOfType(markdownAST, ['text', 'html', 'inlineCode'])
			.map(({ value }) => value)
			.join('\n')
		testForAngleBracketsAroundTags(getTextSurroundedByAngleBrackets(body))
	})

	/**
	 * Pages, files under `pages/*.md`
	 */
	describeRule(`Pages`, ({ markdownAST, frontmatter }) => {
		const { title } = frontmatter

		/**
		 * Validate title
		 */
		testForAngleBracketsAroundTags(getTextSurroundedByAngleBrackets(title))
		// get all text, html, and inlineCode used in markdown body and construct as a string to be validated
		const body = getMarkdownAstNodesOfType(markdownAST, ['text', 'html', 'inlineCode'])
			.map(({ value }) => value)
			.join('\n')
		testForAngleBracketsAroundTags(getTextSurroundedByAngleBrackets(body))
	})
})

function getTextSurroundedByAngleBrackets(body) {
	if (!body || !body.length) {
		return []
	}

	const matches = getAllMatchesForRegex(/\<(.*?)\>(?!\<\/)/, body, false)
	if (!matches || !matches.length) {
		return []
	}

	const blocks = matches.map(({ block }) => block)
	return blocks || []
}

/**
 * Helper fn to assert a given text for usage of angle brackets
 * @param {String} text string
 */
function testForAngleBracketsAroundTags(items) {
	if (items.length) {
		test.each(items)('%s has no <> bracket', item => {
			const actual = htmlTagsWithAngleBrackets.includes(item)
			const msg = `${item} uses angle brackets`
			expect(actual, msg).toBe(false)
		})
	}
}
