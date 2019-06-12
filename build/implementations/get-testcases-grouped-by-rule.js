const axios = require('axios')
const { config } = require('./../../package.json')

/**
 * Get testcases of rules
 * - group them by `ruleId`
 */
const getTestcasesGroupedByRule = async () => {
  const testcasesUrl = config['testcases-url']
  const { data } = await axios.get(testcasesUrl)
  const { testcases } = data

  return testcases.reduce((out, testcase) => {
    const { ruleId } = testcase
    if (!out[ruleId]) {
      out[ruleId] = []
    }
    out[ruleId].push(testcase)
    return out
  }, {})
}

module.exports = getTestcasesGroupedByRule