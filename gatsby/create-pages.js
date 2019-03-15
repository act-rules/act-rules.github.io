const createPageAddMdContext = require('./create-page-add-md-context');
const createPageGenerateTestcases = require('./create-page-generate-testcases');

const createPages = options => {
	return Promise.all([
		/**
		 * Enhance markdown pages with more context
		 */
		createPageAddMdContext(options),
		/**
		 * Create test case files & meta data
		 */
		createPageGenerateTestcases(options),
	]);
};

module.exports = createPages;
