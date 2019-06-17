const globby = require('globby')
const getMarkdownData = require('./../../utils/get-markdown-data')

/**
 * Read all `markdown` files content from `_rules/*.md`
 */
const getRulesData = () => {
  return globby.sync([`./_rules/*.md`])
    .map(rulePath => getMarkdownData(rulePath))
}

module.exports = getRulesData