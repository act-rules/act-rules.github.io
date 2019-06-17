/**
 * Create glossary usages
 * -> for each glossary item (find references in each rule)
 * -> this is saved in `_data` which is later used in `pages/glossary`
 */
const globby = require('globby')
const regexps = require('../utils/reg-exps')
const createFile = require('../utils/create-file')
const getAllMatchesForRegex = require('../utils/get-all-matches-for-regex')
const getMarkdownData = require('./../utils/get-markdown-data')

const init = async () => {
	/**
	 * Get all rules `markdown` data
	 */
	const rulesData = globby
		.sync([`./_rules/*.md`])
		.map(rulePath => getMarkdownData(rulePath))

	/**
	 * Eg:
	 * {
	 *  `non-empty`: [
	 *    { name: `aria valid ...`, slug: `rules/XXXXX` },
	 *    ....
	 *  ]
	 *  ....
	 * }
	 */
	const glossaryUsages = {}

	rulesData.forEach(ruleData => {
		const { frontmatter, body } = ruleData
		const {
			id: ruleId,
			name: ruleName,
			accessibility_requirements: ruleAccessibilityRequirements,
		} = frontmatter

		const glossaryMatches = getAllMatchesForRegex(
			regexps.glossaryReferenceInRules,
			body,
			false
		)

		glossaryMatches.forEach(glossaryItem => {
			const hasGlossaryKey = regexps.glossaryKey.test(glossaryItem.block)
			if (!hasGlossaryKey) {
				return
			}

			const key = glossaryItem.block.match(regexps.glossaryKey)[1]
			if (!key) {
				return
			}

			const usage = {
				name: ruleName,
				slug: `rules/${ruleId}`,
			}
			if (!glossaryUsages[key]) {
				glossaryUsages[key] = [usage]
				return
			}

			const exists = glossaryUsages[key].some(u => u.slug === usage.slug)
			if (exists) {
				return
			}

			glossaryUsages[key] = glossaryUsages[key].concat(usage)
		})
	})

	/**
	 * Create `_data/glossary-usages.json`
	 */
	await createFile(
		`./_data/glossary-usages.json`,
		JSON.stringify(glossaryUsages, undefined, 2)
	)
}

init()
	.then(() => console.info(`\nGenerated Glossary Usages Data.\n`))
	.catch(e => console.error(e))
