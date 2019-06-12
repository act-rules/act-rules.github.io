const getAssertions = require('./get-assertions')
const getTestcasesGroupedByRule = require('./get-testcases-grouped-by-rule')
const getRuleMapping = require('./get-rule-mapping')

/**
 * Get implementation metric from submitted report
 *
 * @param {Object|Array<Objects>} framedReports implementation reports
 */
const getImplementation = async framedReports => {
	const assertions = getAssertions(framedReports)
	const testcasesGroupedByRuleId = await getTestcasesGroupedByRule()

	return Object.keys(testcasesGroupedByRuleId)
		.map(ruleId => {
			const ruleTestcases = testcasesGroupedByRuleId[ruleId]
			const implementation = getRuleMapping(ruleTestcases, assertions)
			return {
				ruleId,
				implementation,
			}
		})
		.filter(result => result.implementation && result.implementation.length)
}

module.exports = getImplementation
