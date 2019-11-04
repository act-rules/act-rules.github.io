const getRulesMarkdownData = require('../utils/get-rules-markdown-data')

/**
 * Get ids of rules that are of given type
 * @param {Array<Object>} rules list of rules
 * @param {String} ruleType type of rule
 */
const getRuleIdsOfRuleType = (rules, ruleType) => {
	return rules.reduce((out, ruleData) => {
		const { frontmatter } = ruleData
		const { rule_type, id } = frontmatter
		if (rule_type === ruleType) {
			out.push(id)
		}
		return out
	}, [])
}

/**
 * describe rule helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describe` block, which executes per rule
 */
const describeRule = (groupName, runTests) => {
	const rules = getRulesMarkdownData()

	/**
	 * Create arbitrary meta data that can be used in various tests
	 */
	const atomicRuleIds = getRuleIdsOfRuleType(rules, 'atomic')
	const metaData = {
		atomicRuleIds,
	}

	rules.forEach(ruleData => {
		const { filename } = ruleData
		describe(filename, () => {
			describe(groupName, () => {
				runTests(ruleData, metaData)
			})
		})
	})
}

module.exports = describeRule
