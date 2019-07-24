/**
 * Create rule usages
 * -> for each (atomic) rule (find references in each (composite) rule)
 * -> this is saved in `_data` which is later used in `pages/rules`
 */
const createFile = require('../utils/create-file')
const getRulesMarkdownData = require('../utils/get-rules-markdown-data')

const init = async () => {
	const rulesData = getRulesMarkdownData()
	let rulesUsages = {}

	rulesData.forEach(ruleData => {
		const { id: ruleId, name: ruleName, input_rules: inputRules } = ruleData.frontmatter

		if (!inputRules) {
			return
		}

		const usage = {
			name: ruleName,
			slug: `rules/${ruleId}`,
		}

		inputRules.forEach(key => 
			rulesUsages[key] = rulesUsages[key] ? rulesUsages[key].concat(usage) : [usage]
			)
		})

	/**
	 * Create `_data/rules-usages.json`
	 */
	await createFile(`./_data/rules-usages.json`, JSON.stringify(rulesUsages, undefined, 2))
}

/**
 * Invoke
 */
init()
	.then(() => console.info(`Completed: task: create:rules usages\n`))
	.catch(e => console.error(e))
