const flat = require('flat')
const isUrl = require('is-url')
const {
	www: { url: siteUrl },
} = require('./../../package.json')

/**
 * Given an assertion object
 * - get `source`, which resembles closest to the url of the testcase
 *
 * Achieved by
 * - flatten the given object
 * - and verity if values are of type `url` and has `siteUrl`
 * @param {Object} assertion assertion
 */
const getAssertionSource = assertion => {
	const flattenedAssertion = flat(assertion)
	return Object.values(flattenedAssertion).find(value => {
		return isUrl(value) && value.includes(siteUrl)
	})
}

module.exports = getAssertionSource
