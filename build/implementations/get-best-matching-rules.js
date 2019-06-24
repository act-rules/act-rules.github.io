/**
 * Given a set of assertion results, get best fit, based on outcome mapping
 *
 * @param {Array<Object>} ruleAsserts mapped assertions
 */
const getBestMatchingRules = ruleAsserts => {
	const mappedRules = ruleAsserts.filter(({ mapping }) => mapping !== false)
	if (!mappedRules) {
		return
	}

	const completeRules = mappedRules.filter(({ complete }) => complete === true)
	if (!completeRules.length) {
		return mappedRules
	}

	return completeRules
}

module.exports = getBestMatchingRules
