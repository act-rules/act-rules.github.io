const marked = require('marked')
const describeRule = require('../../test-utils/describe-rule')

/**
 * Get headings  from a given body of text
 * @method getAllHeadingsFromMarkdownBody
 * @param {String} body text content of markdown file
 * @returns {Array<Object>} list of headings
 */
const getAllHeadingsFromMarkdownBody = body => {
	const lexer = new marked.Lexer({})
	const tokens = lexer.lex(body)
	return tokens.reduce((out, token, index) => {
		const { type } = token
		if (type === `heading`) {
			out.push({
				...token,
				number: index, // populate with line number, to check for ordering
			})
		}
		return out
	}, [])
}

const extractNumberFromGivenString = str => {
	return str.match(/\d+/)[0]
}

const arrayHasDuplicates = array => {
	return new Set(array).size !== array.length
}

/**
 * Get `text` of headings of given depth
 * @param {Array<Object>} headings list of headings
 * @param {Number} headingDepth given depth of heading
 * @returns {Array<String>} al headings matching given depth
 */
const getHeadingOfDepth = (headings, headingDepth) => {
	return headings.filter(({ depth }) => depth === headingDepth).map(({ text }) => text)
}

describeRule('headings', ruleData => {
	const { body } = ruleData
	const headings = getAllHeadingsFromMarkdownBody(body)

	/**
	 * Check for `required` `h2` headings
	 */
	const requiredH2 = [`Applicability`, `Assumptions`, `Accessibility Support`, `Background`, `Test Cases`]
	const h2Headings = getHeadingOfDepth(headings, 2)
	test.each(requiredH2)('has required `h2` - `%s`', heading => {
		expect(h2Headings).toContain(heading)
	})

	/**
	 * Check for `required` `h3` headings
	 */
	const requiredH3 = [`Passed`, `Failed`, `Inapplicable`]
	const h3Headings = getHeadingOfDepth(headings, 3)
	test.each(requiredH3)('has required `h2` - `%s`', heading => {
		expect(h3Headings).toContain(heading)
	})

	/**
	 * Check all `h4` headings
	 */

	/**
	 * Test if headings have expected string
	 */
	const h4Headings = getHeadingOfDepth(headings, 4)
	const h4PassedHeadings = h4Headings.filter(heading => heading.includes('Pass'))
	const h4FailedHeadings = h4Headings.filter(heading => heading.includes('Fail'))
	const h4InapplicableHeadings = h4Headings.filter(heading => heading.includes('Inapplicable'))

	test.each(h4PassedHeadings)('has keyword "Passed Example" - %s', heading => {
		expect(heading.includes('Passed Example')).toBe(true)
	})
	test.each(h4FailedHeadings)('has keyword "Failed Example" - %s', heading => {
		expect(heading.includes('Failed Example')).toBe(true)
	})
	test.each(h4InapplicableHeadings)('has keyword "Inapplicable Example" - %s', heading => {
		expect(heading.includes('Inapplicable Example')).toBe(true)
	})

	/**
	 * Test if heading indices are not duplicated
	 */
	const h4PassedHeadingsIndices = h4PassedHeadings.map(extractNumberFromGivenString)
	const h4FailedHeadingsIndices = h4FailedHeadings.map(extractNumberFromGivenString)
	const h4InapplicableHeadingsIndices = h4InapplicableHeadings.map(extractNumberFromGivenString)

	test('has no duplicate "Passed" testcase example headings', () => {
		expect(arrayHasDuplicates(h4PassedHeadingsIndices)).toBe(false)
	})
	test('has no duplicate "Failed" testcase example headings', () => {
		expect(arrayHasDuplicates(h4FailedHeadingsIndices)).toBe(false)
	})
	test('has no duplicate "Inapplicable" testcase example headings', () => {
		expect(arrayHasDuplicates(h4InapplicableHeadingsIndices)).toBe(false)
	})
})
