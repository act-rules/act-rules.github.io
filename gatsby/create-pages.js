const createPageAddMdContext = require('./create-page-add-md-context')
const createGlossaryUsagesInRules = require('./create-glossary-uages-in-rules')
const createPageImplementerReport = require('./create-page-implementer-report')

const createPages = async options => {
	const promises = [
		/**
		 * Enhance markdown pages with more context
		 * -> get all data necessary from `on-create-node` callback
		 * -> extend `context` object on `markdown` pages
		 */
		createPageAddMdContext(options),

		/**
		 * Create glossary usages
		 * -> for each glossary item (find references in each rule)
		 * -> this is saved in `_data` which is later used in `pages/glossary`
		 */
		createGlossaryUsagesInRules(options),

		/**
		 * Create implementation report pages
		 */
		createPageImplementerReport(options)
	]

	await Promise.all(promises)
}

module.exports = createPages
