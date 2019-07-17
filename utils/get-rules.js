const globby = require('globby')
const getMarkdownData = require('./get-markdown-data')

/**
 * Read all rules & parse the markdown
 */
const getRules = () => {
  return globby.sync([`./_rules/*.md`]).map(
    rulePath => getMarkdownData(rulePath)
  )
}

module.exports = getRules