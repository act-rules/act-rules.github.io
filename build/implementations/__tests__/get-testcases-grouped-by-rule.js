const getRulesMarkdownData = require('../../../utils/get-rules-markdown-data')
const getTestcasesGroupedByRule = require('../get-testcases-grouped-by-rule')

describe('getTestcasesGroupedByRule', () => {
	it('should have testcases for every rule', () => {
		const rules = getRulesMarkdownData()
		const groupedTestcases = getTestcasesGroupedByRule()
		expect(rules.length).toEqual(Object.keys(groupedTestcases).length)
	})
})
