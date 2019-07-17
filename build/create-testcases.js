const { copy } = require('fs-extra')
const globby = require('globby')
const objectHash = require('object-hash')
const codeBlocks = require('gfm-code-blocks')
const {
	www: { url },
} = require('./../package.json')
const getMarkdownData = require('./../utils/get-markdown-data')
const createFile = require('../utils/create-file')
const regexps = require('../utils/reg-exps')
const getAllMatchesForRegex = require('../utils/get-all-matches-for-regex')
const createTestcasesJson = require('./testcases/create-testcases-json')
const createTestcasesOfRuleOfEmReportTool = require('./testcases/create-testcases-of-rule-of-em-report-tool')

/**
 * Create test case files & other meta-data  from test case in each rule.
 *
 * -> create test cases files into `_data` directory
 * -> copy test assets into `_data` directory
 * -> create `testcases.json`
 *
 * These files will be copied into `public` directory during gatsby `preBootstrap` hook/ build
 */
const init = async () => {
	/**
	 * Get all rules `markdown` data
	 */
	const rulesData = globby
		.sync([`./_rules/*.md`])
		.map(rulePath => getMarkdownData(rulePath))

	let allRulesTestcases = []

	/**
	 * iterate all rule pages
	 * -> get code snippets
	 * -> and their relevant titles
	 */
	for (const { frontmatter, body } of rulesData) {
		const {
			id: ruleId,
			name: ruleName,
			accessibility_requirements: ruleAccessibilityRequirements,
		} = frontmatter

		/**
		 * get all titles of test case examples (eg: #### Failed Example 1)
		 */
		const codeTitles = getAllMatchesForRegex(regexps.testcaseTitle, body)

		/**
		 * get code blocks in markdown body
		 */
		const codeSnippets = codeBlocks(body)

		if (codeTitles.length !== codeSnippets.length) {
			throw new Error(
				`Number of matching titles for code snippets is wrong. Check markdown '${ruleName}' for irregularities.`
			)
		}

		/**
		 * iterate each code snippet
		 * -> create a testcase file
		 * -> and add meta of testcase to `testcases.json`
		 */
		const ruleTestcases = []

		for (const [index, codeSnippet] of codeSnippets.entries()) {
			const title = codeTitles[index]
			if (!title) {
				throw new Error('No title found for code snippet.')
			}

			const { code, block } = codeSnippet
			let { type = 'html' } = codeSnippet

			if (regexps.testcaseCodeSnippetTypeIsSvg.test(block.substring(0, 15))) {
				type = 'svg'
			}

			const codeId = objectHash({ block, type, ruleId })

			const titleCurated = title.value.split(' ').map(t => t.toLowerCase())
			const testcaseFileName = `${ruleId}/${codeId}.${type}`
			const testcasePath = `testcases/${testcaseFileName}`

			/**
			 * Create testcase file
			 */
			await createFile(`_data/rules-testcases/${testcasePath}`, code)

			/**
			 * Create meta data for testcase(s)
			 */
			const testcase = {
				testcaseId: codeId,
				url: `${url}/${testcasePath}`,
				relativePath: testcasePath,
				expected: titleCurated[0],
				ruleId,
				ruleName,
				rulePage: `${url}/rules/${ruleId}`,
				ruleAccessibilityRequirements,
			}
			ruleTestcases.push(testcase)
		}

		// add rule testcases to all testcases
		allRulesTestcases = allRulesTestcases.concat(ruleTestcases)

		/**
		 * Create test cases of rule for use with `em report tool`
		 */
		await createTestcasesOfRuleOfEmReportTool({
			ruleId,
			ruleName,
			ruleTestcases,
			ruleAccessibilityRequirements,
		})
	}

	/**
	 * Copy `test-assets` that are used by `testcases`
	 */
	await copy('./test-assets', './_data/rules-testcases/test-assets')

	/**
	 * Generate `testcases.json`
	 */
	await createTestcasesJson(allRulesTestcases)
}

/**
 * Invoke
 */
init()
	.then(() => console.log('Completed task: createTestcases'))
	.catch(e => {
		console.error(e)
		process.write(1)
	})
