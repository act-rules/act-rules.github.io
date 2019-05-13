const {
	www: { url, baseDir },
} = require('./../package.json')
const scUrlsMetaData = require('./../_data/sc-urls.json')
const scEmReportAuditResult = require('./../_data/sc-em-report-audit-result.json')
const graphContext = require('./../_data/wcag-em-report-tool-mappings/@graph-context.json')
const graphAdditionalMeta = require('./../_data/wcag-em-report-tool-mappings/@graph-additional-meta.json')
const graphEvaluatorMeta = require('./../_data/wcag-em-report-tool-mappings/@graph-evaluator-meta.json')
const createFile = require('./../build/create-file')

/**
 * Create testcases json file that can be used by
 */
const createTestcasesOfRuleOfEmReportTool = async options => {
	const {
		ruleId,
		ruleName,
		ruleTestcases,
		ruleAccessibilityRequirements,
	} = options

	const title = `Report for ACT-R Rule - ${ruleName}`
	const siteName = `ACT-R Rule - ${ruleName}`
	const siteScope = `${url}/testcases/${ruleId}/`
	const webpages = ruleTestcases.map((testcase, index) => {
		const { url, testcaseId } = testcase
		return {
			type: ['TestSubject', 'WebPage'],
			id: `_:struct_${index}`,
			description: url,
			source: url,
			title: testcaseId,
			tested: false,
		}
	})

	const ruleScs = ruleAccessibilityRequirements
		? Object.keys(ruleAccessibilityRequirements).map(key => {
				return key.split(':').pop()
		  })
		: []
	const matchingScTests = ruleScs.map(scNum => {
		return scUrlsMetaData[scNum].test.toLowerCase()
	})

	const auditResults = scEmReportAuditResult.map(auditResult => {
		auditResult.result.outcome = matchingScTests.includes(
			auditResult.test.toLowerCase()
		)
			? 'earl:cantTell'
			: 'earl:inapplicable'
		return auditResult
	})

	const json = {
		'@graph': [
			{
				...graphContext,
				...graphAdditionalMeta,
				title,
				evaluationScope: {
					type: 'EvaluationScope',
					conformanceTarget: 'wai:WCAG2AA-Conformance',
					additionalEvalRequirement: '',
					website: {
						type: ['TestSubject', 'WebSite'],
						id: '_:website',
						siteName,
						siteScope,
					},
					accessibilitySupportBaseline: '<< Fill out >>',
				},
				auditResults,
				structuredSample: {
					webpage: webpages,
				},
			},
			{
				...graphEvaluatorMeta,
			},
		],
	}

	await createFile(
		`${baseDir}/testcases/${ruleId}/rule-${ruleId}-testcases-for-em-report-tool.json`,
		JSON.stringify(json, undefined, 2)
	)
}

module.exports = createTestcasesOfRuleOfEmReportTool
