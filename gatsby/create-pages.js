const createPageAddMdContext = require('./create-page-add-md-context')
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
		 * Create implementation report pages
		 */
		createPageImplementerReport(options),
	]

	await Promise.all(promises)
}

module.exports = createPages
