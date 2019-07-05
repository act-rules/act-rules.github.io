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
	const { subject = undefined } = assertion

	if (!subject) {
		throw new Error(`No 'subject' property in assertion`)
	}

	if (typeof subject === 'string') {
		return subject
	}

	const { source = undefined } = subject

	if (!source) {
		const sourceKey = Object.keys(subject).find(k => k.includes('source'))

		if (!sourceKey) {
			if (subject.hasOwnProperty(`@id`)) {
				return subject['@id']
			}
			throw new Error(`No 'source' or '@id' property in subject of assertion`)
		}

		return subject[sourceKey]
	}

	if (typeof source === 'object') {
		return source['@id']
	}

	return source
}

module.exports = getAssertionSource