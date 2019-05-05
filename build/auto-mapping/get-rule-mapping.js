const { bestMatchingRules } = require('./best-matching-rules')
const { getMappingState } = require('./get-mapping-state')
const assert = require('assert')


module.exports.getRuleMapping = async function getRuleMapping (pageRunner, testcases, port, index = 0) {
  console.log(`testing #${index}: ${testcases[0].ruleName} (${testcases[0].ruleId})`)
  process.stdout.write('  ');
  const testResults = []

  for (testcase of testcases) {
    const results = await pageRunner({
      url: getTestUrl(testcase.url, port),
      ruleName: testcase.ruleName,
      success_criterion: testcase.success_criterion
    })

    assert(typeof results === 'object', 'Expected `pageRunner` to return an object')

    process.stdout.write('.');
    testResults.push({ testcase, results })
  }

  process.stdout.write('\n');
  return processTestResults(testResults, port)
}

async function runTestCase (pageRunner, port, { url, ruleName, success_criterion }) {
  return await pageRunner({
    url: getTestUrl(url, port),
    ruleName,
    success_criterion
  })
}


function processTestResults (testResults, port) {
  const ruleData = {}
  for ({ results, testcase } of testResults) {
    // Create a mapping for each assertion
    results['@graph'].forEach((assertion) => {
      const testMapping = getTestCaseMapping(assertion)
      if (!testMapping || testMapping.actual === 'untested') {
        return
      }
      if (!ruleData[testMapping.testTitle]) {
        ruleData[testMapping.testTitle] = []
      }
      ruleData[testMapping.testTitle].push(testMapping)
    })
  }

  for ({ testcase } of testResults) {
    const testUrl = getTestUrl(testcase.url, port)

    // Push untested results for every test case without an assertion
    Object.values(ruleData).forEach(testMappings => {
      if (!testMappings.some(({ url }) => url === testUrl)) {
        testMappings.push({
          testTitle: testMappings[0].testTitle,
          expected: testcase.expected,
          actual: 'untested',
          url: testUrl
        })
      }
    })
  }

  const ruleAsserts = Object.keys(ruleData).map((ruleId) => {
    return {
      ruleId,
      ...getMappingState(ruleData[ruleId])
    }
  })

  return bestMatchingRules(ruleAsserts)
}

function getTestCaseMapping (assertion) {
  if (typeof assertion !== 'object' || assertion['@type'] !== 'Assertion') {
    return
  }

  const { subject = {}, test = {}, result = {} } = assertion
  return {
    testTitle: test.title,
    expected: testcase.expected,
    actual: result.outcome.replace('earl:', ''),
    url: subject.source
  }
}

function getTestUrl (url, port) {
  const localUrl = url.replace('https://act-rules.github.io/', '')
  return `http://127.0.0.1:${port}/${localUrl}`
}
