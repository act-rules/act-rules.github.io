const getMarkdownData = require('../../utils/get-markdown-data')
const rulesData = getMarkdownData(`./_rules`)

describe('Rule ids verification', () => {
	const duplicates = rulesData.filter(
		(ruleData, idx) => rulesData.findIndex(r => r.frontmatter.id === ruleData.frontmatter.id) !== idx
	)

	test('Rule ids are unique', () => {
		expect(duplicates.length, `Duplicated rules: ${duplicates.map(ruleData => ruleData.filename).join(', ')}`).toBe(0)
	})
})
