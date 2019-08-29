const globby = require('globby')
const getMarkdownData = require('./get-markdown-data')

/**
 * Read all pages & parse the markdown
 */
const getPagesMarkdownData = () => globby.sync([`./pages/**/*.md`])
  .map(path => getMarkdownData(path))

module.exports = getPagesMarkdownData