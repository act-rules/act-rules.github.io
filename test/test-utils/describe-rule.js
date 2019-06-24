const globby = require('globby')
const getMarkdownData = require('../../utils/get-markdown-data')

/**
 * 
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describe` block, which executes per rule
 */
const describeRule = (groupName, runTests) => {

  const rules = globby.sync([`./_rules/*.md`]).map(
    rulePath => getMarkdownData(rulePath)
  )

  rules.forEach(ruleData => {
    const { filename } = ruleData
    describe(filename, () => {
      describe(groupName, () => {
        runTests(ruleData)
      })
    })
  })
}

module.exports = describeRule