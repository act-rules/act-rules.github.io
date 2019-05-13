const path = require('path')
const assert = require('assert')
const StaticServer = require('static-server');
const { testCaseGroups } = require(`./test-case-groups`)

const rootPath = path.resolve(__dirname, '../public')
const ruleTests = testCaseGroups()

module.exports.runTestCases = async function runTestCases (
  { port = 1338, start = 0, size = undefined },
  pageRunner
) {
  let i = 0;
  const results = []
  const tests = ruleTests.slice(start, start + size || undefined)
  const server = new StaticServer({ rootPath, port })
  server.start()
  
  for (ruleTest of tests) {
    const testIndex = start + i++;
    const { ruleName, ruleId } = ruleTest[0]
    console.log(`testing #${testIndex}: ${ruleName} (${ruleId})`)
    process.stdout.write('  ')

    try {
      const ruleResults = await runRuleTests(pageRunner, ruleTest, port)
      results.push(...ruleResults)
    } catch (e) {
      console.error(e.message, e.stack)
    }
  }
  
  server.stop()
  return results
}

async function runRuleTests (pageRunner, testcases, port) {
  const testResults = []
  for (testcase of testcases) {
    process.stdout.write('.');

    const results = await pageRunner({
      url: getTestUrl(testcase.url, port),
      ruleName: testcase.ruleName,
      success_criterion: testcase.success_criterion
    })
    assert(typeof results === 'object', 'Expected `pageRunner` to return an object')
    testResults.push(results)
  }

  process.stdout.write('\n');
  return testResults
}

function getTestUrl (url, port) {
  const localUrl = url.replace('https://act-rules.github.io/', '')
  return `http://127.0.0.1:${port}/${localUrl}`
}
