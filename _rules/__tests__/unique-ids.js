const getMarkdownData = require('../../utils/get-markdown-data')
const rulesData = getMarkdownData(`./_rules`)

describe('Rule ids verification', () => {
	const duplicates = rulesData.filter(
		ruleData => duplicate(rulesData, ruleData, (rule1, rule2) => rule1.frontmatter.id === rule2.frontmatter.id) !== 1
	)

	test('Rule ids are unique', () => {
		expect(duplicates.length, `Duplicated rules: ${duplicates.map(ruleData => ruleData.filename).join(', ')}`).toBe(0)
	})
})

function duplicate(array, element, test) {
	let found = 0

	for (let i = 0; i < array.length; i++) {
		if (test(element, array[i])) {
			found++
		}
	}

	return found
}
