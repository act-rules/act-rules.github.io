const path = require('path')
const StaticServer = require('static-server');
const { testcases } = require(`../../public/testcases.json`)
const { getRuleMapping } = require(`./get-rule-mapping`)

const rootPath = path.resolve('../../public')

const ruleTests = Object.values(testcases.reduce((ruleTest, tc) => {
  if (!ruleTest[tc.ruleId]) {
    ruleTest[tc.ruleId] = []
  }
  ruleTest[tc.ruleId].push(tc)
  return ruleTest
}, {}))


module.exports.implementationTest = async function implementationTest (
  { port = 1338, start = 0, size = undefined },
  pageRunner
) {
  const mappings = []
  const server = new StaticServer({ rootPath, port })
  server.start()

  const tests = ruleTests.slice(start, start + size || undefined)
  for (cases of tests) {
    try {
      const testIndex = tests.indexOf(cases) + start;
      const implementation = await getRuleMapping(pageRunner, cases, port, testIndex)
      const actrRule = {
        ruleId: cases[0].ruleId,
        ruleName: cases[0].ruleName,
        accReq: cases[0].success_criterion,
        implementation
      }
      mappings.push(actrRule)
    } catch (e) {
      console.error(e.message, e.stack)
    }
  }
  
  server.stop()
  return mappings
}
