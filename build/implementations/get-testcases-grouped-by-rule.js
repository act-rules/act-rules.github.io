const testcasesData = require('./../../public/testcases.json')

/**
 * Get testcases of rules
 * - group them by `ruleId`
 */
const getTestcasesGroupedByRule = () => {
	const { testcases } = testcasesData

	return testcases.reduce((out, testcase) => {
		const { ruleId } = testcase
		if (!out[ruleId]) {
			out[ruleId] = []
		}
		out[ruleId].push(testcase)
		return out
	}, {})
}

module.exports = getTestcasesGroupedByRule
