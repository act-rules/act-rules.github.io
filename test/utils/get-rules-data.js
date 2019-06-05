const fs = require('fs')
const path = require('path')
const globby = require('globby')
const fastmatter = require('fastmatter')

/**
 * Read all `markdown` files content from `_rules/*.md`
 */
const getRulesData = () => {
  return globby.sync([`./_rules/*.md`])
    .map(rulePath => {
      const filename = path.parse(rulePath).base
      const fileContents = fs.readFileSync(rulePath, { encoding: 'utf-8' })
      const { attributes: frontmatter, body } = fastmatter(fileContents)
      return {
        filename,
        frontmatter,
        body
      }
    })
}

module.exports = getRulesData