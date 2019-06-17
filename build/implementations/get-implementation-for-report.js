const getAssertions = require('./get-assertions')
const getTestcasesGroupedByRule = require('./get-testcases-grouped-by-rule')
const getRuleMapping = require('./get-rule-mapping')

/**
 * Get implementation metric from submitted report
 *
 * @param {Object|Array<Objects>} reports implementation reports
 */
const getImplementationForReport = async reports => {
	const assertions = getAssertions(reports)
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

module.exports = getImplementationForReport
