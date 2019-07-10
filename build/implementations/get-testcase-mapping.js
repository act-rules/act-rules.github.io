const getAssertionSource = require('./get-assertion-source')

/**
 * Utility fn to get  title from assertion
 *
 * @param {Object} assertion assertion
 * @returns {String}
 */
const getTitleFromAssertion = assertion => {
	const { test, EMTest } = assertion
	if (!test) {
		return EMTest || null
	}
	if (typeof test === 'string') {
		return test
	}
	if (test.title) {
		return test.title
	}
	return test['@id'] || ''
}

/**
 * Get mapping for a given testcase
 *
 * @param {Object} assertion assertion
 * @param {Object} tc testcase
 */
const getTestcaseMapping = (assertion, { expected }) => {
	return {
		title: getTitleFromAssertion(assertion),
		url: getAssertionSource(assertion),
		expected: expected,
		actual: assertion.result.outcome.replace('earl:', ''),
	}
}

module.exports = getTestcaseMapping
