const createPageAddMdContext = require('./create-page-add-md-context')

const createPages = (options) => {

  return Promise.all([
    /**
     * Enhance markdown pages with more context
     */
    createPageAddMdContext(options),
    /**
     * Create test case files
     */
  ])
}

module.exports = createPages