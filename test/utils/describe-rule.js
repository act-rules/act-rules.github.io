const getRulesData = require('./get-rules-data')
const rules = getRulesData()

/**
 * 
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describe` block, which executes per rule
 */
const describeRule = (groupName, runTests) => {
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