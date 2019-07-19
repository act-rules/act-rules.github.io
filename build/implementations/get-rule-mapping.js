const flat = require('flat')
const getTestcaseRelativeUrl = require('./get-testcase-relative-url')
const getRuleMappingState = require('./get-rule-mapping-state')
const getBestMatchingRules = require('./get-best-matching-rules')
const getTestcaseAssertions = require('./get-testcase-assertions')
const getTestCaseMapping = require('./get-testcase-mapping')

function getRuleMapping(testcases, assertions) {
	const ruleData = {}

	testcases.forEach(tc => {
		const relativeUrl = getTestcaseRelativeUrl(tc.url)
		const tcAssertions = getTestcaseAssertions(assertions, relativeUrl)

		// Create a mapping for each assertion
		tcAssertions.forEach(assertion => {
			const testMapping = getTestCaseMapping(assertion, tc)
			if (!testMapping || testMapping.actual === 'untested') {
				return
			}
			if (!ruleData[testMapping.title]) {
				ruleData[testMapping.title] = []
			}
			ruleData[testMapping.title].push(testMapping)
		})
	})

	for (tc of testcases) {
		const relativeUrl = getTestcaseRelativeUrl(tc.url)

		// Push untested results for every test case without an assertion
		Object.values(ruleData).forEach(testMappings => {
			if (!Object.values(testMappings).some(({ url }) => url && url.includes(relativeUrl))) {
				testMappings.push({
					title: testMappings[0].title,
					expected: tc.expected,
					actual: 'untested',
					url: tc.url,
				})
			}
		})
	}

	const ruleAsserts = Object.values(ruleData).map(data => {
		const mappingState = getRuleMappingState(data)
		return {
			...mappingState,
		}
	})

	return getBestMatchingRules(ruleAsserts)
}

module.exports = getRuleMapping
