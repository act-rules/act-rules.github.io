const { getMappingState } = require('./get-mapping-state')
const { bestMatchingRules } = require('./best-matching-rules')

module.exports.getRuleMapping = function getRuleMapping (testCases, assertions) {
  const ruleData = {}
  testCases.forEach(testCase => {
    const localUrl = getLocalUrl(testCase.url)
    const tcAssertions = assertions.filter(assertion => {
      return getSource(assertion).includes(localUrl)
    })

    // Create a mapping for each assertion
    tcAssertions.forEach((assertion) => {
      const testMapping = getTestCaseMapping(assertion, testCase)
      if (!testMapping || testMapping.actual === 'untested') {
        return
      }
      if (!ruleData[testMapping.testTitle]) {
        ruleData[testMapping.testTitle] = []
      }
      ruleData[testMapping.testTitle].push(testMapping)
    })
  })

  for (testCase of testCases) {
    const localUrl = getLocalUrl(testCase.url)

    // Push untested results for every test case without an assertion
    Object.values(ruleData).forEach(testMappings => {
      if (!testMappings.some(({ url }) => url && url.includes(localUrl))) {
        testMappings.push({
          testTitle: testMappings[0].testTitle,
          expected: testCase.expected,
          actual: 'untested',
          url: testCase.url
        })
      }
    })
  }

  const ruleAsserts = Object.keys(ruleData).map((ruleId) => {
    const mappingState = getMappingState(ruleData[ruleId])
    return { ruleId, ...mappingState }
  })

  return bestMatchingRules(ruleAsserts)
}

function getTestCaseMapping (assertion, testCase) {
  return {
    testTitle: getTestTitle(assertion),
    url: getSource(assertion),
    expected: testCase.expected,
    actual: assertion.result.outcome.replace('earl:', '')
  }
}

function getSource ({ subject }) {
  if (typeof subject === 'string') {
    return subject
  } else if (subject.source) {
    return (typeof subject.source === 'object'
      ? subject.source['@id']
      : subject.source
    )
  } else {
    return subject['@id']
  }
}

function getTestTitle ({ test, EMTest }) {
  if (!test) {
    return EMTest || null
  }
  if (typeof test === 'string') {
    return test
  }
  if (test.title) {
    return test.title
  }
  return test['@id'] || ''
}

function getLocalUrl (url) {
  return url.substr(url.indexOf('/testcases/'))
}
