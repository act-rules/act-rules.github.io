/**
 * Create glossary usages
 * -> for each glossary item (find references in each rule)
 * -> this is saved in `_data` which is later used in `pages/glossary`
 */
const { config } = require('../package.json')
const regexps = require('../utils/reg-exps')
const createFile = require('../utils/create-file')
const getAllMatchesForRegex = require('../utils/get-all-matches-for-regex')
const getMarkdownData = require('../utils/get-markdown-data')

/**
 * Get usage meta data
 * @param {Object} frontmatter markdown frontmatter
 * @param {String} type key denoting type/ grouping of markdown data, to help parse frontmatter
 * @returns {Object|null}
 */
const getUsageMetaData = (frontmatter, type) => {
	switch (type) {
		case 'rule':
			const { id, name } = frontmatter
			return {
				name: name,
				slug: `rules/${id}`
			}
		case 'glossary':
			const { key } = frontmatter
			return {
				key: `#${key}`
			}
		default:
			return
	}
}

/**
 * Parse and find a given markdown content for references to glossary definitions
 * 
 * @param {Array<Object>} markdownData collection of parsed markdown data
 * @param {String} type key denoting type/ grouping of markdown data, to help parse frontmatter
 * @returns {Array<Object>}
 */
const getGlossaryUsagesInMarkdownData = (markdownData, type = 'rule') => {
	const usages = {}

	markdownData.forEach(data => {
		const { frontmatter, body } = data
		const glossaryMatches = getAllMatchesForRegex(regexps.glossaryReferenceInRules, body, false)

		glossaryMatches.forEach(glossaryItem => {
			const hasGlossaryKey = regexps.glossaryKey.test(glossaryItem.block)
			if (!hasGlossaryKey) {
				return
			}

			const key = glossaryItem.block.match(regexps.glossaryKey)[1]
			if (!key) {
				return
			}

			const usage = getUsageMetaData(frontmatter, type)
			if (!usages[key]) {
				usages[key] = [usage]
				return
			}

			const exists = usages[key].some(u => u.slug === usage.slug)
			if (exists) {
				return
			}

			usages[key] = usages[key].concat(usage)
		})
	})

	return usages
}

/**
 * Init
 */
const init = async () => {
	/**
	 * Get all rules `markdown` data, and create `_data/glossaries-in-rules.json`
	 */
	const rulesMarkdownData = getMarkdownData(config.markdown.rules)
	const usagesInRules = getGlossaryUsagesInMarkdownData(rulesMarkdownData, 'rule')
	await createFile(`./_data/glossaries-in-rules.json`, JSON.stringify(usagesInRules, undefined, 2))

	/**
	 * Get all glossary `markdown` data and create `_data/glossary-in-glossary.json`
	 */
	const glossariesMarkdownData = getMarkdownData(config.markdown.glossary)
	const usageInGlossary = getGlossaryUsagesInMarkdownData(glossariesMarkdownData, 'glossary')
	await createFile(`./_data/glossaries-in-glossaries.json`, JSON.stringify(usageInGlossary, undefined, 2))
}

/**
 * Invoke
 */
init()
	.then(() => console.info(`Completed: task: Create glossary usages\n`))
	.catch(e => console.error(e))
