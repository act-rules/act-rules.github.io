const { testcases } = require(`../public/testcases.json`)

module.exports.testCaseGroups = function testCaseGroups () {
  return Object.values(testcases.reduce((ruleTest, tc) => {
    if (!ruleTest[tc.ruleId]) {
      ruleTest[tc.ruleId] = []
    }
    ruleTest[tc.ruleId].push(tc)
    return ruleTest
  }, {}))
}