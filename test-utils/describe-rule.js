const { contributors } = require('../package.json')
const getMarkdownData = require('../utils/get-markdown-data')
const rulesData = getMarkdownData(`./_rules`)

/**
 * describe rule helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describe` block, which executes per rule
 */
const describeRule = (groupName, runTests) => {
	/**
	 * Create arbitrary meta data that can be used in various tests
	 */
	const metaData = {
		contributors: contributors.map(contributor => contributor.name.toLowerCase()),
		atomicRuleIds: getRuleIdsOfRuleType(rulesData, 'atomic'),
		glossaryKeys: getMarkdownData(`./pages/glossary`).map(({ frontmatter }) => frontmatter.key),
	}

	rulesData.forEach(ruleData => {
		const { filename } = ruleData
		describe(filename, () => {
			describe(groupName, () => {
				runTests(ruleData, metaData)
			})
		})
	})
}

module.exports = describeRule

/**
 * Get ids of rules that are of given type
 * @param {Array<Object>} data markdown data of all rules
 * @param {String} ruleType type of rule
 */
function getRuleIdsOfRuleType(data, ruleType) {
	return data.reduce((out, ruleData) => {
		const { frontmatter } = ruleData
		const { rule_type, id } = frontmatter
		if (rule_type === ruleType) {
			out.push(id)
		}
		return out
	}, [])
}
