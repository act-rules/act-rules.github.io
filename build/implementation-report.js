const jsonld = require('jsonld')
const { testCaseGroups } = require(`./test-case-groups`)
const { getRuleMapping, context } = require('./auto-mapping')

// Array of test cases, in an array for each rule
const ruleTests = testCaseGroups()
const earlFrame = {
  '@context': context,
  '@type': 'Assertion'
}

module.exports.implementationReport = async function implementationReport (earlReports) {
  const assertions = []
  // If passed multiple reports, frame them one by one to avoid colliding IDs
  for (report of (Array.isArray(earlReports) ? earlReports : [earlReports])) {
    const framedReport = await jsonld.frame(report, earlFrame)
    assertions.push(...framedReport['@graph'])
  }

  console.log(`Found ${assertions.length} assertions...\n`)

  // Find an implementation for each rule
  return ruleTests.map((ruleTestCases) => {
    const { ruleId, ruleName, success_criterion: accReq } = ruleTestCases[0]
    const implementation = getRuleMapping(ruleTestCases, assertions)

    return { implementation, ruleName, ruleId, accReq }
  })
}
