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

/**
 * Extract a number from a given string
 * @param {String} str given string
 * @returns {Number}
 */
const extractNumberFromGivenString = (str) => {
	const match = str.match(/\d+/)[0]
	return parseInt(match)
}

/**
 * Check if a given array has duplicates
 * @param {Array<Object>} array arr
 * @returns {Boolean}
 */
const arrayHasDuplicates = (array) => {
	return (new Set(array)).size !== array.length;
}

/**
 * Check if a given array of numbers is in ascending order
 * @param {Array<Number>} arr array of numbers to verify if they are ascending
 * @returns {Boolean}
 */
const isAscending = arr => {
	return arr.slice(1)
		.map((e, i) => e > arr[i])
		.every(x => x);
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

	test('"Passed" headings have no duplicates', () => {
		expect(arrayHasDuplicates(h4PassedHeadingsIndices)).toBe(false)
	})
	test('"Passed" headings are in ascending order', () => {
		expect(isAscending(h4PassedHeadingsIndices)).toBe(true)
	})

	test('"Failed" headings have no duplicates', () => {
		expect(arrayHasDuplicates(h4FailedHeadingsIndices)).toBe(false)
	})
	test('"Failed" headings are in ascending order', () => {
		expect(isAscending(h4PassedHeadingsIndices)).toBe(true)
	})

	test('"Inapplicable" headings have no duplicates', () => {
		expect(arrayHasDuplicates(h4InapplicableHeadingsIndices)).toBe(false)
	})
	test('"Inapplicable" headings are in ascending order', () => {
		expect(isAscending(h4PassedHeadingsIndices)).toBe(true)
	})
})