const getAssertionSource = require('./get-assertion-source')

/**
 * Get all assertions for given testcase
 *
 * @param {Array<Object>} assertions assertions
 * @param {String} relativeUrl relative url of testcase
 */
const getTestcaseAssertions = (assertions, relativeUrl) => {
	const testcaseAssertions = assertions.filter(assertion => {
		const source = getAssertionSource(assertion)
		if (!source) {
			return false
		}
		return source.includes(relativeUrl)
	})
	return testcaseAssertions
}

module.exports = getTestcaseAssertions
