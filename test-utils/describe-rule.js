const getRules = require('../utils/get-rules')

/**
 * describe rule helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describe` block, which executes per rule
 */
const describeRule = (groupName, runTests) => {

  const rules = getRules()

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